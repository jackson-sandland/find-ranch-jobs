import { Fragment, useState } from "react";
import { Box, Typography, Button, Chip, Avatar } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

interface JobListingProps {
  jobPostingDate: string;
  companyName: string;
  jobTitle: string;
  companyIcon: string;
  jobTags: string[];
  jobRate: string;
  jobLocation: string;
}

const JobListing: React.FC<JobListingProps> = ({
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

  const handleColorChange = () => {
    setColorIndex((colorIndex + 1) % colors.length);
  };

  return (
    <Fragment>
      <Box
        bgcolor={colors[colorIndex]}
        color="white"
        borderRadius="16px"
        p={2}
        onClick={handleColorChange}
        sx={{ border: "1px solid black", borderRadius: "8px" }}
      >
        <Box display="flex" justifyContent="space-between">
          <Typography variant="body2">{jobPostingDate}</Typography>
          <BookmarkBorderIcon />
        </Box>
        <Box display="flex" alignItems="center" mt={2}>
          <Box>
            <Typography variant="body2">{companyName}</Typography>
            <Typography variant="h5">{jobTitle}</Typography>
          </Box>
          <Avatar src={companyIcon} />
        </Box>
        <Box mt={2}>
          {jobTags.map((tag, index) => (
            <Chip label={tag} key={index} />
          ))}
        </Box>
      </Box>
      <Box bgcolor="white" p={2} sx={{ border: "1px solid black" }}>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Typography variant="h6">{jobRate}</Typography>
            <Typography variant="body2" color="text.secondary">
              {jobLocation}
            </Typography>
          </Box>
          <Button variant="contained" style={{ backgroundColor: "black", color: "white", borderRadius: "8px" }}>
            Details
          </Button>
        </Box>
      </Box>
    </Fragment>
  );
};

export default JobListing;
