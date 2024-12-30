import { useState } from "react";

export default function AccordionItems({ title, content, num }) {
	const [isOpen, setIsOpen] = useState(false);

	function handleToggle() {
		setIsOpen((isOpen) => !isOpen);
	}

	return (
		<div className="w-[25.75rem] min-h-[10rem] mt-[1rem] mx-auto bg-[#457B9D] bgScreen:w-[45rem] bgScreen:ml-1 bgScreen:mr-2 ">
			<div
				className="w-[26.75rem] min-h-[10rem] mt-[1rem] p-5 overflow-hidden ease-out transition-all transition-max-height bgScreen:w-[45rem]"
				onClick={handleToggle}
			>
				<div className="grid grid-cols-[1fr_auto] items-center w-full bgScreen:flex bgScreen:justify-between bgScreen:w-[43rem]">
					<h2
						className={
							"font-poppins text-white text-sm font-semibold bgScreen:text-[1.4rem]"
						}
					>
						{title}
					</h2>
					<p className="text-3xl text-white bgScreen:text-4xl justify-self-end relative mr-3 bgScreen:flex bgScreen:justify-end ">
						{isOpen ? "-" : "+"}
					</p>
				</div>
				{isOpen && (
					<p className="w-[25rem] text-md font-rubik leading-7 tracking-wide mt-6 text-white bgScreen:w-[40rem] bgScreen:text-[1.4rem]">
						{content}
					</p>
				)}
			</div>
		</div>
	);
}
