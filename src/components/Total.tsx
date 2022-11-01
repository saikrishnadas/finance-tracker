import { useSelector } from "react-redux";
import { RootState } from "../store/index";

function Total() {
	const totalExpense = useSelector(
		(state: RootState) => state.transaction.totalExpense
	);

	const totalIncome = useSelector(
		(state: RootState) => state.transaction.totalIncome
	);

	return (
		<div className="flex justify-between mt-10">
			<div className="flex justify-between gap-x-5 lg:w-[50%]">
				<div className="flex flex-col lg:items-center">
					<p className="text-gray-500 text-sm capitalize">
						Current Month Expense
					</p>
					<p className="font-bold lg:text-lg">
						{"\u20B9"}
						{totalExpense}
					</p>
				</div>
				<div className="flex flex-col lg:items-center">
					<p className="text-gray-500 text-sm capitalize">
						Current Month Income
					</p>
					<p className="font-bold lg:text-lg">
						{"\u20B9"}
						{totalIncome}
					</p>
				</div>
			</div>
			<div className="flex flex-col items-end lg:w-[50%]">
				<p className="text-gray-500 text-sm capitalize text-end">Net</p>

				<p className="font-bold lg:text-xl">
					{"\u20B9"}
					{totalIncome - totalExpense}
				</p>
			</div>
		</div>
	);
}

export default Total;
