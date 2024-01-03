import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AdminLayout from "../components/layout/AdminLayout";
import AddService from "../Pages/AddService";


const routes = createBrowserRouter([
    {
    path:'/',
    element:<App/>,
    children:[
        {
            path:'about',
            element:<About/>
        },
        {
            path:'contact',
            element:<Contact/>
        },
    ]
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/register',
        element:<Register/>
    },
    {
        path:'/admin',
        element:<AdminLayout/>,
        children:[
            {
                path:'addService',
                element:<AddService/>
            }
        ]
    },


])



export default routes;