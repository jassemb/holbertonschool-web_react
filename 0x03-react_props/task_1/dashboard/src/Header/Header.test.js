import { shallow } from "enzyme";
import Header from "./Header";


it('renders without crashing', () => {
  shallow(<Header />);
});

it('renders img and h1 div', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('img').length).toBe(1);
  expect(wrapper.find('h1').length).toBe(1);
});