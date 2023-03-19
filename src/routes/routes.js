import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddBooks from "../pages/AddBooks";
import EditBooks from "../pages/EditBooks";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/addBook",
                element: <AddBooks></AddBooks>
            },
            {
                path: "/editBook/:id",
                element: <EditBooks></EditBooks>
            }
        ]
    }
])