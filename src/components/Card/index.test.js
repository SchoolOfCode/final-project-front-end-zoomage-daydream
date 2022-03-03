import { render, screen } from "@testing-library/react";
import background from "../../images/background.jpg";
import Card from "./index.js";
import { BrowserRouter } from "react-router-dom";

const testProps = [
  {
    image: background,
    address: "1, erom",
    starttime: "23:00",
    id: 1,
    price: 20
  },
  {
    image: background,
    address: "1, erom",
    starttime: "23:00",
    id: 1,
    price: 20
  }
];
describe("test for card components", () => {
  render(
    <BrowserRouter>
      {testProps.map((item, index) => {
        return <Card {...item} key={index} />;
      })}
    </BrowserRouter>
  );
  test("should display all the object images in the array", () => {
    const image = screen.getAllByTestId("img");
    expect(image.length).toBe(2);
    image.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
  });
});
