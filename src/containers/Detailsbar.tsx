import Accounts from "../components/Accounts";
import Categories from "../components/Categories";
import { Select } from "@chakra-ui/react";
import flag from "../images/indian-flag.png";

function Detailsbar({ token }: any) {
	return (
		<div className="bg-gray-200 w-[18vw] pt-10 lg:flex flex-col justify-between pb-5 gap-y-10 hidden">
			{/* <Accounts /> */}
			<Categories />
			<div className="flex gap-x-2 items-center ml-2 w-[15em]">
				<div className="w-10">
					<img src={flag} alt="rupee" />
				</div>
				<Select
					isDisabled
					placeholder="INR"
					bg="tomato"
					borderColor="tomato"
					color="white"
				>
					<option value="india">India</option>
				</Select>
			</div>
		</div>
	);
}

export default Detailsbar;
