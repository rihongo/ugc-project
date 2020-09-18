import { useRouter } from "next/router";
import SignIn from "./templates/signIn";
import SignUp from "./templates/signUp";

const User = () => {
	const router = useRouter();
	const { pagename } = router.query;
	return (
		<div>
			{
				pagename === "sign-in" ? <SignIn/> :
					pagename === "sign-up" ? <SignUp/> : null
			}
		</div>
	);
};

export default User;
