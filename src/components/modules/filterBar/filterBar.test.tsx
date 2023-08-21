import FilterBar from "src/components/modules/filterBar/filterBar";
import { shallow } from "enzyme";

describe("FilterBar", () => {
  it("renders without crashing", () => {
    shallow(<FilterBar />);
  });

  it("handles job title change", () => {
    const wrapper = shallow(<FilterBar />);
    let select = wrapper.find('select[name="Job Titles"]');
    select.simulate("change", { target: { value: "Engineer" } });
    select = wrapper.find('select[name="Job Titles"]');
    expect(select.prop("value")).toBe("Engineer");
  });

  it("handles job location change", () => {
    const wrapper = shallow(<FilterBar />);
    let select = wrapper.find('select[name="Job Locations"]');
    select.simulate("change", { target: { value: "New York" } });
    select = wrapper.find('select[name="Job Locations"]');
    expect(select.prop("value")).toBe("New York");
  });

  it("handles job experience change", () => {
    const wrapper = shallow(<FilterBar />);
    let select = wrapper.find('select[name="Job Experience"]');
    select.simulate("change", { target: { value: "5 years" } });
    select = wrapper.find('select[name="Job Experience"]');
    expect(select.prop("value")).toBe("5 years");
  });
});
