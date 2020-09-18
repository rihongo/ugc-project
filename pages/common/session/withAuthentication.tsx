import { compose } from "recompose";
import { inject } from "mobx-react";
import firebase from "firebase";
import React from "react";
import SessionStore from "../store/sessionStore";

const withAuthentication = (Component : any) => {
	class WithAuthentication extends React.Component {
		public listener: any;
		public sessionStore: SessionStore;
		public firebase: any;

		constructor(props: any) {
			super(props);

			this.sessionStore = props.sessionStore;
			this.firebase = props.firebase;

			this.sessionStore.setAuthUser(
				JSON.parse(localStorage.getItem('authUser') as string),
			);
		}

		componentDidMount() {
			this.listener = this.firebase.onAuthUserListener(
				(authUser:any) => {
					localStorage.setItem('authUser', JSON.stringify(authUser));
					this.sessionStore.setAuthUser(authUser);
				},
				() => {
					localStorage.removeItem('authUser');
					this.sessionStore.setAuthUser(null);
				},
			);
		}

		componentWillUnmount() {
			this.listener();
		}

		render() {
			return <Component {...this.props} />;
		}
	}

	return compose(
		firebase.app,
		inject('sessionStore'),
	)(WithAuthentication);
};

export default withAuthentication;