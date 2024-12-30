import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonial1 from "../assets/testimonial1.webp";
import testimonial2 from "../assets/testimonial2.webp";
import testimonial3 from "../assets/testimonial3.webp";

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
		<div className="w-[26.75rem] mt-[4rem] min-h-[30rem] bg-[#8ECAE6] bgScreen:w-[90rem] bgScreen:min-h-[35rem] bgScreen:mt-[10rem] overflow-hidden ml-1">
			<div className="bgScreen:w-[90rem]">
				<h2 className="w-[26.75rem] min-h-[4rem] text-4xl text-center font-semibold font-poppins pt-[3rem] mb-[3rem] text-[#1B263B] tracking-wide bgScreen:mx-auto bgScreen:text-5xl  lScreen:text-2xl">
					Testimonials
				</h2>
			</div>
			<Slider {...settings}>
				<div className="w-[26.75rem] min-h-[20rem] flex flex-col items-center bgScreen:w-[40rem]">
					<p className="w-[20rem] min-h-[4rem] mx-auto text-center text-xl font-poppins tracking-wide bgScreen:w-[30rem]">
						"Digitol has been a game-changer for my freelance career. The tools
						are incredibly user-friendly and the support team is top-notch." -
						Jane Doe, Freelance Designer
					</p>
					<img
						src={testimonial1}
						alt="testimonial1"
						className="w-[6rem]  mx-auto mt-3"
					/>
				</div>
				<div className="w-[26.75rem] min-h-[10rem] flex flex-col items-center gap-3 mb-[3rem] bgScreen:w-[40rem]">
					<p className="w-[22rem] min-h-[4rem] mx-auto text-center text-xl font-poppins tracking-wide bgScreen:w-[37rem]">
						"Digitol has truly revolutionized the way I manage my freelance
						business. The tools are incredibly intuitive, and my client
						engagement has skyrocketed since I started using the platform." -
						Daniel Brown, Graphic Designer
					</p>
					<img
						src={testimonial2}
						alt="testimonial2"
						className="w-[6rem]  mx-auto mt-3"
					/>
				</div>
				<div className="w-[26.75rem] min-h-[10rem] flex flex-col items-center gap-3 p-10 bgScreen:w-[40rem]">
					<p className="w-[22rem] min-h-[4rem] mx-auto text-center text-xl font-poppins tracking-wide bgScreen:w-[27rem]">
						"I've been able to turn my hobby into a full-time income thanks to
						Digitol. Highly recommended!" - John Smith, Content Creator
					</p>
					<img
						src={testimonial3}
						alt="testimonial3"
						className="w-[6rem] mx-auto mt-3"
					/>
				</div>
			</Slider>
		</div>
	);
}
//<Slider {...settings}></Slider>