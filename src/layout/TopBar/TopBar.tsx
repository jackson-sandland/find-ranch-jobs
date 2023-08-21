import { Fragment } from "react";
import { AppBar, Button, Toolbar, Typography, IconButton } from "@mui/material";
import { FC, ReactNode } from "react";
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
const TopBar: FC<TopBarProps> = ({ endNode, title = "", ...restOfProps }) => {
  const renderButtons = () => {
    return buttonTitles.map((buttonTitle, index) => (
      <Fragment key={index}>
        <Button onClick={() => {}} style={{ color: "white" }}>{buttonTitle}</Button>
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
          backgroundColor: 'black',
          boxShadow: 'none', 
          paddingX: 24,
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
            color: "white", // Makes the title text white
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
