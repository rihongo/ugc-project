import React from "react";
// import clsx from 'clsx';
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import Link from '../components/Link';
import AppBar from '../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';
import AppBarStyle from "@interfaces/AppBarStyle";
import SessionStore from "../../pages/common/store/sessionStore";
// import { inject, observer } from "mobx-react";
// import { compose } from "recompose";

export const appBarStyles = (theme: Theme) => createStyles({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

class AppAppBar extends React.Component {
  public sessionStore: SessionStore;

  constructor(props: any) {
    super(props);
    this.sessionStore = props.sessionStore;
    console.log(props)
  }

  render() {
    console.log(this.sessionStore)
    return this.sessionStore === null ? AppAppBarAuth : AppAppBarNonAuth
  }
}

const AppAppBarAuth = withStyles(appBarStyles)(class extends React.Component<AppBarStyle> {

  render() {
    const { toolbar, left, title, right, rightLink, placeholder} = this.props.classes;

    return (
      <div>
        <AppBar position="fixed">
          <Toolbar className={toolbar}>
            <div className={left}/>
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              className={title}
              href="/"
            >
              {'onepirate'}
            </Link>
            <div className={right}>
              <Link
                color="inherit"
                variant="h6"
                underline="none"
                className={rightLink}
                href="/user/sign-in"
              >
                {'Sign Out'}
              </Link>
            </div>
          </Toolbar>
        </AppBar>
        <div className={placeholder}/>
      </div>
    )
  }
});

const AppAppBarNonAuth = withStyles(appBarStyles)(class extends React.Component<AppBarStyle> {

  render() {
    const { toolbar, left, title, right, rightLink, placeholder} = this.props.classes;

    return (
      <div>
        <AppBar position="fixed">
          <Toolbar className={toolbar}>
            <div className={left}/>
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              className={title}
              href="/"
            >
              {'onepirate'}
            </Link>
            <div className={right}>
              <Link
                color="inherit"
                variant="h6"
                underline="none"
                className={rightLink}
                href="/user/sign-in"
              >
                {'Sign In'}
              </Link>
            </div>
          </Toolbar>
        </AppBar>
        <div className={placeholder}/>
      </div>
    )
  }
});

export default AppAppBar;