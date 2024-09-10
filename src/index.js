import * as React from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                <h1>Hello World</h1>
                <nav>
                    <img />
                    <ul
                        style={{
                            listStyle: "none",
                            display: "flex",
                            flexDirection: "row-reverse",
                            width: "100%",
                            justifyContent: "space-evenly"
                        }}>
                        <li><Link to="./Form1">Form 1</Link></li>
                        <li><Link to="./Form2"> Form 2</Link></li>
                        <li><Link to="./PopUpWindows"> Pop Up Windows</Link></li>
                    </ul>
                </nav>
                <Home />
            </div>
        ),
    },
    {
        path: "about",
        element: <div>About</div>
    },
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
)