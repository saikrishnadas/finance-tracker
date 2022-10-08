import Accounts from "../components/Accounts";
import Categories from "../components/Categories";

function Detailsbar() {
	return (
		<div className="bg-gray-200 w-[18vw] pt-20 lg:flex flex-col gap-y-10 hidden">
			<Accounts />
			<Categories />
		</div>
	);
}

export default Detailsbar;
