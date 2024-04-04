import Reg from './Details/register'
import Log from './Details/login'
import Home from './Details/home'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Reg />,
    },
    {
      path:"/login",
      element:<Log />
    },
    {
      path:"/home",
      element:<Home />
    }
  ])
  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router}/>

      </header>
    </div>
  );
}

export default App;
