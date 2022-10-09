import React from "react";
import ExpenseOverview from "../components/ExpenseOverview";
import MonthlyOverview from "../components/MonthlyOverview";

function BudgetContainer() {
	return (
		<div>
			<div className="bg-blue-700 text-white font-bold text-2xl h-20 flex items-center justify-center rounded-lg">
				<p>Set up Monthly Budget</p>
			</div>
			<MonthlyOverview />
			<ExpenseOverview />
		</div>
	);
}

export default BudgetContainer;
