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
import {
	HamburgerIcon,
	RepeatIcon,
	AddIcon,
	ExternalLinkIcon,
} from "@chakra-ui/icons";

interface InfoCardProps {
	title: string;
	count: string;
	icon: any;
}

function InfoCard({ title, count, icon }: InfoCardProps) {
	return (
		<div className="w-[10em] h-[10em] shadow-md flex flex-col items-start justify-around rounded-lg">
			<div className="flex items-center justify-between w-[100%]">
				<div className="w-10 h-10 ml-5">
					<img src={icon} alt="walleticon" />
				</div>
				<div>
					<Menu>
						<MenuButton
							as={IconButton}
							aria-label="Options"
							icon={<HamburgerIcon />}
							variant="none"
						/>
						<MenuList>
							<MenuItem icon={<AddIcon />} command="⌘T">
								New Tab
							</MenuItem>
							<MenuItem icon={<ExternalLinkIcon />} command="⌘N">
								New Window
							</MenuItem>
							<MenuItem icon={<RepeatIcon />} command="⌘⇧N">
								Open Closed Tab
							</MenuItem>
						</MenuList>
					</Menu>
				</div>
			</div>
			<div className="ml-5 font-bold text-xl">
				<p>${count}</p>
			</div>
			<div className="ml-5 w-20 text-sm">
				<p>{title}</p>
			</div>
		</div>
	);
}

export default InfoCard;
