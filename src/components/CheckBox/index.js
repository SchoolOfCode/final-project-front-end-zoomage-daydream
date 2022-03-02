import css from "./checkbox.module.css"

const CheckBox = () => {
    return (
      <div className={css.amenitiesContainer}>
      <div className={css.amenitiesTitle}> 
      Amenities
      </div>
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