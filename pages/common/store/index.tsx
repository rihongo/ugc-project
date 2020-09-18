import UserStore from "../../user/modules/store/userStore";
import SessionStore from "./sessionStore";
// import FirebaseStore from "./firebaseStore";

const rootStore = null;

export class RootStore {
	public userStore: UserStore;
	public sessionStore: SessionStore;
	// public firebaseStore: FirebaseStore;

	constructor() {
		this.sessionStore = new SessionStore(this);
		this.userStore = new UserStore(this);
		// this.firebaseStore = new FirebaseStore(this);
	}
}

const initStore = () => {
	if(rootStore == null ) {
		return new RootStore();
	} else {
		return rootStore;
	}
}

export default initStore;