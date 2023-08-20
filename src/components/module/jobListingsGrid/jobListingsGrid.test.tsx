// import { useState } from "react";
// import { Grid, Typography, Box, Select, MenuItem } from "@mui/material";
// import { JobListing } from "src/components/module/jobListingsGrid/jobListing";

// const JobListingsGrid = ({ jobListings }) => {
//   const [sortBy, setSortBy] = useState("date");

//   const handleSortChange = (event) => {
//     setSortBy(event.target.value);
//   };

//   return (
//     <Box>
//       <Box display="flex" justifyContent="space-between" alignItems="center">
//         <Typography variant="h4">Job Listings</Typography>
//         <Box display="flex" alignItems="center">
//           <Typography variant="h6">{jobListings.length} Listings</Typography>
//           <Select value={sortBy} onChange={handleSortChange}>
//             <MenuItem value={"date"}>Date</MenuItem>
//             <MenuItem value={"title"}>Title</MenuItem>
//           </Select>
//         </Box>
//       </Box>
//       <Grid container spacing={2}>
//         {jobListings.map((job, index) => (
//           <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
//             <JobListing job={job} />
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };
