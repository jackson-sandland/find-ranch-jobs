import { useEffect, useState } from "react";
import { Grid, Typography, Box, Select, MenuItem } from "@mui/material";
import JobListing from "src/components/modules/jobListingsGrid/jobListing";
import { jobPostings } from "src/components/modules/jobListingsGrid/jobListingsGridConstants";
import TuneIcon from "@mui/icons-material/Tune";
import { styled } from "@mui/system";

const StyledTuneIcon = styled(TuneIcon)({
  fontSize: 24,
  padding: "2px",
  color: "black",
});

const JobListingsGrid = () => {
  const [jobListings, setJobListings] = useState<any[]>([]);
  const [sortBy, setSortBy] = useState("date");

  useEffect(() => {
    setJobListings(jobPostings);
  }, []);

  const handleSortChange = (event: any) => {
    setSortBy(event.target.value);
  };

  const backgroundColor = ["#E3DBFA", "#FBE2F4", "#FFE1CC", "#D4F6ED"];

  return (
    <Box style={{ backgroundColor: "white", padding: "0 20vw" }}>
      <Box display="flex" flexDirection="row">
        <Box style={{ backgroundColor: "lightgrey", width: "15vw", height: "100vh", margin: "40px" }}>
          <Typography variant="h4" style={{ color: "black" }}>
            SIDEBAR
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" flexGrow={1}>
          <Box display="flex" justifyContent="space-between" alignItems="center" style={{ marginTop: "25px" }}>
            <Typography variant="h4" style={{ color: "black" }}>
              Recommended jobs
            </Typography>
            <Box display="flex" alignItems="center">
              <Typography variant="h6">{jobListings.length} Listings</Typography>
              <Typography variant="body2" style={{ color: "grey" }}>
                Sort By
              </Typography>
              <Select value={sortBy} onChange={handleSortChange}>
                <MenuItem value={"date"}>Date</MenuItem>
                <MenuItem value={"title"}>Title</MenuItem>
              </Select>
              <StyledTuneIcon />
            </Box>
          </Box>
          <Grid container spacing={2}>
            {jobListings.map((job: any, index: number) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <JobListing
                  jobTitle={job.jobTitle}
                  jobPostingDate={job.jobPostingDate}
                  companyName={job.companyName}
                  companyIcon={job.companyIcon}
                  jobTags={job.jobTags}
                  jobRate={job.jobRate}
                  jobLocation={job.jobLocation}
                  backgroundColor={backgroundColor[index % backgroundColor.length]}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default JobListingsGrid;
