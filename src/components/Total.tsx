import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/index";
import { useEffect, useState } from "react";

function Total() {
	const total = useSelector((state: RootState) => state.transaction.total);

	return (
		<div className="flex justify-between mt-10">
			<div className="flex justify-between gap-x-5 lg:w-[50%]">
				<div className="flex flex-col lg:items-center">
					<p className="text-gray-500 text-sm capitalize">Total Expense</p>
					<p className="font-bold lg:text-lg">$120.56</p>
				</div>
				<div className="flex flex-col lg:items-center">
					<p className="text-gray-500 text-sm capitalize">Total Income</p>
					<p className="font-bold lg:text-lg">$2200.56</p>
				</div>
			</div>
			<div className="flex flex-col items-end lg:w-[50%]">
				<p className="text-gray-500 text-sm capitalize text-end">Net</p>

				<p className="font-bold lg:text-xl">${total}</p>
			</div>
		</div>
	);
}

export default Total;
