import React from 'react';
import './form_style.scss';
import ReactDOM from 'react-dom/client';
import { InputElement } from '../../elements/inputs/input_elements';
import { Cheked } from '../../elements/checkbox/checkbox';



export function FormRegistration() {
//Функция првоерки Email
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
//Обрабатываем нажатие кнопки "Регистрация"
function submitFormReg(e) {
    const formRegistration = document.querySelector('#form-registration');
    console.log("form", formRegistration)
        

// Переменные для вывода сообщения
const errorText = {
    empty: 'Поле обязательно для заполнения',
    requirement: 'Введеный Email не корректный',
    requirementPassword: 'Пароль должен содержать как минимум 8 символов',
  }
const errorMessages = {
    email: '',
    password: '',
    checkbox: ''
  } 

const inputEmail = formRegistration.querySelector('#email');
const blockInput = formRegistration.querySelectorAll('.registration');
const inputPassword = formRegistration.querySelector('#password')
const inputChekbox = formRegistration.querySelector('#checkbox')
const formError = formRegistration.querySelectorAll('.input__error')
const checkboxError = formRegistration.querySelector('.checkbox_label')
// Добавление/Удаления классов
const testErrorsStyle = (InputBorder,blockInputs, errorsMassages) => {
    InputBorder.classList.add('error')
    blockInputs.classList.add('error-2')
    errorsMassages.classList.add('error-2')
  }
const testErrorsStyleRemove = (InputBorder,blockInputs, errorsMassages) => {
    InputBorder.classList.remove('error')
    blockInputs.classList.remove('error-2')
    errorsMassages.classList.remove('error-2')
}
    e.preventDefault();
    //Проверяем валидность email
    let isEmailValid = false
    if (inputEmail.value === "") {
        testErrorsStyle(inputEmail,blockInput[0],formError[0])
        errorMessages.email = errorText.empty
        formError[0].textContent = errorMessages.email
    } else if (validateEmail(inputEmail.value) === false) {
        testErrorsStyle(inputEmail,blockInput[0],formError[0])
        errorMessages.email = errorText.requirement
        formError[0].textContent = errorMessages.email
    } else {
        isEmailValid = true
        testErrorsStyleRemove(inputEmail,blockInput[0],formError[0])
    }

    //Проверяем валидность password
    let isPasswordValid = false
    if (inputPassword.value === "") {
        testErrorsStyle(inputPassword,blockInput[1],formError[1])
        errorMessages.password = errorText.empty
        formError[1].textContent = errorMessages.password
    } else if (inputPassword.value.length < 8) {
        testErrorsStyle(inputPassword,blockInput[1],formError[1])
        errorMessages.password = errorText.requirementPassword
        formError[1].textContent = errorMessages.password
    } else {
        isPasswordValid = true
        testErrorsStyleRemove(inputPassword,blockInput[1],formError[1])
    }

    //Проверяем нажат ли checkbox
    let isCheckboxValid = false
    if (inputChekbox.checked === false) {
        testErrorsStyle(inputChekbox,blockInput[2],formError[2])
        checkboxError.classList.add('checkbox_label-error')
        errorMessages.checkbox = errorText.empty
        formError[2].textContent = errorMessages.checkbox
    } else {
        isCheckboxValid = true
        testErrorsStyleRemove(inputChekbox, blockInput[2], formError[2])
        checkboxError.classList.remove('checkbox_label-error')
    }
    
    // Проверяем все ли три поля валидны для отправки
    if (isEmailValid && isPasswordValid && isCheckboxValid) {
        const date = {
            email: inputEmail.value,
            password: inputPassword.value
          };
        console.log(date);
        e.target.reset();
    }
} 
    return (
      <>
        <form className="form" id="form-registration" onSubmit={submitFormReg}>
            <h1>Регистарция</h1>
            <div className="registration">
                <span className="registration-star">*</span>
                <InputElement id={'email'} labelText={'Email'} placeholder={'Введите Email'} />
            </div>
            <div className="registration">
                <span className="registration-star">*</span>
                <InputElement id={'password'} labelText={'Password'} placeholder={'Введите Пароль'} />
            </div>
            <div className="registration">
                <span className="registration-star">*</span>
                <Cheked id={'checkbox'} textLabel={'Я согласен с Правилами пользования приложением'} />
            </div>
            <div className="registration-btn">
                <button className="registration-btn__submit" type="registration-submit">Регистарция</button>
            </div>
        </form>
      </>
    )
  };