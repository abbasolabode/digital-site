import BuyerProfileChart from "../components/BuyerProfileChart";
import DashboardStatGrid from "../components/DashboardStatGrid";
import TransactionChart from "../components/TransactionChart";

export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4">
			<DashboardStatGrid />
			<div className="flex flex-row gap-4 w-full">
				<TransactionChart />
				{/* <BuyerProfileChart /> */}
			</div>
		</div>
	);
}



{/* <div className="flex flex-row gap-4 w-full">
	<TransactionChart />
	<BuyerProfileChart />
</div>; */}