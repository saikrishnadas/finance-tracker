import React from "react";

interface CalenderProps {
	name: string;
	count: string;
}

function CalenderDay({ name, count }: CalenderProps) {
	return (
		<div className="flex flex-col items-center">
			<p className="text-sm text-gray-300">{name}</p>
			<div className="flex justify-center items-center border border-gray-300 rounded-lg w-10 h-10">
				<p>{count}</p>
			</div>
		</div>
	);
}

export default CalenderDay;
