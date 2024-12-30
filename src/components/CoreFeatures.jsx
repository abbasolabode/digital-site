import image from "../assets/marketing.jpg";
import cloud from "../assets/cloud-storage.jpg";
import finance from "../assets/finance.jpg";
import analytics from "../assets/Analytics1.jpg";

export default function CoreFeatures() {
	return (
		<div className="w-[26.75rem] min-h-[24rem] mt-[4rem] overflow-x-hidden bgScreen:w-[90rem]  bgScreen:min-h-[24rem] bgScreen:mt-[10rem]">
			<h2 className="w-[17rem] p-3 mx-auto text-center text-2xl font-poppins border tracking-wider bg-black text-white">
				Core Features
			</h2>

			<div className="bgScreen:w-[90rem] bgScreen:grid bgScreen:grid-cols-4">
				<div className="w-[21.75rem] min-h-[20rem] mx-auto text-center bg-[#EEF1EF] pt-3 mt-[3rem] shadow-md rounded bgScreen:w-[20.3rem] bgScreen:min-h-[27rem] bgScreen:flex bgScreen:flex-col bgScreen:justify-center  bgScreen:ml-6 ">
					<h3 className="text-xl tracking-wider font-poppins bgScreen:text-2xl bgScreen:mt-[3.4rem] bgScreen:">
						Personal Branding
					</h3>
					<p className="w-[20rem] text-center mx-auto text-sm font-rubik text-gray-500 bgScreen:text-[0.9rem]">
						Create a compelling personal brand with our easy-to-use tools.
						Showcase your skills, portfolio, and unique value proposition to the
						world.
					</p>
					<img
						src={image}
						className="w-[15rem] pb-[2.5rem] mx-auto mt-5"
						alt="Branding"
					/>
				</div>

				<div className="w-[21.75rem] min-h-[20rem] mx-auto text-center bg-[#EEF1EF] pt-3 mt-[3rem] shadow-md rounded bgScreen:w-[20.3rem] bgScreen:min-h-[27rem] bgScreen:flex bgScreen:flex-col bgScreen:justify-center">
					<h3 className="text-xl tracking-wider font-poppins bgScreen:text-2xl">
						Cloud Storage
					</h3>
					<p className="w-[20rem] text-center mx-auto text-sm font-rubik text-gray-500 bgScreen:text-[0.9rem]">
						Securely store and access your work from anywhere. Our reliable
						cloud storage solutions keep your projects organized and accessible
						at all times.
					</p>
					<img
						src={cloud}
						className="w-[15rem] pb-[1rem] mx-auto mt-5 bgScreen:min-w-[12rem] bgScreen:min-h-[12rem]"
						alt="Cloud storage"
					/>
				</div>

				<div className="w-[21.75rem] mx-auto min-h-[20rem] text-center bg-[#EEF1EF] pt-3 mt-[3rem] shadow-md rounded bgScreen:w-[20.3rem] bgScreen:min-h-[27rem] bgScreen:flex bgScreen:flex-col bgScreen:justify-center">
					<h3 className="text-xl tracking-wider font-poppins bgScreen:text-2xl">
						Monetization Tools
					</h3>
					<p className="w-[18rem] mx-auto text-center text-sm font-rubik text-gray-500 bgScreen:text-[0.9rem]">
						Utilize our comprehensive set of tools to turn your skills into
						income. From subscription models to one-time payments, we've got you
						covered.
					</p>
					<img
						src={finance}
						className="w-[15rem] pb-[1rem] mx-auto mt-5 bgScreen:min-w-[12rem] bgScreen:min-h-[12rem]"
						alt="Cloud storage"
					/>
				</div>

				<div className="w-[21.75rem] min-h-[20rem] mx-auto text-center bg-[#EEF1EF] pt-3 mt-[3rem] shadow-md rounded bgScreen:w-[20.3rem] bgScreen:min-h-[27rem] bgScreen:flex bgScreen:flex-col bgScreen:justify-center ">
					<h3 className="text-xl tracking-wider font-poppins bgScreen:text-2xl bgScreen:mt-[-1rem]">
						Analytics
					</h3>
					<p className="w-[20rem] text-center mx-auto text-sm font-rubik text-gray-500 bgScreen:text-[0.9rem]">
						Gain insights into your audience and performance. Track engagement,
						revenue, and growth to make data-driven decisions.
					</p>
					<img
						src={analytics}
						className="w-[15rem]  mx-auto mt-5 bgScreen:min-w-[12rem] bgScreen:min-h-[12rem]"
						alt="Cloud storage"
					/>
				</div>
			</div>
		</div>
	);
}
