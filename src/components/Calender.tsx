import React from "react";
import CalenderDay from "./CalenderDay";
import { days } from "../utils/day";

function Calender() {
	return (
		<div className="flex gap-x-4 lg:gap-x-5">
			{days.map((day) => (
				<CalenderDay name={day.name} count={day.count} />
			))}
		</div>
	);
}

export default Calender;
