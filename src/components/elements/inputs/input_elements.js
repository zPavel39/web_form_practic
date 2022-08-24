import React from 'react';
import './input_elements.scss';



export function InputElement({id, labelText, placeholder}) {
    return (
      <>
        <div class="input">
            <label class="input__label" for={id}>{labelText}</label>
            <input class="input__input" type="text" id={id} placeholder={placeholder} />
            <span class="input__error">Текст</span>
        </div>
      </>
    )
};