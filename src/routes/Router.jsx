import { Routes , Route } from "react-router-dom";

import AuthPage from "pages/AuthPage";
import HomePage from "pages/HomePage";
import Dashboard from 'pages/Dashboard';
import AdminPage from 'pages/AdminPage';
import PageNotFound from 'pages/404'
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../services/user";

function Router() {
  const { data , isLoading , error} = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
  })
  console.log({data , isLoading })

  if(isLoading) return <h1>Loading ...</h1>

  return (
    <Routes>
    <Route path="/" element={<HomePage />}/>
    <Route path="/dashboard" element={<Dashboard />}/>
    <Route path="/auth" element={<AuthPage />}/>
    <Route path="/admin" element={<AdminPage />}/>
    <Route path="*" element={<PageNotFound />}/>
   </Routes>
  )
}

export default Router