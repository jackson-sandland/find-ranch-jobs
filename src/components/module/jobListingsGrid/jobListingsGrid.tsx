import { useEffect, useState } from "react";
import { Grid, Typography, Box, Select, MenuItem } from "@mui/material";
import JobListing from "src/components/module/jobListingsGrid/jobListing";
import { jobPostings } from "src/components/module/jobListingsGrid/jobListingsGridConstants";

const JobListingsGrid = () => {
  const [jobListings, setJobListings] = useState<any[]>([]);
  const [sortBy, setSortBy] = useState("date");

  useEffect(() => {
    setJobListings(jobPostings);
  }, []);

  const handleSortChange = (event: any) => {
    setSortBy(event.target.value);
  };

  return (
    <Box style={{ backgroundColor: "white" }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" style={{ color: "black" }}>
          Recommended jobs
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography variant="h6">{jobListings.length} Listings</Typography>
          <Select value={sortBy} onChange={handleSortChange}>
            <MenuItem value={"date"}>Date</MenuItem>
            <MenuItem value={"title"}>Title</MenuItem>
          </Select>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {jobListings.map((job: any, index: number) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <JobListing
              jobTitle={job.jobTitle}
              jobPostingDate={job.jobPostingDate}
              companyName={job.companyName}
              companyIcon={job.companyIcon}
              jobTags={job.jobTags}
              jobRate={job.jobRate}
              jobLocation={job.jobLocation}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default JobListingsGrid;
