import { useState, ChangeEvent } from "react";
import { Stack, TextField, MenuItem } from "@mui/material";
import { JobExperience, JobLocations, JobTitles } from "src/components/module/filterBarConstants";
// https://dribbble.com/shots/21587286-Job-Search-Platform

const renderSelectOptions = (optionsArray: string[]) => {
  return optionsArray.map((option: string, index: number) => (
    <MenuItem key={index} value={option}>
      {option}
    </MenuItem>
  ));
};

const FilterBar = () => {
  const [selectedJobTitle, setSelectedJobTitle] = useState("");
  const [selectedJobLocation, setSelectedJobLocation] = useState("");
  const [selectedJobExperience, setSelectedJobExperience] = useState("");

  const handleJobTitleChange = (event: ChangeEvent<{ value: unknown }>) => {
    setSelectedJobTitle(event.target.value as string);
  };

  const handleJobLocationChange = (event: ChangeEvent<{ value: unknown }>) => {
    setSelectedJobLocation(event.target.value as string);
  };

  const handleJobExperienceChange = (event: ChangeEvent<{ value: unknown }>) => {
    setSelectedJobExperience(event.target.value as string);
  };

  const filterOptions = [
    { label: "Job Titles", options: JobTitles, onChange: handleJobTitleChange },
    { label: "Job Locations", options: JobLocations, onChange: handleJobLocationChange },
    { label: "Job Experience", options: JobExperience, onChange: handleJobExperienceChange },
  ];

  return (
    <Stack direction="row" justifyContent="space-between" spacing={2} sx={{ marginTop: "20px" }}>
      {filterOptions.map(({ label, options, onChange }) => (
        <TextField
          select
          label={label}
          sx={{ minWidth: "200px", width: "200px" }} // Adjust the width as needed
          onChange={onChange}
        >
          {renderSelectOptions(options)}
        </TextField>
      ))}
    </Stack>
  );
};

export default FilterBar;
