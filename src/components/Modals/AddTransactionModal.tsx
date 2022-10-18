import React from "react";
import { useState, useEffect } from "react";
import { categories } from "../../utils/day";
import { getCsrfToken, ApiServicePost } from "../../utils/ApiServices";
import {
	// Modal
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	FormControl,
	FormLabel,
	Input,
	Button,
	Select,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/index";

//@ts-ignore
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
//@ts-ignore
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
//@ts-ignore
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";

import type { DatePickerProps } from "antd";
import { DatePicker, Space } from "antd";
import "antd/dist/antd.css";
import { Modal } from "antd";
import { width } from "@mui/system";
import moment from "moment";

interface AddTransactionModalProps {
	isOpen: boolean;
	onClose: any;
}

function AddTransactionModal({ isOpen, onClose }: AddTransactionModalProps) {
	const [amount, setAmount] = useState(0);
	const [category, setCategory] = useState("");
	const [note, setNote] = useState("");
	const [date, setDate] = useState<Dayjs | null>(dayjs("2014-08-18T21:11:54"));
	const initialRef = React.useRef(null);
	const finalRef = React.useRef(null);
	const token = useSelector((state: RootState) => state.auth.token);

	const handleDate = (date: any, dateString: any) => {
		console.log(date, dateString);
	};

	const handleSubmit = () => {
		// console.log(name);
		// console.log(color);
		// // categories.push({ title: name, color: color });
		// ApiServicePost("/categories", "POST", { title: name, color: color }, token)
		// 	.then((data: boolean) => {
		// 		console.log(data);
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 	});
		onClose();
	};

	return (
		<>
			<Modal
				title="Add Transaction"
				open={isOpen}
				onCancel={onClose}
				footer={null}
			>
				<FormControl>
					<FormLabel>Amount</FormLabel>
					<Input
						type="number"
						ref={initialRef}
						placeholder="Enter Amount"
						onChange={(e: any) => setAmount(e.target.value)}
					/>
				</FormControl>

				<FormControl mt={4}>
					<FormLabel>Category</FormLabel>
					<Select
						placeholder="Select a Category"
						onChange={(e: any) => setCategory(e.target.value)}
					>
						<option value="rent">Rent</option>
						<option value="petrol">Petrol</option>
					</Select>
				</FormControl>

				<FormControl mt={4}>
					<FormLabel>Date</FormLabel>
					<DatePicker
						defaultValue={moment(moment().toDate(), "DD/MM/YYYY")}
						format="DD/MM/YYYY"
						onChange={handleDate}
						autoFocus={true}
						style={{ width: "100%", height: "40px", borderRadius: "5px" }}
						placement="bottomRight"
					/>
				</FormControl>

				<FormControl mt={4}>
					<FormLabel>Note</FormLabel>
					<Input
						ref={initialRef}
						placeholder="Note (Optional)"
						onChange={(e: any) => setNote(e.target.value)}
					/>
				</FormControl>
				<div className="w-[100%] flex justify-end">
					<Button colorScheme="blue" mt={4} mr={3} onClick={handleSubmit}>
						Save
					</Button>
					<Button onClick={onClose} mt={4}>
						Cancel
					</Button>
				</div>
			</Modal>
		</>
	);
}

export default AddTransactionModal;
