import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import css from "./register.module.css"

const Register = () => {
  return (
    <div>
      <Header />
      <div className={css.inputs}>
      <div>
        <label className={css.labels}> FIRST NAME </label>
        <br></br>
        <input type="text" placeholder="First Name" required className={css.form}/>
      </div>
      <div>
        <label className={css.labels}> LAST NAME </label>
        <br></br>
        <input type="text" placeholder="Last Name" required className={css.form}/>
      </div>
      <div>
        <label className={css.labels}> EMAIL ADDRESS </label>
        <br></br>
        <input type="text" placeholder="Email Address" required className={css.form}/>
      </div>
      <div>
        <label className={css.labels}> DATE OF BIRTH </label>
        <br></br>
        <input type="text" placeholder="Name" required className={css.form}/>
      </div>
      <div>
        <label className={css.labels}> PLEASE CHOOSE A USERNAME </label>
        <br></br>
        <input type="text" placeholder="Choose a Username" required className={css.form}/>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
