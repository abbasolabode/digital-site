import deskMobile from "../assets/mobile-meeting.jpg";
import marketingTools from "../assets/marketing.jpg"
import cloudComputing from "../assets/cloud-computing.jpg";
import money from "../assets/dollar-rate.jpg";
import deskDesktop from "../assets/desktop-meeting.jpg";
import analytics from "../assets/technology-analytics2.jpg"
import NavBar from "./Navbar";
import Button from "./Button";
import FooterInfo from "./FooterInfo";


export default function Feature() {
	return (
		<div className=" w-[26.75rem] overflow-x-hidden bgScreen:w-[90rem]">
			<div className="w-[26.75rem] bgScreen:w-full">
				<NavBar />
				<div className="relative w-[26.75rem] mt-[4.1rem] bgScreen:w-[90rem]">
					<div className="bgScreen:w-full">
						<img src={deskMobile} className="bgScreen:hidden" alt="meeting" />
						<img
							src={deskDesktop}
							className="hidden bgScreen:w-[90rem] bgScreen:block "
							alt="meeting"
						/>
					</div>

					<div className="absolute top-[5rem] w-[26.75rem]  right-[2.6rem] text-center bgScreen:w-[90rem] bgScreen:top-[17rem] bgScreen:right-[-2rem] bgScreen:min-h-[8rem]">
						<h1 className="text-[1.6rem] font-poppins w-full ml-[3.5rem] text-white font-bold tracking-wide bgScreen:w-full  bgScreen:min-h-[4rem] bgScreen:text-6xl lScreen:text-2xl">
							Welcome to Our Feature Page
						</h1>

						<div className="w-[26.75rem] ml-[3rem] mt-[3rem] text-center bgScreen:ml-[7rem] bgScreen:w-[75rem]  bgScreen:mt-[4rem]">
							<Button lgBtnBg="bgScreen:w-[50rem] bgScreen:bg-black">
								Get Started
							</Button>
						</div>
					</div>
				</div>
			</div>

			<div className="w-[26.75rem] min-h-[13rem] mt-8 bgScreen:w-[90rem] bgScreen:text-center bgScreen:mx-auto bgScreen:min-h-[20rem] bgScreen:mt-[4rem]">
				<h2 className="w-[26.75rem] min-h-[3rem] text-center text-[1.5rem] font-semibold font-poppins tracking-wide bgScreen:text-center bgScreen:w-[90rem] bgScreen:min-h-[4rem] bgScreen:text-4xl bgScreen:mt-4  lScreen:text-xl">
					Discover What Makes Us Unique
				</h2>
				<p className="w-[22.9rem] text-center text-[0.9rem] mx-auto font-rubik tracking-wider text-gray-500  bgScreen:w-[36.7rem]  bgScreen:min-h-[4rem] bgScreen:text-[1.4rem] ">
					Discover the powerful features that make our platform unique and help
					you build a robust online presence. Our tools are designed to empower
					you, whether you're an artist, writer, developer, or consultant.
				</p>
			</div>

			<div className="w-full min-h-[10rem] text-center bgScreen:min-h-[5rem] bgScreen:w-[90rem]">
				<h2 className="text-[1.2rem] font-rubik tracking-wider border inline-block p-3 font-extralight border-gray-500 shadow-xl bgScreen:min-h-full bgScreen:w-[20rem] bgScreen:text-[1.9rem]">
					Feature Highlights
				</h2>

				<div className="mt-8 w-auto min-h-[28rem] border mr-3 ml-3 pt-3 shadow-sm bg-[#EFEAE8] rounded bgScreen:min-h-[35rem] bgScreen:w-[90rem] bgScreen:mt-[4rem] bgScreen:flex bgScreen:items-center bgScreen:p-6">
					<div className=" bgScreen:w-1/2">
						<h3 className="text-[1.2rem] font-poppins tracking-wider text-[#013A63] bgScreen:text-5xl bgScreen:whitespace-nowrap">
							Personal Branding Tools
						</h3>
						<p className="w-[24.3rem] tracking-wide leading-5 text-center mx-auto text-[0.8rem] text-[#272640] bgScreen:w-[38.5rem] bgScreen:leading-7 bgScreen:mt-4 bgScreen:text-[1.3rem]">
							Enhance your online identity with our comprehensive branding
							tools. From customizable profiles to professional email addresses,
							we provide everything you need to create a cohesive and
							professional online presence that reflects your unique identity.
						</p>
					</div>

					<img
						src={marketingTools}
						alt="marketing Tools"
						className="w-[17rem] mt-5 mx-auto bgScreen:w-1/2"
					/>
				</div>

				<div className="mt-8 w-auto min-h-[28rem] border mr-3 ml-3 pt-3 shadow-sm bg-[#D4DCE3] rounded bgScreen:min-h-[35rem] bgScreen:w-[90rem] bgScreen:mt-[4rem] bgScreen:flex bgScreen:items-center bgScreen:p-6 ">
					<div className="bgScreen:w-1/2">
						<h3 className="text-[1.2rem] font-poppins tracking-wider text-[#013A63] bgScreen:text-5xl bgScreen:whitespace-nowrap">
							Cloud Storage Solutions
						</h3>
						<p className="w-[24.3rem] tracking-wide leading-5 text-center mx-auto text-[0.8rem] text-[#272640] bgScreen:w-[38.5rem] bgScreen:leading-7 bgScreen:mt-4 bgScreen:text-[1.3rem]">
							Secure and reliable cloud storage solutions to keep your data safe
							and easily accessible. Store your documents, images, and other
							media files in the cloud and access them from anywhere, at any
							time.
						</p>
					</div>

					<img
						src={cloudComputing}
						alt="cloud Computing"
						className="w-[17rem] min-h-[17rem] mt-5 mx-auto bgScreen:w-1/2"
					/>
				</div>

				<div className="mt-8 w-auto min-h-[28rem] border mr-3 ml-3 pt-3 shadow-sm bg-[#FEFAFE0] rounded  bgScreen:min-h-[35rem] bgScreen:w-[90rem] bgScreen:mt-[4rem] bgScreen:flex bgScreen:items-center bgScreen:p-6 ">
					<div className="bgScreen:w-1/2">
						<h3 className="text-[1.2rem] font-poppins tracking-wider text-[#013A63] bgScreen:text-5xl bgScreen:whitespace-nowrap">
							Monetization Tools
						</h3>
						<p className="w-[24.3rem] tracking-wide leading-5 text-center mx-auto text-[0.8rem] text-[#272640] bgScreen:w-[38.5rem] bgScreen:leading-7 bgScreen:mt-4 bgScreen:text-[1.3rem]">
							Our platform offers a range of tools and resources to help you
							monetize your skills and grow your online business. Whether you're
							looking to sell products, offer services, or create content, we
							have the tools to help you succeed.
						</p>
					</div>

					<img
						src={money}
						alt="cloud Computing"
						className="w-[17rem] min-h-[17rem] mt-5 mx-auto bgScreen:w-1/2"
					/>
				</div>

				<div className="mt-8 w-auto min-h-[28rem] border mr-3 ml-3 pt-3 shadow-sm bg-[#8ECAE6] rounded bgScreen:min-h-[35rem] bgScreen:w-[90rem] bgScreen:mt-[4rem] bgScreen:flex bgScreen:items-center bgScreen:p-6">
					<div className="">
						<h3 className="text-[1.2rem] font-poppins tracking-wider text-[#013A63] bgScreen:text-5xl bgScreen:whitespace-nowrap">
							Advanced Analytics
						</h3>
						<p className="w-[24.3rem] tracking-wide leading-5 text-center mx-auto text-[0.8rem] text-[#272640] bgScreen:w-[38.5rem] bgScreen:leading-7 bgScreen:mt-4 bgScreen:text-[1.3rem]">
							Our advanced analytics tools provide insights into your audience,
							engagement, and performance. Use this data to make informed
							decisions and improve your online presence and earnings.
						</p>
					</div>

					<img
						src={analytics}
						alt="Monetization Tool"
						className="w-[17rem] min-h-[17rem] mt-5 mx-auto bgScreen:w-1/2"
					/>
				</div>
			</div>
			<div className="w-[26.75rem] mt-[3rem] text-center bgScreen:mx-auto bgScreen:mt-[10rem]">
				<Button>Get Started</Button>
			</div>

			<FooterInfo lgFooterBg="bgScreen:bg-black" />
		</div>
	);
}
