import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui-customs/components/Typography';
import AppForm from '@material-ui-customs/views/AppForm';
import FormButton from '@material-ui-customs/form/FormButton';
// import rootStore from "../../common/store";
// import { inject } from "mobx-react";
// import SessionStore from "../../common/store/sessionStore";
// import FirebaseStore from "../../common/store/firebaseStore";

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  feedback: {
    marginTop: theme.spacing(2),
  },
}));

// @inject("firebaseStore")
class SignIn extends React.Component {
  // public firebaseStore: FirebaseStore;
  //
  // constructor(props: any) {
  //   super(props);
  //   this.firebaseStore = props.firebaseStore;
  //   console.log(props)
  // }

  render() {
    // let { firebaseStore } = this.props;
    const classes = useStyles();
    return (
      <>
        <AppForm>
          <>
            <Typography variant="h3" gutterBottom marked="center" align="center">
              Sign In
            </Typography>
          </>
          <FormButton
            className={classes.button}
            size="large"
            color="secondary"
            fullWidth
            // onClick={firebaseStore.signInWithGoogle()}
          >
            {"SIGN IN WITH GOOGLE"}
          </FormButton>
        </AppForm>
      </>
    );
  }
}

export default SignIn;