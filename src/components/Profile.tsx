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
			<span onClick={openUpdateProfileModal}>
				<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
			</span>
			<UpdateProfile isOpen={isOpen} onClose={onClose} />
		</>
	);
}

export default Profile;
