import React from 'react';
import './form-input.scss';
import { InputElement } from '../../elements/inputs/input_elements';
import { Cheked } from '../../elements/checkbox/checkbox';



export function FormInput() {
    return (
      <>
        <form className="form" id="form-input">
            <h1>Вход</h1>
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
                <Cheked id={'checkbox'} textLabel={'Я согласен получать рассылку'} />
            </div>
            <div className="registration-btn">
                <button className="registration-btn__submit" type="Input-submit">Вход</button>
            </div>
        </form>
      </>
    )
  };