import { shallow, ShallowWrapper } from "enzyme";
import JobListingsGrid from "src/components/modules/jobListingsGrid/jobListingsGrid";

describe("JobListingsGrid", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<JobListingsGrid />);
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render a <Grid />", () => {
    expect(wrapper.find("Grid").length).toEqual(1);
  });

  it("should render a <Box />", () => {
    expect(wrapper.find("Box").length).toEqual(1);
  });

  it("should render a <Typography />", () => {
    expect(wrapper.find("Typography").length).toEqual(1);
  });

  it("should render a <Select />", () => {
    expect(wrapper.find("Select").length).toEqual(1);
  });

  it("should render a <MenuItem />", () => {
    expect(wrapper.find("MenuItem").length).toEqual(2);
  });

  it("should render a <StyledTuneIcon />", () => {
    expect(wrapper.find("StyledTuneIcon").length).toEqual(1);
  });

  it("should render a <JobListing />", () => {
    expect(wrapper.find("JobListing").length).toEqual(1);
  });
});
