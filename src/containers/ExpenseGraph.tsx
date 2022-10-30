import { useSelector } from "react-redux";
import { RootState } from "../store/index";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from "recharts";

export default function ExpenseGraph() {
	const currentExpense = useSelector(
		(state: RootState) => state.transaction.totalExpense
	);

	const currentIncome = useSelector(
		(state: RootState) => state.transaction.totalIncome
	);

	const previousTotalExpense = useSelector(
		(state: RootState) => state.transaction.previousTotalExpense
	);

	const previousTotalIncome = useSelector(
		(state: RootState) => state.transaction.previousTotalIncome
	);
	const data = [
		{
			name: "Income",
			previousMonth: previousTotalIncome,
			currentMonth: currentIncome,
		},
		{
			name: "Expense",
			previousMonth: previousTotalExpense,
			currentMonth: currentExpense,
		},
	];
	return (
		<div className="w-[40em] flex justify-center pb-5 pt-5 shadow-lg rounded-lg lg:mt-10">
			<BarChart
				width={500}
				height={300}
				data={data}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey="previousMonth" fill="#00108a" />
				<Bar dataKey="currentMonth" fill="#029007" />
			</BarChart>
		</div>
	);
}
