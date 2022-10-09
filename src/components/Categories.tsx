// @ts-ignore
import { TimeIcon, SmallAddIcon } from "@chakra-ui/icons";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

function Categories() {
	return (
		<div className="pl-5">
			<div className="pb-5 font-bold">
				<p>CATEGORIES</p>
			</div>
			<div className="flex flex-col gap-y-5 ml-10 justify-start">
				<Tabs variant="unstyled" orientation="vertical" align="start">
					<TabList>
						<Tab _selected={{ color: "white", bg: "blue.500" }}>
							<span className="flex gap-x-3 items-center">
								<CheckCircleIcon color="black" />
								<p>Automobile</p>
							</span>
						</Tab>
						<Tab _selected={{ color: "white", bg: "blue.500" }}>
							<span className="flex gap-x-3 items-center">
								<CheckCircleIcon color="black" />
								<p>Food</p>
							</span>
						</Tab>
						<Tab _selected={{ color: "white", bg: "blue.500" }}>
							<span className="flex gap-x-3 items-center">
								<CheckCircleIcon color="black" />
								<p>Travel</p>
							</span>
						</Tab>
						<Tab _selected={{ color: "white", bg: "blue.500" }}>
							<span className="flex gap-x-3 items-center">
								<CheckCircleIcon color="black" />
								<p>House Rent</p>
							</span>
						</Tab>
					</TabList>
				</Tabs>
				<div className="flex gap-x-3 items-center cursor-pointer text-blue-800 font-semibold hover:text-blue-400">
					<SmallAddIcon color="blue" />
					<p>Add Another</p>
				</div>
			</div>
		</div>
	);
}

export default Categories;
