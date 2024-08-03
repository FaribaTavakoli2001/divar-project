import { Routes , Route, Navigate } from "react-router-dom";

import AuthPage from "pages/AuthPage";
import HomePage from "pages/HomePage";
import Dashboard from 'pages/Dashboard';
import AdminPage from 'pages/AdminPage';
import PageNotFound from 'pages/404'
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../services/user";
import Loader from "../components/module/Loader";
import DetailesPage from "../pages/DetailesPage";

function Router() {
  const {data , isLoading , error} = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile
  })
  // console.log({ data, isLoading ,error })

  if(isLoading) return <Loader />

  return (
    <Routes>
    <Route path="/" element={<HomePage />}/>
    <Route path="/dashboard" element={data ? <Dashboard /> : <Navigate to='/auth'/>}/>
    <Route path="/auth" element={data ? <Navigate to='/dashboard' /> : <AuthPage />}/>
    <Route path="/admin" element={data && data.data.role === 'ADMIN' ? (
      <AdminPage />
    ) : (
      <Navigate to='/'/>
    )}/>
    <Route path="/detailes" element={<DetailesPage />} />
    <Route path="*" element={<PageNotFound />}/>
   </Routes>
  )
}

export default Router