import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PublicIcon from "@material-ui/icons/Public";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PieChartIcon from "@material-ui/icons/PieChart";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    position: "fixed",
    // padding: "10px 0",
    // backgroundColor: "#efefefef",
  },
  icons: {
    marginBottom: 7,
  },
});

export default function FootNav({ screenConfig }) {
  const classes = useStyles();
  console.log("New Cofig", screenConfig);

  return (
    <BottomNavigation
      value={screenConfig[0]}
      onChange={(event, newValue) => {
        screenConfig[1](newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        style={{ fontWeight: "bold" }}
        label="Global States"
        icon={<PublicIcon className={classes.icons} />}
      />
      <BottomNavigationAction
        style={{ fontWeight: "bold" }}
        label="Country States"
        icon={<EmojiFlagsIcon className={classes.icons} />}
      />
      <BottomNavigationAction
        style={{ fontWeight: "bold" }}
        label="Graphs"
        icon={<PieChartIcon className={classes.icons} />}
      />
    </BottomNavigation>
  );
}
