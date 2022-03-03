<<<<<<< HEAD
import css from "./checkbox.module.css";
=======
import css from "./checkbox.module.css"
>>>>>>> 8997b6babd55e05948c028b1dd19b0c39bd4aa3b

const CheckBox = () => {
  return (
    <div className={css.amenitiesContainer}>
      <div className={css.amenitiesTitle}>Amenities</div>
      <label>
        <input type="checkbox" />
        WiFi
      </label>
      <label>
        <input type="checkbox" />
        Shower
      </label>
      <label>
        <input type="checkbox" />
        Microwave
      </label>
      <label>
        <input type="checkbox" />
        Standing Desk
      </label>
      <label>
        <input type="checkbox" />
        Fridge
      </label>
    </div>
  );
};
export default CheckBox;
