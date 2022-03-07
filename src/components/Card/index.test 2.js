import { render, screen } from "@testing-library/react";
import background from "../../images/background.jpg";
import Card from "./index.js";
import { BrowserRouter } from "react-router-dom";

const testProps = [
  {
    image: background,
    address: "1, nowhere",
    starttime: "11:00",
    id: 1,
    price: 20
  },
  {
    image: background,
    address: "3, everywhere",
    starttime: "11:00",
    id: 1,
    price: 20
  }
];
describe("test for card components", () => {
  test("should display all the details passed in as props", () => {
    render(
      <BrowserRouter>
        {testProps.map((item, index) => {
          return <Card {...item} key={index} />;
        })}
      </BrowserRouter>
    );
    const image = screen.getAllByTestId("img");
    const address = screen.getByText("1, nowhere");
    const time = screen.getAllByText("11:00 - 17:00");
    const days = screen.getAllByText("Sundays - Fridays");
    const price = screen.getAllByText("Price: £20/hour");
    const rating = screen.getAllByText("4.5*");
    expect(image.length).toBe(2);
    image.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
    expect(address).toBeInTheDocument();
    expect(address.innerHTML).toBe("1, nowhere");
    expect(time.length).toBe(2);
    time.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
    expect(days.length).toBe(2);
    days.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
    expect(price.length).toBe(2);
    price.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
    expect(rating.length).toBe(2);
    rating.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
  });
});
