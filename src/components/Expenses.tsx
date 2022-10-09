import React from "react";
import chart from "../images/chart3.svg";

function Expenses() {
	return (
		<div className="flex justify-between items-center bg-orange-100 h-20 pr-2 pl-2 rounded-lg">
			<div className="flex items-center">
				<div className="w-10 h-10 bg-white rounded-lg">
					<img src={chart} alt="recordimage" />
				</div>
				<div className="flex flex-col ml-5">
					<p className="font-bold text-gray-400 text-sm">Amazon</p>
					<p className="font-bold ">$120.42</p>
				</div>
			</div>
			<div>
				<p className="text-orange-600 font-semibold">47%</p>
			</div>
		</div>
	);
}

export default Expenses;
