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
            element: <Dashboard itemList={User.itemList} />,
        },
        {
            path: "/storage",
            element: <Storage itemList={User.itemList} />
        },
        {
            path: "/:itemId",
            element: <Details itemList={User.itemList} />
        },
        {
            path: "/newItem",
            element: <NewItem itemList={User.itemList} />
        },
        {
            path: "/updateItem",
            element: <UpdateItem itemList={User.itemList} />
        }
    ])

    export default router