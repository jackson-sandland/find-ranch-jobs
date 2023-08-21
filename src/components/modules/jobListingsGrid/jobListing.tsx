import { FC, Fragment, useState } from "react";
import { Avatar, Box, Button, Chip, Typography } from "@mui/material";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import { styled } from "@mui/system";
import { SvgIconProps } from "@mui/material";

interface StyledIconProps extends SvgIconProps {
  isBookmarked: boolean;
  onClick: () => void;
}

const StyledIcon = styled(({ isBookmarked, onClick, ...props }: StyledIconProps) => {
  return isBookmarked ? <BookmarkIcon {...props} onClick={onClick} /> : <BookmarkBorderOutlinedIcon {...props} onClick={onClick} />;
})`
  font-size: 24px;
  padding: 2px;
  color: black;
`;

interface JobListingProps {
  jobPostingDate: string;
  companyName: string;
  jobTitle: string;
  companyIcon: string;
  jobTags: string[];
  jobRate: string;
  jobLocation: string;
}

const JobListing: FC<JobListingProps> = ({
  jobPostingDate,
  companyName,
  jobTitle,
  companyIcon,
  jobTags,
  jobRate,
  jobLocation,
}) => {
  const colors = ["primary.main", "secondary.main", "error.main", "warning.main", "info.main", "success.main"];
  const [colorIndex, setColorIndex] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false); 

  const handleColorChange = () => {
    setColorIndex((colorIndex + 1) % colors.length);
  };

  const handleBookmarkToggle = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleRenderTags = () =>
    <Box mt={2}>
      {jobTags.map((tag: string, index: number) => (
        <Chip label={tag} key={index} style={{ color: "black" }}/>
      ))}
    </Box>

  const renderJobPostingDate = () => {
    const date = new Date(jobPostingDate);
    return `${date.getDate()} ${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`;
  }

  return (
    <Fragment>
      <Box
        bgcolor={colors[colorIndex]}
        color="black"
        borderRadius="16px"
        p={2}
        onClick={handleColorChange}
        sx={{ border: "1px solid black", borderRadius: "8px" }}
      >
        <Box display="flex" justifyContent="space-between">
          <Box bgcolor="white" borderRadius="16px" p={1}>
            <Typography variant="body2" style={{ color: "black" }}>
              {renderJobPostingDate()}
            </Typography>
          </Box>
          <Box bgcolor="white" borderRadius="50%" width="32px" height="32px" display="flex" alignItems="center" justifyContent="center">
            <StyledIcon isBookmarked={isBookmarked} onClick={handleBookmarkToggle} />
          </Box>
        </Box>
        <Box display="flex" alignItems="center" mt={2}>
          <Box>
            <Typography variant="body2" style={{ color: "black" }}>{companyName}</Typography>
            <Typography variant="h5" style={{ color: "black" }}>{jobTitle}</Typography>
          </Box>
          <Avatar src={companyIcon} />
        </Box>
        {handleRenderTags()}
        <Box bgcolor="white" p={2}>
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Typography variant="h6" style={{ color: "black" }}>
                {jobRate}
              </Typography>
              <Typography variant="body2" style={{ color: "grey" }}>
                {jobLocation}
              </Typography>
            </Box>
            <Button variant="contained" style={{ backgroundColor: "black", color: "white", borderRadius: "8px" }}>
              Details
            </Button>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default JobListing;
