import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";



export default function FooterInfo({ lgFooterBg }) {

	return (
		<div
			className={`w-[26.75rem] min-h-[30rem] mt-[4rem] bg-[#003049] bgScreen:w-[90rem] ${lgFooterBg}`}
		>
			<div className="bgScreen:flex bgScreen:justify-around bgScreen:items-center bgScreen:w-[90rem]">
				<div className="w-[26-75rem] min-h-[5rem] flex flex-col pt-10 ml-3">
					<h3 className="font-poppins text-xl font-semibold text-white bgScreen:text-[1.6rem]">
						Company Info
					</h3>
					<Link
						to="/about"
						className="font-poppins text-[1.2rem] font-light text-white bgScreen:mt-4 hover:underline hover:underline-offset-8"
					>
						About us
					</Link>
					<Link
						to="/team"
						className="font-poppins text-[1.2rem] font-light text-white bgScreen:mt-4 hover:underline hover:underline-offset-8"
					>
						Team
					</Link>
				</div>

				<div className="w-[26-75rem] min-h-[5rem] flex flex-col mt-5 ml-3">
					<h3 className="font-poppins text-xl font-semibold text-white bgScreen:text-[1.6rem]">
						Legal
					</h3>
					<Link
						to="/policies"
						className="font-poppins text-[1.2rem] font-light text-white bgScreen:mt-4 hover:underline hover:underline-offset-8"
					>
						Policies
					</Link>
					<Link
						to="/terms"
						className="font-poppins text-[1.2rem] font-light text-white bgScreen:mt-4 hover:underline hover:underline-offset-8"
					>
						Terms & Conditions
					</Link>
				</div>

				<div className="w-[26-75rem] min-h-[5rem] flex flex-col mt-5 ml-3  bgScreen:mt-12">
					<h3 className="font-poppins text-xl font-semibold text-white bgScreen:text-[1.6rem]">
						Resources
					</h3>
					<Link
						to="/"
						className="font-poppins text-[1.2rem] font-light text-white bgScreen:mt-4 hover:underline hover:underline-offset-8"
					>
						Policies
					</Link>
					<Link
						to="/demo"
						className="font-poppins text-[1.2rem] font-light text-white bgScreen:mt-4 hover:underline hover:underline-offset-8"
					>
						Watch a Demo
					</Link>
					<Link
						to="/customers"
						className="font-poppins text-[1.2rem] font-light text-white bgScreen:mt-4 hover:underline hover:underline-offset-8"
					>
						Customers
					</Link>
				</div>

				<div className="w-[26-75rem] min-h-[5rem] flex flex-col mt-5 mb-[3rem] ml-3 bgScreen:mt-[5rem]">
					<h3 className="font-poppins text-xl font-semibold text-white bgScreen:text-[1.6rem]">
						Get In Touch
					</h3>
					<span className="w-[15rem] flex items-center gap-2 mt-3">
						<FaPhone className="text-white text-[1.2rem]" />
						<h4 className="font-poppins text-[1.2rem] font-light text-white hover:underline hover:underline-offset-8">
							(234)xxxx-xxx-xxx
						</h4>
					</span>
					<span className="w-[15rem] flex items-center gap-2 mt-2">
						<IoLocation className="text-white text-[1.2rem]" />
						<h4 className="font-poppins text-[1.2rem] font-light text-white bgScreen:mt-4 hover:underline hover:underline-offset-8">
							Lagos, Nigeria
						</h4>
					</span>

					<span className="w-[15rem] flex items-center gap-2  mt-2  ">
						<IoMail className="text-white text-[1.2rem]" />
						<h4 className="font-poppins text-[1.2rem] font-light text-white hover:underline hover:underline-offset-8">
							hello@digitol.com
						</h4>
					</span>
				</div>
			</div>

			<div className="w-[26.75rem] min-h-[3rem] bgScreen:min-h-[17rem] bgScreen:w-[90rem] bgScreen:items-center bgScreen:justify-between bgScreen:flex">
				<div className="w-[26.75rem] min-h-[4rem]">
					<div className="w-[26.75rem] min-h-[4rem]">
						<span className="flex justify-center gap-4">
							<Link
								to=""
								className="text-[1.5rem] bgScreen:text-[2rem] text-blue-600"
							>
								<FaFacebook />
							</Link>
							<Link
								href=""
								className="text-[1.5rem] bgScreen:text-[2rem] text-red-600"
							>
								<FaInstagram />
							</Link>

							<Link
								href=""
								className="text-[1.5rem] text-blue-500 bgScreen:text-[2rem]"
							>
								<FaTwitter />
							</Link>
						</span>
					</div>
				</div>
				<p className="w-[20rem] mx-auto text-center font-rubik text-white tracking-wider font-light bgScreen:text-[1.3rem] bgScreen:ml-[30rem] bgScreen:w-[40rem]">
					All Rights Reserved 2025
				</p>
			</div>
		</div>
	);
}


