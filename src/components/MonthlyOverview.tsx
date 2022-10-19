import React from "react";
import OverviewChartExpense from "./OverviewChartExpense";
import OverviewChartIncome from "./OverviewChartIncome";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/index";
import { getPreviousTotal } from "../features/transactionSlice";
import { useEffect } from "react";
import dayjs from "dayjs";

function MonthlyOverview() {
	const total = useSelector((state: RootState) => state.transaction.total);
	const previousTotal = useSelector(
		(state: RootState) => state.transaction.previousTotal
	);
	const increase = total - previousTotal;
	return (
		<div className="flex flex-col mt-10">
			<p className="font-semibold mb-5 text-lg">Monthly Overview</p>
			<div className="flex gap-x-10">
				<OverviewChartExpense total={total} increase={increase} />
				<OverviewChartIncome />
			</div>
		</div>
	);
}

export default MonthlyOverview;
