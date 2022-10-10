import React from "react";
import chart from "../images/chart3.svg";

interface ExpensesProps {
	title: string;
	count: number;
	percentage: number;
	color: string;
}

function Expenses({ title, count, percentage, color }: ExpensesProps) {
	return (
		<div
			className={`flex justify-between items-center h-20 pr-2 pl-2 rounded-lg ${
				color === "red" && "bg-red-200"
			} ${color === "blue" && "bg-blue-200"} ${
				color === "green" && "bg-green-200"
			} ${color === "purple" && "bg-purple-200"} ${
				color === "yellow" && "bg-yellow-200"
			}`}
		>
			<div className="flex flex-col ml-5">
				<p className="font-bold text-gray-400 text-sm">{title}</p>
				<p className="font-bold ">${count}</p>
			</div>
			<div>
				<p className="text-orange-600 font-semibold">{percentage}%</p>
			</div>
		</div>
	);
}

export default Expenses;
