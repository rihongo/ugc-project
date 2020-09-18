import { action, computed, observable } from "mobx";
import { RootStore } from "../../../common/store";
import { User } from "firebase";
import { KeyValuePair } from "@interfaces/KeyValuePair";

class UserStore {
	public rootStore: RootStore;

	@observable
	public users: KeyValuePair = {};

	constructor(rootStore: RootStore) {
		this.rootStore = rootStore;
	}

	@action setUsers = (users: KeyValuePair) => {
		this.users = users;
	};

	@action setUser = (user:User, uid:number) => {
		if (!this.users) {
			this.users = {};
		}

		this.users[uid] = user;
	};

	@computed get userList() {
		return Object.keys(this.users || {}).map(key => ({
			...this.users[key],
			uid: key,
		}));
	}
}

export default UserStore;
