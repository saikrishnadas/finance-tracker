// @ts-ignore
import { SmallAddIcon, DeleteIcon } from "@chakra-ui/icons";

function Categories({ categories, deleteCategory, openAddCategoryModal }: any) {
	return (
		<div className="pl-5">
			<div className="pb-5 font-bold">
				<div>CATEGORIES</div>
			</div>
			<div className="flex flex-col gap-y-5 ml-5">
				{categories &&
					categories?.map((cat: any) => (
						<span className="flex gap-x-3 items-center" key={cat._id}>
							<div
								className={`w-5 h-5 ${
									cat.categories.color === "red" && "bg-red-500"
								} ${cat.categories.color === "blue" && "bg-blue-500"} ${
									cat.categories.color === "green" && "bg-green-500"
								} ${cat.categories.color === "purple" && "bg-purple-500"} ${
									cat.categories.color === "yellow" && "bg-yellow-500"
								} ${cat.categories.color === "pink" && "bg-pink-500"}`}
							/>
							<p>{cat.categories.title}</p>
							<span
								className="cursor-pointer"
								onClick={() => deleteCategory(cat._id)}
							>
								<DeleteIcon color="red.500" />
							</span>
						</span>
					))}
				<div
					className="flex gap-x-3 items-center cursor-pointer text-blue-800 font-semibold hover:text-blue-400"
					onClick={openAddCategoryModal}
				>
					<SmallAddIcon color="blue" />
					<div>Add Another</div>
				</div>
			</div>
		</div>
	);
}

export default Categories;
