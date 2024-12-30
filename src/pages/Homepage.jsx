import Header from "./Header";
import Hero from "../components/Hero";
import Main from "../components/Main";
import CoreFeatures from "../components/CoreFeatures";
import GetStarted from "../components/GetStarted";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Footer from "./Footer";
//import PageNav from "./PageNav";

export default function Homepage() {
	return (
		<div className="w-full">
			<Header />
			<Hero />
			<Main />
			<CoreFeatures />
			<GetStarted />
			<Testimonials />
			<Faq />
			<Footer />
		</div>
	);
}
