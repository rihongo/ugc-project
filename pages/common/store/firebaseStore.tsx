import firebaseConfig from "@config/firebaseConfig";
// import { RootStore } from "./index";
import firebase from "firebase";


class FirebaseStore {
	private googleProvider: any;
	private auth: any;
	// public rootStore: RootStore;

	constructor() {
		!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

		// this.rootStore = rootStore;
		this.auth = firebase.auth();
		this.googleProvider = new firebase.auth.GoogleAuthProvider();
	}

	signInWithGoogle = () => {
		this.googleProvider.setCustomParameters({prompt: 'select_account'});

		this.auth.signInWithPopup(this.googleProvider).then((result: any) => {
			// this.rootStore.sessionStore.setAuthUser(result.user);
			console.log(result);
		}).catch(function(error: any) {
			const errorMessage = error.message;
			console.log(errorMessage);
		});
	}

	signOut = () => {
		this.auth.signOut().then(function() {
			// Sign-out successful.
		}, function(error: any) {
			const errorMessage = error.message;
			console.log(errorMessage);
		});
	}
}

export default FirebaseStore;