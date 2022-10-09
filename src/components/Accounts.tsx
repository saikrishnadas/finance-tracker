// @ts-ignore
import { CheckCircleIcon, SmallAddIcon } from "@chakra-ui/icons";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

function Accounts() {
	return (
		<div className="pl-5">
			<div className="pb-5 font-bold">
				<p>ACCOUNTS</p>
			</div>
			<div className="flex flex-col gap-y-5 ml-10">
				<Tabs variant="unstyled" orientation="vertical">
					<TabList>
						<Tab _selected={{ color: "white", bg: "blue.500" }}>
							<div className="flex gap-x-3 items-center">
								<CheckCircleIcon color="black" />
								<p>Hdfc bank</p>
							</div>
						</Tab>
						<Tab _selected={{ color: "white", bg: "blue.500" }}>
							<div className="flex gap-x-3 items-center">
								<CheckCircleIcon color="black" />
								<p>Icici bank</p>
							</div>
						</Tab>
						<Tab _selected={{ color: "white", bg: "blue.500" }}>
							<div className="flex gap-x-3 items-center">
								<CheckCircleIcon color="black" />
								<p>Kotak bank</p>
							</div>
						</Tab>
						<Tab _selected={{ color: "white", bg: "blue.500" }}>
							<div className="flex gap-x-3 items-center">
								<CheckCircleIcon color="black" />
								<p>Sbi bank</p>
							</div>
						</Tab>
					</TabList>
				</Tabs>
				{/* <div className="flex gap-x-3 items-center">
					<CheckCircleIcon color="black" />
					<p>Hdfc bank</p>
				</div>
				<div className="flex gap-x-3 items-center">
					<CheckCircleIcon color="black" />
					<p>Icici bank</p>
				</div>
				<div className="flex gap-x-3 items-center">
					<CheckCircleIcon color="black" />
					<p>Kotak bank</p>
				</div>
				<div className="flex gap-x-3 items-center">
					<CheckCircleIcon color="black" />
					<p>Sbi bank</p>
				</div> */}
				<div className="flex gap-x-3 items-center cursor-pointer text-blue-800 font-semibold hover:text-blue-400">
					<SmallAddIcon color="blue" />
					<p>Add Another</p>
				</div>
			</div>
		</div>
	);
}

export default Accounts;
