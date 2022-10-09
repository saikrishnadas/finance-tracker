import React from "react";
import chart from "../images/chart.svg";

function OverviewChartExpense() {
	return (
		<div className="flex flex-col items-center justify-around border border-gray-400 rounded-lg w-[10em] h-[13em]">
			<p className="font-semibold mt-2">EXPENSE</p>
			<div className="w-[6em] h-[6em]">
				<img src={chart} alt="expense-mock-chart" />
			</div>
			<div className="flex flex-col items-center">
				<p className="font-bold text-xl">$120.45</p>
				<p className="font-semibold text-orange-500 text-sm">+ $71.99</p>
			</div>
		</div>
	);
}

export default OverviewChartExpense;
