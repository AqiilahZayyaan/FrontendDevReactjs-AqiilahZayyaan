import DetailPage from "./pages/detail";
import HomePage from "./pages/home";

import { useRoutes } from "react-router";

const routes = [
  { path: "/", 
  element: <HomePage /> 
  },
  
  { path: "/detail/:id", 
  element: <DetailPage /> 
  },
];
function App() {
  const element = useRoutes(routes);
  return element;
}

export default App;
