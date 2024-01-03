import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AdminLayout from "../components/layout/AdminLayout";
import AddService from "../Pages/AddService";
import Services from "../Pages/Services";
import Home from "../Pages/Home";


const routes = createBrowserRouter([
    {
    path:'/',
    element:<App/>,
    children:[
        {
            index:true,
            element:<Home/>
        },
        {
            path:'about',
            element:<About/>
        },
        {
            path:'contact',
            element:<Contact/>
        },
        {
            path:'services',
            element:<Services/>
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
                index:true,
                element:<AddService/>
            }
        ]
    },


])



export default routes;