import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

const data = [
	{
		name: "Jan",
		expense: 4000,
		income: 2400,
	},
	{
		name: "Feb",
		expense: 2800,
		income: 1398,
	},
	{
		name: "Mar",
		expense: 2000,
		income: 9000,
	},
	{
		name: "April",
		expense: 2780,
		income: 3908,
	},
	{
		name: "May",
		expense: 1890,
		income: 4800,
	},
	{
		name: "Jun",
		expense: 2390,
		income: 3800,
	},
	{
		name: "Jul",
		expense: 3490,
		income: 4300,
	},
	{
		name: "Aug",
		expense: 2420,
		income: 3200,
	},
	{
		name: "Sep",
		expense: 7420,
		income: 4240,
	},
	{
		name: "Oct",
		expense: 1490,
		income: 6000,
	},
	{
		name: "Nov",
		expense: 8790,
		income: 2000,
	},
	{
		name: "Dec",
		expense: 1490,
		income: 6300,
	},
];

export default function TransactionChart() {
	return (
		<div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
			<strong className="text-gray-700 font-medium"></strong>
			<div className="w-full mt-3 flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						width={500}
						data={data}
						margin={{
							top: 20,
							right: 10,
							left: -10,
							bottom: 0,
						}}
					>
						<CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="income" fill="#0ea5e9" />
						<Bar dataKey="expense" fill="#0ea580" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
