import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import Header from "./Header";

test("renders content", () => {

    const logo =  'La bulla'

  const component = render(<Header logo={logo} />);

  console.log(component);
});
