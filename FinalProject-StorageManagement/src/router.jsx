import { createBrowserRouter } from "react-router-dom";

export default function router(){
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Dashboard />,
        },
        {
            path: "/storage",
            element: <Storage />
        },
        {
            path: "/:itemId",
            element: <Details />
        },
        {
            path: "/newItem",
            element: <NewItem />
        },
        {
            path: "/updateItem",
            element: <UpdateItem />
        }
    ])
}