import { useState } from "react";
import Calender from "../components/Calender";
import { CalendarIcon, WarningIcon, Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import AddTransactionModal from "../components/Modals/AddTransactionModal";

function DateTransaction() {
	const [isOpen, setIsOpen] = useState(false);
	const openAddTransactionModal = () => {
		setIsOpen(true);
	};

	const onClose = () => {
		setIsOpen(false);
	};
	return (
		<div className="flex flex-col gap-y-5">
			<div className="flex justify-between items-center">
				<p className="font-bold text-2xl">Daily Transactions</p>
				<div className="flex gap-x-4">
					<CalendarIcon />
					<WarningIcon onClick={openAddTransactionModal} />
				</div>
			</div>
			<div>
				<InputGroup>
					<InputLeftElement
						pointerEvents="none"
						children={<Search2Icon color="gray.300" />}
					/>
					<Input type="text" placeholder="Search" />
				</InputGroup>
			</div>
			<Calender />
			<AddTransactionModal isOpen={isOpen} onClose={onClose} />
		</div>
	);
}

export default DateTransaction;
