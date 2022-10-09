import React from "react";
import Expenses from "./Expenses";

function ExpenseOverview() {
	return (
		<div className="flex flex-col mt-10">
			<span className="flex gap-x-2 justify-between">
				<p className="font-semibold mb-5 text-lg">Expenses by category</p>
				<p className="text-sm cursor-pointer text-blue-700">See more</p>
			</span>
			<div className="grid gap-5 grid-cols-2">
				<Expenses />
				<Expenses />
				<Expenses />
				<Expenses />
			</div>
		</div>
	);
}

export default ExpenseOverview;
