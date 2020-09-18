import { action, computed, observable } from "mobx";
import { RootStore } from "./index";

class SessionStore {
	@observable authUser = null;
	public rootStore: RootStore;

	constructor(rootStore: RootStore) {
		this.rootStore = rootStore;
	}

	@action setAuthUser = (authUser: any) : void => {
		this.authUser = authUser;
	};

	@computed getAuthUser() {
		return this.authUser;
	}

	@computed isLogin(): boolean {
		return this.getAuthUser() == null ? false : true;
	}
}

export default SessionStore;