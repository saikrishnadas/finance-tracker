// @ts-ignore
import { TimeIcon, SmallAddIcon } from "@chakra-ui/icons";
function Categories() {
	return (
		<div className="pl-5">
			<div className="pb-5 font-bold">
				<p>CATEGORIES</p>
			</div>
			<div className="flex flex-col gap-y-5 ml-10">
				<div className="flex gap-x-3 items-center">
					<TimeIcon color="black" />
					<p>Automobiles</p>
				</div>
				<div className="flex gap-x-3 items-center">
					<TimeIcon color="black" />
					<p>Food</p>
				</div>
				<div className="flex gap-x-3 items-center">
					<TimeIcon color="black" />
					<p>Groceries</p>
				</div>
				<div className="flex gap-x-3 items-center">
					<TimeIcon color="black" />
					<p>Household</p>
				</div>
				<div className="flex gap-x-3 items-center cursor-pointer text-blue-800 font-semibold hover:text-blue-400">
					<SmallAddIcon color="blue" />
					<p>Add Another</p>
				</div>
			</div>
		</div>
	);
}

export default Categories;
