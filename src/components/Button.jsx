import { Link } from "react-router-dom";


export default function Button({ children, lgBtnBg }) {
	return (
		<Link
			to="/contact"
			className={`text-sm text-white w-[10rem] p-2 font-rubik tracking-wider mx-auto rounded-md shadow-2xl cursor-pointer bg-[#003049] text-center transition duration-300 ease-in-out hover:text-black hover:bg-white bgScreen:whitespace-nowrap  hover:scale-105 bgScreen:w-[25rem] bgScreen:rounded-xl bgScreen:text-4xl bgScreen:p-[1.8rem] text-text-nowrap bgScreen:bg-[#023E8A] ${lgBtnBg}`}
		>
			{children}
		</Link>
	);
}

	