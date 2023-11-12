import {Outlet} from "react-router-dom";
import Navbar from "./Shared/Navbar";

export default function Root() {
	return <>
		<Navbar/>
		<Outlet/>
	</>
}
