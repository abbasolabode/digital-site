//import image from "../assets/entrepreneur.jpg";
import image from "../assets/teamwork.jpg";
import Intro from "../components/Intro";

export default function Main() {
	return (
		<main className="w-[26.75rem] min-h-[24rem] bgScreen:w-[90rem]">
			<Intro />

			<div className="w-[26.75rem] min-h-[20rem] text-center bg-[#EEF1EF] pt-3 bgScreen:w-[90rem] bgScreen:flex  bgScreen:items-center bgScreen:min-h-[25rem]">
				<div className="bgScreen:w-[90rem]">
					<h2 className="text-2xl font-poppins font-thin  bgScreen:mx-auto bgScreen:text-6xl bgScreen:inline-block">
						Our Mission
					</h2>
					<p className="w-[22rem] mx-auto text-sm font-rubik tracking-wider text-gray-500 bgScreen:w-[30rem] bgScreen:text-[1.2rem] bgScreen:tracking-wider bgScreen:leading-6">
						Digitol, our mission is to empower individuals like you to build a
						robust online presence and turn your unique skills into a thriving
						business. Whether you're an artist, writer, developer, or
						consultant, our platform provides the tools and support you need to
						succeed.
					</p>
				</div>
				<img
					className="w-[20rem] mx-auto mt-5 pb-[3rem] bgScreen:w-[30rem] bgScreen:inline-block bgScreen:min-h-[30rem] bgScreen:mr-5 "
					src={image}
					alt="Team"
				/>
			</div>
		</main>
	);
}
