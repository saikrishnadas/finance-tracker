import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

// @ts-ignore
import { StarIcon, MoonIcon } from "@chakra-ui/icons";

function Sidebar() {
	return (
		<>
			<Tabs
				orientation="vertical"
				align="start"
				colorScheme="yellow"
				isLazy={true}
				className="h-[80%]"
			>
				<TabList>
					<Tab>
						<StarIcon color="white" />
					</Tab>
					<Tab>
						<MoonIcon color="white" />
					</Tab>
				</TabList>

				<TabPanels>
					<TabPanel>
						<p>Homepage!</p>
					</TabPanel>
					<TabPanel>
						<p>Dashboard!</p>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</>
	);
}

export default Sidebar;
