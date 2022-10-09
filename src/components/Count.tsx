import React from "react";

interface CountProps {
	title: string;
	count: number;
	percentage: number;
}

function Count({ title, count, percentage }: CountProps) {
	return (
		<div className="w-[10em] h-[10em] shadow-md flex flex-col items-center gap-y-8 rounded-lg">
			<p className="font-semibold mt-5">{title}</p>
			<div className="flex items-center justidy-evenly gap-x-1">
				<p className="text-4xl font-bold">{count}</p>
				<div className="w-20 h-5 bg-green-400 flex justify-center">
					<p className="text-sm text-green-700">+ {percentage}%</p>
				</div>
			</div>
		</div>
	);
}

export default Count;
