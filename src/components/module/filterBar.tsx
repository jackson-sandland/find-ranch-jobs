import { Stack, Select, MenuItem } from "@mui/material";
// https://dribbble.com/shots/21587286-Job-Search-Platform
const JobTitles = [
  "Accountant / Bookkeeper",
  "Admin / Operations",
  "Alpaca / Llama Ranch",
  "Animal Sanctuary",
  "Barn Hand",
  "Barn Manager",
  "Bison Ranch",
  "Butcher / Meat Processing",
  "Cattle Ranch",
  "Cook / Chef",
  "Dairy Ranch",
  "Dog Training / Kennel Ranch",
  "Entry Level",
  "Equestrian",
  "Equine",
  "Family Ranch",
  "Farm Ranch",
  "Farrier / Horseshoeing",
  "Feedlot",
  "Fly Fishing",
  "Groundskeeping",
  "Guest / Dude Ranch",
  "Hay Ranch",
  "Horse Boarding Ranch",
  "Horse Care / Training",
  "Horse / Animal Rescue Ranch",
  "Horseback Riding / Trail Guide",
  "Housekeeping",
  "Hunting Ranch",
  "Intern / Apprentice",
  "Loper / Cutting Horse",
  "Organic / Regenerative Ranch",
  "Outfitter",
  "Pen Rider",
  "Poultry / Chicken Ranch",
  "Private Ranch",
  "Ranch Caretaker",
  "Ranch Cowboy",
  "Ranch Foreman",
  "Ranch Hand",
  "Ranch Handyman / Maintenance",
  "Ranch Herdsman Jobs",
  "Ranch Jobs for Couples / Teams",
  "Ranch Jobs with Housing",
  "Ranch Manager",
  "Ranch Mechanic",
  "Ranch Technician",
  "Ranch Veterinarian",
  "Range Rider",
  "Resort Ranch",
  "Sales & Marketing",
  "Sheep / Goat Ranch",
  "Summer Ranch Jobs",
  "Timber Ranch",
  "Wait Staff / Kitchen Staff",
  "Wedding Ranch",
  "Winery / Vineyard Ranch",
  "Wrangler",
];

const JobLocations = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California (N or S)",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island (Post a Ranch Job in RI)",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const JobExperience = [
  { label: "0-1 years", value: 0 },
  { label: "1-2 years", value: 1 },
  { label: "2-3 years", value: 2 },
  { label: "3-5 years", value: 3 },
  { label: "5-7 years", value: 5 },
  { label: "7-10 years", value: 7 },
  { label: "10+ years", value: 10 },
];

const FilterBar = () => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Select>
        {JobTitles.map((title, index) => (
          <MenuItem key={index} value={title}>
            {title}
          </MenuItem>
        ))}
      </Select>
      <Select>
        <MenuItem value={40}>Forty</MenuItem>
        <MenuItem value={50}>Fifty</MenuItem>
        <MenuItem value={60}>Sixty</MenuItem>
      </Select>
      <Select>
        <MenuItem value={70}>Seventy</MenuItem>
        <MenuItem value={80}>Eighty</MenuItem>
        <MenuItem value={90}>Ninety</MenuItem>
      </Select>
    </Stack>
  );
};

export default FilterBar;
