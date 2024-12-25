import { createBrowserRouter} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import Home from "../Pages/Home/Home";
// import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register"

import CategoryCard from "../Components/CategoryCard/CategoryCard";
// import Books from "../Components/Books/Books";
// import CategoryPage from "../Components/Categories/Categories";
import BookDetails from "../Components/BookDetails/BookDetails";
import PrivateRoute from "./PrivateRoute";
import AllBooks from "../Components/AllBooks/AllBooks";
import UpdateForm from "../Components/UpdateForm/UpdateForm";
import AddBook from "../Components/AddBook/AddBook";
import BorrowedBook from "../Components/BorrowedBook/BorrowedBook";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Books from "../Components/Books/Books";
// import NewCategoryCard from "../Components/NewCategory/NewCategoryCard";
// import OldCategory from "../Components/NewCategory/OldCategory";
// import NewBooks from "../Components/NewBooks/NewBooks";
// import OldCategory from "../Components/NewCategory/OldCategory";
// import NewCategory from "../Components/NewCategory/NewCategory";

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
          element: <Books></Books>
         
        },
        // {
        //   path:"/newCategory",
        //   element: <NewCategory></NewCategory>,
         
        // },
        {
          path: "/update/:id",
          element:<UpdateForm></UpdateForm>,
          loader: ({params})=>fetch(`http://localhost:5000/book-details/${params.id}`)
        },
        {
          path: "/category",
          element: <CategoryCard></CategoryCard>,
          // loader:({params})=>fetch(`http://localhost:5000/book-categories/${params.ca}`)
        },
        {
            path: "/book-details/:id",
            element: <PrivateRoute><BookDetails></BookDetails></PrivateRoute>,
            loader: ({params})=>fetch(`http://localhost:5000/book-details/${params.id}`)
        },
        {
          path: "/all-books",
          element: <PrivateRoute><AllBooks></AllBooks></PrivateRoute>
        },
        {
            path:"/login",
            element: <Login></Login>
        },
        // {
        //     path:"/new-books/:id",
        //     element: <NewBooks></NewBooks>,
        //     loader: ({params})=>fetch(`http://localhost:5000/books/${params.id}`)

        // },
        // {
        //     path: "/categories/:category",
        //     element: <Books></Books>,
        //     loader:({params})=>fetch(`http://localhost:5000/book-categories/${params.category}`)
        // },
        // {
        //     path: "/new",
        //     element: <NewCategoryCard></NewCategoryCard>
        // },
        // {
        //     path: "/category/:id",
        //     element: <OldCategory></OldCategory>,
        //     loader:({params})=>fetch(`http://localhost:5000/book-categories/${params.id}`)
        // },
      {
          path: "/add-book",
          element: <PrivateRoute><AddBook></AddBook></PrivateRoute>
      },
      {
          path: "/borrowed-books",
          element: <PrivateRoute><BorrowedBook></BorrowedBook></PrivateRoute>
      },
      {
          path:"/aboutUs",
          element:<AboutUs></AboutUs>
      },
      {
        path: "/contactUs",
        element:<ContactUs></ContactUs>
      },

        {
            path:"/register",
            element: <Register></Register>
        }
      ]
    },
  ]);

