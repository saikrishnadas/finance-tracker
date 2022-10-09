import React from "react";

function Record() {
	return (
		<div className="flex justify-between items-center mt-5">
			<div className="flex items-center">
				<div className="w-10 h-10 bg-white rounded-lg">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZZhDcHonzmCWU2BXQUbcXn6l_ZfURMW3n3CxL04uIkw&s"
						alt="record-image"
					/>
				</div>
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
