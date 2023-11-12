import { createBrowserRouter } from "react-router-dom"
import Root from "../Layout/Root";

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root/>,
		children: [
			{
				path: '/',
				element: <div>This is home</div>
			}
		]
	},
	{ path: "/login", element: <div>This is login page</div> },
	{ path: "/register", element: <div>This is register page</div> },
])

export default router;
