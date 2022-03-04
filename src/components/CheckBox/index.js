import css from "./CheckBox.module.css";

const CheckBox = () => {
  return (
    <div className={css.amenitiesContainer}>
      <div className={css.amenitiesTitle}>Amenities</div>
      <label>
        <input type="checkbox" data-testid="wifi-checkbox" />
        WiFi
      </label>
      <label>
        <input type="checkbox" data-testid="shower-checkbox" />
        Shower
      </label>
      <label>
        <input type="checkbox" data-testid="microwave-checkbox" />
        Microwave
      </label>
      <label>
        <input type="checkbox" data-testid="desk-checkbox" />
        Standing Desk
      </label>
      <label>
        <input type="checkbox" data-testid="fridge-checkbox" />
        Fridge
      </label>
    </div>
  );
};
export default CheckBox;
