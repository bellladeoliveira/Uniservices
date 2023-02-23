import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from './pages/Home';


const router = createBrowserRouter([
  { path: "/", element: <HomePage/> },
  { path: "/equipe", element: <div>Equipe</div> },
  { path: "/fornecedores", element: <div>Fornecedores</div> },
  { path: "/servicos", element: <div>Serviços</div> },
  { path: "/login", element: <div>Login</div> },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
