import { useEffect, useState } from "react";
import { Grid, Typography, Box, Select, MenuItem } from "@mui/material";
import JobListing from "src/components/modules/jobListingsGrid/jobListing";
import { jobPostings } from "src/components/modules/jobListingsGrid/jobListingsGridConstants";
import TuneIcon from "@mui/icons-material/Tune";
import { styled } from "@mui/system";
import { JobListingProps } from "src/components/modules/jobListingsGrid/jobListing";

const gridCellBackgrounColor = ["#E3DBFA", "#FBE2F4", "#FFE1CC", "#D4F6ED"];
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

  const handleRenderJobListings = () => (
    <Grid container spacing={2}>
      {jobListings.map(
        (
          { jobTitle, jobPostingDate, companyName, companyIcon, jobTags, jobRate, jobLocation }: JobListingProps,
          index: number
        ) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <JobListing
              jobTitle={jobTitle}
              jobPostingDate={jobPostingDate}
              companyName={companyName}
              companyIcon={companyIcon}
              jobTags={jobTags}
              jobRate={jobRate}
              jobLocation={jobLocation}
              backgroundColor={gridCellBackgrounColor[index % gridCellBackgrounColor.length]}
            />
          </Grid>
        )
      )}
    </Grid>
  );

  return (
    <Box style={{ backgroundColor: "white", padding: "0 20vw" }}>
      <Box display="flex" flexDirection="row">
        <Box style={{ backgroundColor: "lightgrey", width: "18vw", height: "100vh", margin: "40px" }}>
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
              <Select value={sortBy} onChange={handleSortChange} sx={{ color: "black" }}>
                <MenuItem value={"date"}>Date</MenuItem>
                <MenuItem value={"title"}>Title</MenuItem>
              </Select>
              <StyledTuneIcon />
            </Box>
          </Box>
          {handleRenderJobListings()}
        </Box>
      </Box>
    </Box>
  );
};

export default JobListingsGrid;
