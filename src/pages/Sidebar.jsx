import { Link, useLocation } from "react-router-dom";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdAutoGraph } from "react-icons/md";
import classNames from "classnames";

import {
	DASHBOARD_SIDEBAR_BOTTOM_LINKS,
	DASHBOARD_SIDEBAR_LINKS,
} from "../lib/constant/Navigation";

const linkClasses =
	"flex items-center gap-2 font-light p-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

export default function Sidebar() {
	return (
		<div className="flex flex-col bg-neutral-900 w-60 p-3 text-white">
			<div className="flex items-center gap-1">
				<MdAutoGraph className="text-[3.5rem] text-teal-400 mt-4" />
				<p className="text-3xl font-poppins mt-2">Tracker</p>
			</div>
			<div className="flex-1 p-8 flex flex-col gap-0.5">
				{DASHBOARD_SIDEBAR_LINKS.map((item) => (
					<SidebarLink key={item.key} item={item} />
				))}
			</div>
			<div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
				{DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
					<SidebarLink key={item.key} item={item} />
				))}

				<Link to="/logout" className={classNames("text-red-400 cursor-pointer", linkClasses)}>
					<span className="text-xl">
						<RiLogoutCircleLine />
					</span>
					Logout
				</Link>
			</div>
		</div>
	);
}

function SidebarLink({ item }) {
	const { pathname } = useLocation();
	return (
		<Link
			to={item.path}
			className={classNames(
				pathname === item.path
					? "bg-neutral-700 text-white"
					: "text-neutral-500",
				linkClasses
			)}
		>
			<span className="text-xl">{item.icon}</span>
			{item.label}
		</Link>
	);
}
