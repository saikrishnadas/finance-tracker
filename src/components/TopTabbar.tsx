import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

// @ts-ignore
import { StarIcon, MoonIcon } from "@chakra-ui/icons";

function TopTabbar() {
	const navigate = useNavigate();
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
					<div onClick={() => navigate("/")}>
						<Tab>
							<StarIcon color="white" />
						</Tab>
					</div>
					<div onClick={() => navigate("/dashboard")}>
						<Tab>
							<MoonIcon color="white" />
						</Tab>
					</div>
				</TabList>
			</Tabs>
		</>
	);
}

export default TopTabbar;
