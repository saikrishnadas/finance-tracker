import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

// @ts-ignore
import { StarIcon, MoonIcon } from "@chakra-ui/icons";

function Topbar() {
	return (
		<>
			<Tabs
				// orientation="vertical"
				variant="soft-rounded"
				colorScheme="yellow"
				align="center"
				isLazy={true}
				className="w-[80%]"
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

export default Topbar;
