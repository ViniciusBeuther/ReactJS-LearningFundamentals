import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Storage from "./pages/Storage";
import Details from "./pages/Details";
import NewItem from "./pages/NewItem";
import UpdateItem from "./pages/UpdateItem";
import User from './objects/User'

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Dashboard data={User} />
        },
        {
            path: "/storage",
            element: <Storage data={User} />
        },
        {
            path: "storage/:itemID",
            element: <Details />
        },
        {
            path: "/newItem",
            element: <NewItem data={User} />
        },
        {
            path: "/updateItem/:itemID",
            element: <UpdateItem />
        }
    ])

    export default router