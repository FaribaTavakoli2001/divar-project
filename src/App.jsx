import { BrowserRouter } from "react-router-dom";
import Router from './routes/Router'
import defaultOptions from './configs/QueryConfigs'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "./Layout/Layout";

function App() {
  const queryClient = new QueryClient({defaultOptions})
 

  return (
  <>
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Layout>
      <Router/>
    </Layout>
    </BrowserRouter>
  <ReactQueryDevtools />
  </QueryClientProvider>
  </>
  );
}

export default App;
