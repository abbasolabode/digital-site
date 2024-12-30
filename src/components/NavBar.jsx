import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

export default function NavBar() {
	const [showMenu, setShowMenu] = useState(false);

	function handleShowMenu() {
		setShowMenu((showMenu) => !showMenu);
		console.log("Clicked");
	}

	return (
		<nav className="fixed top-0 left-0 w-full min-h-[4rem] flex justify-between items-center bg-black z-50 p-4">
			{!showMenu && <Logo />}
			<ul
				className={`${
					showMenu
						? "w-full min-h-screen flex flex-col items-start ml-4 mt-3 bgScreen:w-[60rem] bgScreen:flex-row bgScreen:items-center bgScreen:justify-end"
						: "hidden bgScreen:flex bgScreen:items-center bgScreen:justify-end"
				}`}
			>
				<li className="text-base font-poppins font-medium text-white mb-3 bgScreen:text-3xl bgScreen:w-[10rem] bgScreen:mb-0 bgScreen:ml-6 bgScreen:hover:underline bgScreen:hover:underline-offset-8 mt-10 bgScreen:flex  bgScreen:h-[5rem] bgScreen:items-start ">
					<NavLink to="/home">Home</NavLink>
				</li>
				<li className="text-base font-poppins font-medium text-white mb-3 bgScreen:mb-0 bgScreen:ml-6 bgScreen:text-3xl bgScreen:w-[10rem] bgScreen:hover:underline bgScreen:hover:underline-offset-8">
					<NavLink to="/feature">Feature</NavLink>
				</li>
				<li className="text-base font-poppins font-medium text-white mb-3 bgScreen:text-3xl bgScreen:w-[12rem] bgScreen:mb-0 bgScreen:ml-6 bgScreen:hover:underline bgScreen:hover:underline-offset-8">
					<NavLink to="../layout">Dashboard</NavLink>
				</li>
				<li className="text-base font-poppins font-medium text-white mb-3 bgScreen:mb-0 bgScreen:ml-6 bgScreen:text-3xl bgScreen:w-[12rem] bgScreen:hover:underline bgScreen:hover:underline-offset-8 ">
					<NavLink to="/contact">Contact Us</NavLink>
				</li>
			</ul>

			{showMenu ? (
				<IoMdClose
					onClick={handleShowMenu}
					className="text-2xl text-white fixed top-4 left-4 bgScreen:hidden"
				/>
			) : (
				<div className="bgScreen:hidden" onClick={handleShowMenu}>
					<CiMenuFries className="text-4xl font-bold text-white p-2" />
				</div>
			)}
		</nav>
	);
}
