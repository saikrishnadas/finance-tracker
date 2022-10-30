// @ts-ignore
import { DeleteIcon } from "@chakra-ui/icons";
import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";

function Record({
	color,
	amount,
	category,
	date,
	note,
	id,
	type,
	deleteTransaction,
}: any) {
	return (
		<div className="flex justify-between items-center mt-5">
			<div className="flex items-center">
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
					<p>
						{"\u20B9"}
						{amount}
					</p>
				</div>
				<div className="cursor-pointer" onClick={() => deleteTransaction(id)}>
					<DeleteIcon color="red.500" />
				</div>
			</div>
		</div>
	);
}

export default Record;
