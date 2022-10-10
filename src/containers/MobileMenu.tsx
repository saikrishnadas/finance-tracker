import { useState } from "react";
import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuItemOption,
	MenuGroup,
	MenuOptionGroup,
	MenuDivider,
	IconButton,
} from "@chakra-ui/react";
// @ts-ignore
import { HamburgerIcon, AddIcon, StarIcon } from "@chakra-ui/icons";
import AddCategoryModal from "../components/Modals/AddCategoryModal";
import ExpenseCategoryModal from "../components/Modals/ExpenseCategoryModal";

function MobileMenu() {
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenView, setIsOpenView] = useState(false);

	const openAddCategoryModal = () => {
		setIsOpen(true);
	};

	const openViewCategoryModal = () => {
		setIsOpenView(true);
	};

	const onClose = () => {
		setIsOpen(false);
	};

	const onCloseView = () => {
		setIsOpenView(false);
	};
	return (
		<div>
			<Menu isLazy>
				<MenuButton
					colorScheme="yellow"
					as={IconButton}
					aria-label="Options"
					icon={<HamburgerIcon />}
					variant="outline"
				/>
				<MenuList>
					<MenuItem icon={<StarIcon />} onClick={openViewCategoryModal}>
						View Categories
					</MenuItem>
					<MenuItem icon={<AddIcon />} onClick={openAddCategoryModal}>
						New Category
					</MenuItem>
				</MenuList>
			</Menu>
			<AddCategoryModal isOpen={isOpen} onClose={onClose} />
			<ExpenseCategoryModal isOpen={isOpenView} onClose={onCloseView} />
		</div>
	);
}

export default MobileMenu;
