import pexel from "../assets/pexels-fauxels.jpg";
import pexelLg from "../assets/pexels-fauxels-lgscreen.jpg";
import Button from "./Button";



export default function Hero() {

	return (
		<div className="w-[26.75rem] min-h-[20rem] relative bgScreen:w-[90rem] overflow-x-hidden">
			<img
				className="object-contain bgScreen:hidden "
				src={pexel}
				alt="building"
			/>
			<img
				className="object-contain hidden bgScreen:block"
				src={pexelLg}
				alt="building laptop"
			/>

			<section className="w-full min-h-full flex justify-center flex-col absolute top-0 bgScreen:w-[90rem] bgScreen:min-h-[90rem]">
				<h1 className="w-[25rem] text-4xl text-center font-poppins font-semibold text-white bgScreen:mx-auto bgScreen:w-[90rem] bgScreen:min-h-[8rem] bgScreen:text-[4.5rem]  lScreen:text-[1.6rem]">
					Build Your
					<span className="text-primaryColor bgScreen">Brand</span>. Monetize
					Your <span className="">Skills</span>
				</h1>
				<p className="w-[26rem] text-sm text-white text-center mb-[4rem]  bgScreen:text-gray-500 bgScreen:mx-auto bgScreen:w-[90rem] bgScreen:text-[2.2rem] bgScreen:mt-[-2rem]">
					Join our platform to establish your online presence and unlock your
					earning potential.
				</p>
				<Button>
					<p>Get Started</p>
				</Button>
			</section>
		</div>
	);
}


