import { IoLogoXbox } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Logo() {
	return (
		<div className="w-[10rem] min-h-[1.4rem] mt-2  bgScreen:w-[20rem]  bgScreen:min-h-[2.5rem]  bgScreen:ml-[3rem]">
			<Link to="/home" className=" text-xl font-poppins font-semibold ml-2 flex items-center text-white  bgScreen:w-[20rem]  bgScreen:text-5xl">
				<span>Digit</span>
				<span className="text-blue-600 ">
					<IoLogoXbox />
				</span>
				l
			</Link>
		</div>
	);
}
