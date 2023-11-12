import { NavLink } from "react-router-dom";
import CartIcon from "../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png";
import DummyUserIcon from "../../assets/icon/Frame.svg";

export default function Navbar() {
	return <div className="flex text-white fixed w-full bg-[#151515]/50 items-center justify-between py-6 px-14">
		<div className="">
			<h1 className="text-[32px] font-black">Bistro Boss</h1>
			<h2 className="text-2xl text-justify font-bold tracking-[9px]">
				<span className="text-3xl">R</span>ESTAURANT
			</h2>
		</div>
		
		<div>
			<ul className="flex font-bold text-xl justify-center items-center gap-4">
				<li><NavLink to="/">Home</NavLink></li>
				<li><NavLink to="/contact">Contact Us</NavLink></li>
				<li><NavLink to="/dashboard">Dashboard</NavLink></li>
				<li><NavLink to="/menu">Our Menu</NavLink></li>
				<li><NavLink to="/shop">Our Shop</NavLink></li>
				<li><img src={ CartIcon } className="h-10"/></li>
				<li>Sign Out</li>
				<li><img src={ DummyUserIcon }/></li>
			</ul>
		</div>
	</div>
}
