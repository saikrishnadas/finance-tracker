import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import UpdateProfile from "./Modals/UpdateProfile";
import { useState, useEffect } from "react";
function Profile() {
	const [isOpen, setIsOpen] = useState(false);
	const openUpdateProfileModal = () => {
		setIsOpen(true);
	};

	const onClose = () => {
		setIsOpen(false);
	};
	return (
		<>
			<span>
				<Avatar name="saikrishnadas666@gmail.com" />
			</span>
			{/* <UpdateProfile isOpen={isOpen} onClose={onClose} /> */}
		</>
	);
}

export default Profile;
