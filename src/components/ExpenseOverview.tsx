import React from "react";
import Expenses from "./Expenses";

function ExpenseOverview() {
	return (
		<div className="flex flex-col mt-10">
			<p className="font-semibold mb-5 text-lg">Expenses by category</p>
			<div className="flex flex-col gap-y-5">
				<Expenses />
				<Expenses />
			</div>
		</div>
	);
}

export default ExpenseOverview;
