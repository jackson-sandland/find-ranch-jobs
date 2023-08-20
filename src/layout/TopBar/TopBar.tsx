import { Fragment } from "react";
import { AppBar, Button, Toolbar, Typography, IconButton } from "@mui/material";
import { FunctionComponent, ReactNode } from "react";
import StarIcon from "@mui/icons-material/Star";

interface TopBarProps {
  endNode?: ReactNode;
  startNode?: ReactNode;
  title?: string;
}

const buttonTitles = [
  "Post a Job",
  "Post A Job Wanted",
  "Job Types",
  "Job Locations",
  "View Job Seekers",
  "About",
  "Contact",
];

/**
 * Renders TopBar composition
 * @component TopBar
 */
const TopBar: FunctionComponent<TopBarProps> = ({ endNode, title = "", ...restOfProps }) => {
  const renderButtons = () => {
    return buttonTitles.map((buttonTitle, index) => (
      <Fragment key={index}>
        <Button onClick={() => {}}>{buttonTitle}</Button>
        <IconButton>
          <StarIcon />
        </IconButton>
      </Fragment>
    ));
  };

  return (
    <AppBar
      component="div"
      sx={
        {
          // boxShadow: 'none', // Uncomment to hide shadow
        }
      }
      {...restOfProps}
    >
      <Toolbar disableGutters sx={{ paddingX: 1, justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          sx={{
            marginX: 1,
            flexGrow: 0,
            textAlign: "left",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </Typography>
        {renderButtons()}
        {endNode}
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
