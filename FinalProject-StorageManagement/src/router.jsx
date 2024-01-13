import { createBrowserRouter } from "react-router-dom";

export default function router(){
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        }
    ])
}