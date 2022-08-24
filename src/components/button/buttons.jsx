import React from 'react';
import './buttons_style.scss';


 export function ButtonsMain() {

  const clickReg = () => {
      const formRegistration = document.querySelector("#form-registration");
      const formInput = document.querySelector("#form-input");
      formInput.classList.remove('form-visibility');
      formRegistration.classList.toggle("form-visibility");
}
  const clickInput = () => {
    const formRegistration = document.querySelector("#form-registration");
    const formInput = document.querySelector("#form-input");
    formRegistration.classList.remove('form-visibility')
    formInput.classList.toggle("form-visibility")
  } 
    return (
      <>
        <button onClick={clickReg} className="visible-btn" id="visible-reg-btn">Регистарция</button>
        <button onClick={clickInput} className="visible-btn" id="visible-inp-btn">Вход</button>
      </>
    )
  };