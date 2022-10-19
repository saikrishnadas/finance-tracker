import React from "react";
import OverviewChartExpense from "./OverviewChartExpense";
import OverviewChartIncome from "./OverviewChartIncome";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/index";

function MonthlyOverview() {
	const totalExpense = useSelector(
		(state: RootState) => state.transaction.totalExpense
	);
	const previousTotalExpense = useSelector(
		(state: RootState) => state.transaction.previousTotalExpense
	);
	const Expenseincrease = totalExpense - previousTotalExpense;

	const totalIncome = useSelector(
		(state: RootState) => state.transaction.totalIncome
	);
	const previousTotalIncome = useSelector(
		(state: RootState) => state.transaction.previousTotalIncome
	);

	const incomeIncrease = totalIncome - previousTotalIncome;
	return (
		<div className="flex flex-col mt-10">
			<p className="font-semibold mb-5 text-lg">Monthly Overview</p>
			<div className="flex gap-x-10">
				<OverviewChartExpense total={totalExpense} increase={Expenseincrease} />
				<OverviewChartIncome total={totalIncome} increase={incomeIncrease} />
			</div>
		</div>
	);
}

export default MonthlyOverview;
