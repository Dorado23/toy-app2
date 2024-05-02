import ReactDOM from "react-dom/client";
import React from "react";
import Landing from "./Landing";
import Root from "./Root";
;
import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				// we use index that tell the router that this is the default page
				index: true,
				element: <Landing />,
			},
			{
				path: "Kundvagn",
				element: <Kundvagn />,
			},
			{
				path: "Products",
				element: <Products />,
			},

            {
				path: "Addproducts",
				element: <AddProducts />,
			},

            {
				path: "EditProduct",
				element: <EditProducts />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
