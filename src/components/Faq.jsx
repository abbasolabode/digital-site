import AccordionItems from "./AccordionItems";

const faqs = [
	{
		title: "What is Digitol?",
		content: `Digitol is a digital platform designed to help individuals establish
    an online presence and monetize their skills. Whether you're an
    artist, writer, developer, or consultant, we provide the tools and
    support you need to succeed.`,
	},
	{
		title: "How do I get started on Digitol?",
		content: `Getting started is simple! Just click the "Get Started" button on our
    homepage and follow the steps to create your account. Once you've
    signed up, you can start building your profile and showcasing your
    skills.`,
	},
	{
		title: "What features does Digitol offer?",
		content: `We offer a range of features to help you build and monetize your
    online presence, including: - Personal Branding tools - Cloud
    Storage solutions - Monetization Tools - Advanced Analytics`,
	},
	{
		title: "Is Digitol free to use?",
		content: `Digitol offers both free and premium plans. Our free plan includes basic
    features, while our premium plans offer additional tools and resources
    to help you grow your online business. You can choose the plan that
    best suits your needs.`,
	},
	{
		title: "How can I monetize my skills on Digitol?",
		content: `Digitol offers both free and premium plans. Our free plan includes
    basic features, while our premium plans offer additional tools and
    resources to help you grow your online business. You can choose the
    plan that best suits your needs.`,
	},
	{
		title: "How secure is my data on Digitol?",
		content: `We take data security seriously. All your data is securely stored and encrypted. We also provide tools for
    you to manage and control access to your information.`,
	},
	{
		title: "Can I track my performance and earnings on Digitol?",
		content: `Yes! Our advanced analytics tools allow you to track your engagement,
    revenue, and growth. This helps you make data-driven decisions to
    improve your online presence and earnings.`,
	},
	{
		title: "How can I contact support if I need help?",
		content: `If you need any assistance, our support team is here to help. You can reach us via email at support@skillmonetize.com or by phone at +123-456-7890.`,
	},
];

export default function Faq() {
	return (
		<div className="w-[26.75rem] min-h-[25rem] mt-[7rem] bgScreen:w-[90rem] bgScreen:min-h-[35rem] bgScreen:grid bgScreen:grid-cols-2 gap-4 ">
			<h2 className="w-[26rem] text-center font-poppins text-2xl text-[#1D3557] bgScreen:w-[37rem] bgScreen:text-center bgScreen:text-4xl bgScreen:mx-auto col-span-2">
				Frequently <span className="underline underline-offset-4">Asked</span>
				Questions
			</h2>
			{faqs.map((faq, i) => {
				return (
					<AccordionItems
						title={faq.title}
						content={faq.content}
						num={i}
						key={faq.title}
					/>
				);
			})}
		</div>
	);
}
