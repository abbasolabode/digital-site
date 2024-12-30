import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
//import {Popover} from "@headlessui/react"


export default function HeaderLayout() {
	return (
		<div className="w-[70rem] bg-white h-16 px-4 flex justify-between items-center border-b border-color-gray-200">
			<div className="relative flex items-center">
				<IoSearchOutline
					fontSize={20}
					className="text-gray-400 absolute left-3 top:1/2 "
				/>
				<input
					type="text"
					placeholder="Search..."
					className="text-sm focus:outline-none active:outline-none h-10 w-64 pl-11 pr-4 border border-gray-300 rounded-sm"
				/>
			</div>
			<div className="flex flex-item">
			
				<IoChatboxEllipsesOutline fontSize={24} />
                <FaBell  fontSize={24} />
			</div>
		</div>
	);
}
