import React from "react";

function Record({ color }: any) {
	return (
		<div className="flex justify-between items-center mt-5">
			<div className="flex items-center">
				<div
					className={`w-10 h-10 bg-red-500 rounded-lg ${
						color === "red" && "bg-red-500"
					} ${color === "blue" && "bg-blue-500"} ${
						color === "green" && "bg-green-500"
					} ${color === "purple" && "bg-purple-500"} ${
						color === "yellow" && "bg-yellow-500"
					} ${color === "pink" && "bg-pink-500"}`}
				/>
				<div className="flex flex-col ml-5">
					<p className="font-bold">Amazon</p>
					<p className="text-gray-400">17 Jan'20, 07:32 PM</p>
				</div>
			</div>
			<div>
				<p>$100.21</p>
			</div>
		</div>
	);
}

export default Record;
