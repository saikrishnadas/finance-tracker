import { useState } from "react";
// @ts-ignore
import { TimeIcon, SmallAddIcon } from "@chakra-ui/icons";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import AddCategoryModal from "./AddCategoryModal";

function Categories() {
	const [isOpen, setIsOpen] = useState(false);

	const openAddCategoryModal = () => {
		setIsOpen(true);
	};

	const onClose = () => {
		setIsOpen(false);
	};

	return (
		<div className="pl-5">
			<div className="pb-5 font-bold">
				<p>CATEGORIES</p>
			</div>
			<div className="flex flex-col gap-y-5 ml-5">
				<span className="flex gap-x-3 items-center">
					<p>Rent</p>
					<span className="cursor-pointer">
						<EditIcon color="blue.700" />
					</span>
				</span>
				<span className="flex gap-x-3 items-center">
					<p>Groceries</p>
					<span className="cursor-pointer">
						<EditIcon color="blue.700" />
					</span>
				</span>
				<span className="flex gap-x-3 items-center">
					<p>Entertainment</p>
					<span className="cursor-pointer">
						<EditIcon color="blue.700" />
					</span>
				</span>
				<span className="flex gap-x-3 items-center">
					<p>Food</p>
					<span className="cursor-pointer">
						<EditIcon color="blue.700" />
					</span>
				</span>

				<div
					className="flex gap-x-3 items-center cursor-pointer text-blue-800 font-semibold hover:text-blue-400"
					onClick={openAddCategoryModal}
				>
					<SmallAddIcon color="blue" />
					<p>Add Another</p>
				</div>
				<AddCategoryModal isOpen={isOpen} onClose={onClose} />
			</div>
		</div>
	);
}

export default Categories;
