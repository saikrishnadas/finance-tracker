import React from "react";
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
import { HamburgerIcon, AddIcon } from "@chakra-ui/icons";

function MobileMenu() {
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
					<MenuItem icon={<AddIcon />} command="⌘T">
						New Tab
					</MenuItem>
				</MenuList>
			</Menu>
		</div>
	);
}

export default MobileMenu;
