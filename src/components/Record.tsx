import React from "react";
// @ts-ignore
import { DeleteIcon } from "@chakra-ui/icons";
import { ApiServicePost } from "../utils/ApiServices";
import { useSelector } from "react-redux";
import { RootState } from "../store/index";
import { ArrowUpIcon, ArrowDownIcon, InfoIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";

function Record({ color, amount, category, date, note, id, type }: any) {
	const token = useSelector((state: RootState) => state.auth.token);
	const deleteTransaction = (id: any) => {
		ApiServicePost("/transaction", "DELETE", { transactionId: id }, token)
			.then((data: boolean) => {
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div className="flex justify-between items-center mt-5">
			<div className="flex items-center">
				{/* <div
					className={`w-10 h-10 bg-red-500 rounded-lg ${
						color === "red" && "bg-red-500"
					} ${color === "blue" && "bg-blue-500"} ${
						color === "green" && "bg-green-500"
					} ${color === "purple" && "bg-purple-500"} ${
						color === "yellow" && "bg-yellow-500"
					} ${color === "pink" && "bg-pink-500"}`}
				/> */}
				{type !== "Income" ? (
					<Icon as={ArrowUpIcon} w={6} h={6} color="red.500" />
				) : (
					<Icon as={ArrowDownIcon} w={6} h={6} color="green.500" />
				)}

				<div className="flex flex-col ml-5">
					<p className="font-bold capitalize">{category}</p>

					<span className="flex items-center gap-x-2">
						<p className="text-gray-400">{date.date.replaceAll("/", "-")}</p>
						{note && (
							<div className="text-xs italic">
								<span className="flex gap-x-1">
									<p className="font-bold">Note:</p>
									<p>{note}</p>
								</span>
							</div>
						)}
					</span>
				</div>
			</div>
			<div className="flex items-center gap-x-2">
				<div>
					<p>${amount}</p>
				</div>
				<div className="cursor-pointer" onClick={() => deleteTransaction(id)}>
					<DeleteIcon color="red.500" />
				</div>
			</div>
		</div>
	);
}

export default Record;
