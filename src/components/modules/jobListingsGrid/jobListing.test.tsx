import { shallow, ShallowWrapper } from "enzyme";
import JobListing from "src/components/modules/jobListingsGrid/jobListing";

describe("<JobListing />", () => {
  let wrapper: ShallowWrapper;
  const props = {
    backgroundColor: "#fff",
    jobPostingDate: "2022-01-01",
    companyName: "Test Company",
    jobTitle: "Test Job",
    companyIcon: "test-icon",
    jobTags: ["tag1", "tag2"],
    jobRate: "100",
    jobLocation: "Test Location",
  };

  beforeEach(() => {
    wrapper = shallow(<JobListing {...props} />);
  });

  it("should render without crashing", () => {
    expect(wrapper).not.toBe(null);
  });

  it("should display the correct job title", () => {
    expect(wrapper.find("Typography").at(1).text()).toEqual(props.jobTitle);
  });

  it("should display the correct company name", () => {
    expect(wrapper.find("Typography").at(0).text()).toEqual(props.companyName);
  });

  it("should display the correct job rate", () => {
    expect(wrapper.find("Typography").at(2).text()).toEqual(props.jobRate);
  });

  it("should display the correct job location", () => {
    expect(wrapper.find("Typography").at(3).text()).toEqual(props.jobLocation);
  });

  it("should render the correct number of job tags", () => {
    expect(wrapper.find("Chip").length).toEqual(props.jobTags.length);
  });

  it("should render the correct background color", () => {
    expect(wrapper.find("Box").at(0).prop("style")).toHaveProperty("backgroundColor", props.backgroundColor);
  });

  it("should render the data in the correct format", () => {
    expect(wrapper.find("Typography").at(4).text()).toEqual("1 Jan 2022");
  });

  it("should toggle bookmark when bookmark icon is clicked", () => {
    const bookmarkIcon = wrapper.find("StyledBookmarkIcon");
    expect(bookmarkIcon.prop("isBookmarked")).toBe(false);
    bookmarkIcon.simulate("click");
    expect(bookmarkIcon.prop("isBookmarked")).toBe(true);
  });
});
