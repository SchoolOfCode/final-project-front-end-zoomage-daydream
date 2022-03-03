import { fireEvent, render, screen } from "@testing-library/react";
import CheckBox from "./index.js";

describe("test for checkbox component", () => {
  render(<CheckBox />);
  test("should display amenities", () => {
    const amenitiesTitle = screen.getByText("Amenities");
    expect(amenitiesTitle).toBeInTheDocument();

    // Test for the wifi checkbox
    const wifi = screen.getByText("WiFi");
    const wifiCheckBox = screen.getByTestId("wifi-checkbox");
    expect(wifiCheckBox).not.toBeChecked();
    fireEvent.click(wifiCheckBox);
    expect(wifiCheckBox).toBeChecked();
    expect(wifi).toBeInTheDocument();

    // Test for the shower checkbox
    const showerCheckBox = screen.getByTestId("shower-checkbox");
    const shower = screen.getByText("WiFi");
    expect(showerCheckBox).not.toBeChecked();
    fireEvent.click(showerCheckBox);
    expect(wifiCheckBox).toBeChecked();
    expect(shower).toBeInTheDocument();

    // Test for the microwave checkbox
    const microwave = screen.getByText("Microwave");
    const microwaveCheckBox = screen.getByTestId("microwave-checkbox");
    expect(microwaveCheckBox).not.toBeChecked();
    fireEvent.click(microwaveCheckBox);
    expect(microwaveCheckBox).toBeChecked();
    expect(microwave).toBeInTheDocument();

    // test for the desk checkbox
    const desk = screen.getByText("Microwave");
    const deskCheckBox = screen.getByTestId("desk-checkbox");
    expect(deskCheckBox).not.toBeChecked();
    fireEvent.click(deskCheckBox);
    expect(deskCheckBox).toBeChecked();
    expect(desk).toBeInTheDocument();

    //test for the fridge checkbox
    const fridge = screen.getByText("Fridge");
    expect(fridge).toBeInTheDocument();
    const fridgeCheckBox = screen.getByTestId("fridge-checkbox");
    expect(fridgeCheckBox).not.toBeChecked();
    fireEvent.click(fridgeCheckBox);
    expect(fridgeCheckBox).toBeChecked();
  });
});
