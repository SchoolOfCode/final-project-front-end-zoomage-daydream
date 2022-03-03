import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import css from "./register.module.css";
import background from "../../images/background.jpg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import API_URL from "../../config";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (userDetails) => {
    console.log(userDetails);

    const { firstName, surname, emailAddress, dateOfBirth, username } =
      userDetails;
    const fullName = firstName + " " + surname;
    console.log(fullName);
    navigate("/dashboard");
    const post = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        full_name: fullName,
        username: username,
        email: emailAddress,
        date_of_birth: dateOfBirth
      })
    });
    navigate("/dashboard");
  };

  return (
    <div className={css.registerSect}>
      <Header />
      <div className={css.mainContainer}>
        <form className={css.inputs} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className={css.labels}> FIRST NAME </label>
            <br></br>
            <input
              type="text"
              placeholder="First Name"
              {...register("firstName")}
              className={css.form}
              required
            />
          </div>
          <div>
            <label className={css.labels}> LAST NAME </label>
            <br></br>
            <input
              type="text"
              placeholder="Your Surname"
              {...register("surname")}
              className={css.form}
              required
            />
          </div>
          <div>
            <label className={css.labels}> EMAIL ADDRESS </label>
            <br></br>
            <input
              type="text"
              placeholder="Email Address"
              {...register("emailAddress")}
              className={css.form}
              required
            />
          </div>
          <div>
            <label className={css.labels}> DATE OF BIRTH </label>
            <br></br>
            <input
              type="date"
              placeholder="Your Date of Birth"
              {...register("dateOfBirth")}
              className={css.form}
              required
            />
          </div>
          <div>
            <label className={css.labels}> PLEASE CHOOSE A USERNAME </label>
            <br></br>
            <input
              type="text"
              placeholder="Choose a Username"
              {...register("username")}
              className={css.form}
              required
            />
            <div>
              <input type="submit" />
            </div>
          </div>
          {errors.exampleRequired && <p>This field is required</p>}
        </form>
        <div className={css.backgroundRegister}>
          <img src={background} alt="" className={css.imag} />
        </div>
      </div>
      <div className={css.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Register;
