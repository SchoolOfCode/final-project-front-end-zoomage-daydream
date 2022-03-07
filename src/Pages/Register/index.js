import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import css from "./register.module.css";
import background from "../../images/background.jpg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import API_URL from "../../config";
import { useAuth0 } from "@auth0/auth0-react";

const Register = () => {
  const { user } = useAuth0();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const navigate = useNavigate();
  const [data1, setData1] = useState();

  const onSubmit = async (userDetails) => {
    const { firstName, surname, emailAddress, dateOfBirth, username } =
      userDetails;
    const fullName = firstName + " " + surname;

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
    const data = post.json();
    setData1(data);
  };

  navigate("/");


  return (
    <div className={css.registerSect}>
      <Header />
      <div className={css.main}>
        <h1>Register with us</h1>
        <div className={css.mainContainer}>
          <form className={css.inputs} onSubmit={handleSubmit(onSubmit)}>
            <div className={css.category}>
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
            <div className={css.category}>
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
            <div className={css.category}>
              <label className={css.labels}> EMAIL ADDRESS </label>
              <br></br>
              <input
                type="text"
                placeholder="Email Address"
                {...register("emailAddress")}
                className={css.form}
                // value={user.email}
                required
              />
            </div>
            <div className={css.category}>
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
            <div className={css.category}>
              <label className={css.labels}>CHOOSE YOUR USERNAME </label>
              <br></br>
              <input
                type="text"
                placeholder="Choose a Username"
                {...register("username")}
                className={css.form}
                // value={user.nickname}
                required
              />
              <div>
                <input className={css.button} type="submit" />
              </div>
            </div>
            {errors.exampleRequired && <p>This field is required</p>}
          </form>
          <div className={css.backgroundRegister}>
            <img
              className={css.img}
              src="https://www.introtodigital.com/wp-content/uploads/2020/01/Happy-PC-user.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
