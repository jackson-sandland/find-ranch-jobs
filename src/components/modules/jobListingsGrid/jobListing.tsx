import { FC, Fragment, useState } from "react";
import { Box, Button, Chip, Typography } from "@mui/material";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import { styled } from "@mui/system";
import { SvgIconProps } from "@mui/material";

interface StyledBookmarkIconProps extends SvgIconProps {
  isBookmarked: boolean;
  onClick: () => void;
}

const StyledBookmarkIcon = styled(({ isBookmarked, onClick, ...props }: StyledBookmarkIconProps) => {
  return isBookmarked ? (
    <BookmarkIcon {...props} onClick={onClick} />
  ) : (
    <BookmarkBorderOutlinedIcon {...props} onClick={onClick} />
  );
})`
  font-size: 24px;
  padding: 2px;
  color: black;
`;

export interface JobListingProps {
  backgroundColor: string;
  jobPostingDate: string;
  companyName: string;
  jobTitle: string;
  companyIcon: string;
  jobTags: string[];
  jobRate: string;
  jobLocation: string;
}

const JobListing: FC<JobListingProps> = ({
  backgroundColor,
  jobPostingDate,
  companyName,
  jobTitle,
  companyIcon,
  jobTags,
  jobRate,
  jobLocation,
}) => {
  // const colors = ["primary.main", "secondary.main", "error.main", "warning.main", "info.main", "success.main"];
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkToggle = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleRenderTags = () => (
    <Box mt={1} style={{ margin: "20px 0 20px 10px" }}>
      {jobTags.map((tag: string, index: number) => (
        <Chip label={tag} key={index} size="small" style={{ color: "black", border: "1px solid grey" }} />
      ))}
    </Box>
  );

  const renderJobPostingDate = () => {
    const date = new Date(jobPostingDate);
    return `${date.getDate()} ${date.toLocaleString("default", { month: "long" })} ${date.getFullYear()}`;
  };

  return (
    <Fragment>
      <Box
        bgcolor={"white"}
        color="black"
        borderRadius="16px"
        p={1}
        sx={{ border: "1px solid lightgrey", borderRadius: "20px" }}
      >
        <Box bgcolor={backgroundColor} color="black" borderRadius="16px" p={1} sx={{ borderRadius: "20px" }}>
          <Box display="flex" justifyContent="space-between">
            <Box bgcolor="white" borderRadius="16px" p={1} style={{ margin: "10px" }}>
              <Typography variant="body2" style={{ color: "black", fontWeight: "bold" }}>
                {renderJobPostingDate()}
              </Typography>
            </Box>
            <Box
              bgcolor="white"
              borderRadius="50%"
              width="32px"
              height="32px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              style={{ margin: "10px" }}
            >
              <StyledBookmarkIcon isBookmarked={isBookmarked} onClick={handleBookmarkToggle} />
            </Box>
          </Box>
          <Box display="flex" alignItems="center" mt={2} style={{ margin: "10px" }}>
            <Box flexGrow={1}>
              <Typography variant="body2" style={{ color: "black" }}>
                {companyName}
              </Typography>
              <Typography variant="h5" style={{ color: "black" }}>
                {jobTitle}
              </Typography>
            </Box>
            <AgricultureIcon style={{ fontSize: 40 }} />
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
      </Box>
    </Fragment>
  );
};

export default JobListing;
