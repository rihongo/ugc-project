import { WithStyles } from "@material-ui/core";
import { appBarStyles } from "@material-ui-customs/views/AppAppBar";

export default interface AppBarStyle extends WithStyles<typeof appBarStyles> {
	toolbar: string,
	title: string,
	left: string,
	right: string,
	rightLink: string,
	placeholder: string,
	linkSecondary: string
}