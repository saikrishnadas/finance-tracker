import React from "react";
import OverviewChartExpense from "./OverviewChartExpense";
import OverviewChartIncome from "./OverviewChartIncome";

function MonthlyOverview() {
	return (
		<div className="flex flex-col mt-10">
			<p className="font-semibold mb-5 text-lg">Monthly Overview</p>
			<div className="flex gap-x-10">
				<OverviewChartExpense />
				<OverviewChartIncome />
			</div>
		</div>
	);
}

export default MonthlyOverview;
