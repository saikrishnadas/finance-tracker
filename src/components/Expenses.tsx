import React from "react";
import chart from "../images/chart3.svg";
import { useSelector } from "react-redux";
import { RootState } from "../store/index";
import { useEffect, useState } from "react";

interface ExpensesProps {
	title: string;
	color: string;
}

function Expenses({ title, color }: ExpensesProps) {
	const transactions = useSelector(
		(state: RootState) => state.transaction.transactions
	);
	const calculate = () => {
		let catTotal = 0;
		transactions.forEach((transaction: any) => {
			if (transaction.transactions.category === title) {
				catTotal += transaction.transactions.amount;
			}
		});
		return catTotal;
		// Object.assign({title:title,total:})
	};
	// useEffect(() => {
	// 	calculate();
	// });
	return (
		<div
			className={`flex justify-between items-center h-20 pr-2 pl-2 rounded-lg ${
				color === "red" && "bg-red-200"
			} ${color === "blue" && "bg-blue-200"} ${
				color === "green" && "bg-green-200"
			} ${color === "purple" && "bg-purple-200"} ${
				color === "yellow" && "bg-yellow-200"
			}${color === "pink" && "bg-pink-200"}`}
		>
			<div className="flex flex-col ml-5">
				<p className="font-bold text-gray-400 text-sm">{title}</p>
				<p className="font-bold ">${calculate()}</p>
			</div>
			<div>
				<p className="text-orange-600 font-semibold">{0}%</p>
			</div>
		</div>
	);
}

export default Expenses;
