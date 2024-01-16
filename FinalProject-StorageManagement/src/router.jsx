import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Storage from "./pages/Storage";
import Details from "./pages/Details";
import NewItem from "./pages/NewItem";
import UpdateItem from "./pages/UpdateItem";
import User from "./objects/user";

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Dashboard data={User} />,
        },
        {
            path: "/storage",
            element: <Storage data={User} />
        },
        {
            path: "/:itemId",
            element: <Details data={User} />
        },
        {
            path: "/newItem",
            element: <NewItem data={User} />
        },
        {
            path: "/updateItem",
            element: <UpdateItem data={User} />
        }
    ])

    export default router