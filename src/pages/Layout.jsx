import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import HeaderLayout from "../components/HeaderLayout";


export default function Layout() {
	return (
		<div className="flex flex-row h-screen w-screen bg-neutral-100 gap-[3rem] overflow-hidden ">
			<Sidebar />

			<div className="p-4">
				<HeaderLayout />
				{<Outlet />}
			</div>
		</div>
	);
}
