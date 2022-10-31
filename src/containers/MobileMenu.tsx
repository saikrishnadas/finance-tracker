import { useState } from "react";
import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	IconButton,
} from "@chakra-ui/react";
// @ts-ignore
import { HamburgerIcon, AddIcon, StarIcon, LockIcon } from "@chakra-ui/icons";
import AddCategoryModal from "../components/Modals/AddCategoryModal";
import ExpenseCategoryModal from "../components/Modals/ExpenseCategoryModal";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authenticate, logout } from "../features/auth/authSlice";

function MobileMenu() {
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenView, setIsOpenView] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

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

	function delete_cookie(name: string) {
		document.cookie =
			name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
	}

	const handleLogout = () => {
		dispatch(logout());
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
					<MenuItem icon={<LockIcon />} onClick={handleLogout}>
						Logout
					</MenuItem>
				</MenuList>
			</Menu>
			<AddCategoryModal isOpen={isOpen} onClose={onClose} />
			<ExpenseCategoryModal isOpen={isOpenView} onClose={onCloseView} />
		</div>
	);
}

export default MobileMenu;
