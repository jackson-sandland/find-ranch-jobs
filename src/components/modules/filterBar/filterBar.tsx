import { useState, ChangeEvent } from "react";
import { Icon, Stack, TextField, MenuItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { JobExperience, JobLocations, JobTitles } from "src/components/modules/filterBar/filterBarConstants";
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
    {
      label: "Job Titles",
      options: JobTitles,
      onChange: handleJobTitleChange,
      icon: <SearchIcon />,
    },
    {
      label: "Job Locations",
      options: JobLocations,
      onChange: handleJobLocationChange,
      icon: <LocationOnIcon />,
    },
    {
      label: "Job Experience",
      options: JobExperience,
      onChange: handleJobExperienceChange,
      icon: <BusinessCenterIcon />,
    },
  ];

  const handleRenderFilterOptions = () =>
    filterOptions.map(({ label, options, onChange, icon }) => (
      <TextField
        key={label}
        select
        label={label}
        sx={{ minWidth: "200px", width: "200px" }}
        onChange={onChange}
        InputProps={{
          startAdornment: <Icon sx={{ marginRight: 1, fontSize: 20 }}>{icon}</Icon>,
        }}
      >
        {renderSelectOptions(options)}
      </TextField>
    ));

  return (
    <Stack direction="row" justifyContent="space-between" spacing={2} sx={{ marginTop: "20px" }}>
      {handleRenderFilterOptions()}
    </Stack>
  );
};

export default FilterBar;
