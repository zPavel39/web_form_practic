import React from 'react';
import './App.scss';
import { ButtonsMain } from './components/button/buttons';
import { FormRegistration } from './components/form/form-registration/form_registration';
import { FormInput } from './components/form/form-input/form_input';

function App() {
  return (
    <div className="App container">
      <ButtonsMain/>
      <FormRegistration/>
      <FormInput />
      <a className='logo' href='https://github.com/zPavel39/web_form_practic'>GitHub</a>
    </div>
  );
}
export default App;