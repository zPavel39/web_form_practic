import React from 'react';
import './checkbox.scss';


 export function Cheked({id, textLabel}) {
    return (
      <>
        <div className="checkbox">
            <input className="checkbox_input" type="checkbox" id={id} />
            <label className="checkbox_label" for={id}><a href="#">{textLabel}</a></label>
            <span className="input__error">Текст</span>
        </div>
      </>
    )
  };
