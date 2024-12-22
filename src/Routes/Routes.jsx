import { createBrowserRouter} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import Home from "../Pages/Home/Home";
// import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register"

import CategoryCard from "../Components/CategoryCard/CategoryCard";
import Books from "../Components/Books/Books";
import CategoryPage from "../Components/Categories/Categories";

// import PrivateRoute from "./PrivateRoute";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
       
        {
          path:"/books",
          element: <Books></Books>,
         
        },
        {
          path: "/category",
          element: <CategoryCard></CategoryCard>,
          // loader:({params})=>fetch(`http://localhost:5000/book-categories/${params.ca}`)
        },
        {
            path:"/login",
            element: <Login></Login>
        },
        {
            path: "/categories/:category",
            element: <Books></Books>,
            loader:({params})=>fetch(`http://localhost:5000/book-categories/${params.category}`)
        },
        {
            path:"/register",
            element: <Register></Register>
        }
      ]
    },
  ]);

