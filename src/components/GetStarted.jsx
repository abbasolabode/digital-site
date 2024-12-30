import Button from "./Button";


export default function GetStarted() {
  return (
		<div className="w-[26.75rem] min-h-[15rem] flex flex-col mt-[6rem] bgScreen:w-[90rem] bgScreen:min-h-[15rem]">
			<h2 className="text-center text-2xl font-poppins bgScreen:text-5xl">
				Get Started <span className="text-[#0353A4]">Today</span>
			</h2>
			<p className="w-[20.5rem] mx-auto text-base text-center font-poppins text-gray-400 mb-4 bgScreen:w-[32rem] bgScreen:mt-6 bgScreen:text-[1.3rem]">
				Join thousands of creators who have already transformed their skills
				into successful online ventures. Click the button below to get started.
			</p>

			<Button>Get Started</Button>
		</div>
	);
}
