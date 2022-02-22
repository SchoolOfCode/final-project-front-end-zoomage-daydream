import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import TypeOfSpace from "../TyprOfSpace/TypeOfSpace";
import css from"./background.module.css"
const Background = () => {
  return (
    <div className={css.form}>
      <p className="where">WHERE</p>
      <input type="input" placeholder="Anywhere" />
      <p className="where">DATE</p>
      <SearchForm />
      <p className="where">TYPE OF SPACE</p>
      <TypeOfSpace   />
    </div>
  );
};

export default Background;
