import { shallow } from "enzyme";

import App from "./App";

describe("App Component", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });
});
