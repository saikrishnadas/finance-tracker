import React from "react";

function Total() {
	return (
		<div className="flex justify-between mt-10">
			<div className="flex justify-between w-[50%]">
				<div className="flex flex-col items-center">
					<p className="text-gray-500 text-sm capitalize">Total Expense</p>
					<p className="font-bold text-lg">$120.56</p>
				</div>
				<div className="flex flex-col items-center">
					<p className="text-gray-500 text-sm capitalize">Total Income</p>
					<p className="font-bold text-lg">$2200.56</p>
				</div>
			</div>
			<div className="flex flex-col items-end w-[50%]">
				<p className="text-gray-500 text-sm capitalize text-end">Net</p>
				<p className="font-bold text-xl">$2000.56</p>
			</div>
		</div>
	);
}

export default Total;
