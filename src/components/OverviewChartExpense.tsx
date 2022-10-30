import React from "react";
import chart from "../images/chart.svg";

function OverviewChartExpense({ total, increase }: any) {
	return (
		<div className="flex flex-col items-center justify-around border border-gray-400 rounded-lg w-[10em] h-[13em]">
			<p className="font-semibold mt-2">EXPENSE</p>
			<div className="w-[6em] h-[6em]">
				<img src={chart} alt="expense-mock-chart" />
			</div>
			<div className="flex flex-col items-center">
				<p className="font-bold text-xl">
					{"\u20B9"}
					{total}
				</p>
				{increase < 0 ? (
					<p className="font-semibold text-orange-500 text-sm">
						- {"\u20B9"}
						{increase}
					</p>
				) : (
					<p className="font-semibold text-orange-500 text-sm">
						+ {"\u20B9"}
						{increase}
					</p>
				)}
			</div>
		</div>
	);
}

export default OverviewChartExpense;
