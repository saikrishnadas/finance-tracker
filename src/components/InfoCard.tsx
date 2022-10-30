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
	WarningIcon,
	ExternalLinkIcon,
	AddIcon,
} from "@chakra-ui/icons";

interface InfoCardProps {
	title: string;
	count: any;
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
							<MenuItem icon={<WarningIcon />}>Report Issue</MenuItem>
							{/* {title === "Your bank balance" && (
								<MenuItem icon={<AddIcon />}>Update Balance</MenuItem>
							)} */}
						</MenuList>
					</Menu>
				</div>
			</div>
			<div className="ml-5 font-bold text-xl">
				<p>
					{"\u20B9"}
					{count}
				</p>
			</div>
			<div className="ml-5 w-20 text-sm">
				<p>{title}</p>
			</div>
		</div>
	);
}

export default InfoCard;
