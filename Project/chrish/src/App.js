import Reg from './Details/register'
import Log from './Details/login'
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
