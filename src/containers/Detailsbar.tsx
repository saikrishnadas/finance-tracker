import Accounts from "../components/Accounts";
import Categories from "../components/Categories";

function Detailsbar() {
	return (
		<div className="bg-gray-200 pt-20 pr-20 flex flex-col gap-y-10">
			<Accounts />
			<Categories />
		</div>
	);
}

export default Detailsbar;
