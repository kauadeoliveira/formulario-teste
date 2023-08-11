import TextField from '../TextField';
import { useEffect, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom'
import './style.scss'

export default function Form() {
  const nameFormRef = useRef(null);
  const emailFormRef = useRef(null);

  const [nameStatus, setNameStatus] = useState({
    isSucess: undefined,
    type: undefined,
    errorMsg: undefined,
  });
  const [emailStatus, setEmailStatus] = useState({
    isSucess: undefined,
    type: undefined,
    errorMsg: undefined,
  });
  const [redirect, setRedirect] = useState(false);

  const handleNameError = () => {
    const formatNameValue = nameFormRef.current.value.trimStart().trimEnd();
    if (formatNameValue === '') {
      setNameStatus({ 
        isSucess: false,
        type: 'emptyField',
        errorMsg: 'Este campo es obligatorio.'
      });
    } else if (!isNaN(formatNameValue)) {
      setNameStatus({
        isSucess: false,
        type: 'emptyField',
        errorMsg: 'Nombre inválido.'
      });
    } else {
      setNameStatus({
        isSucess: true,
        type: undefined,
        errorMsg: undefined
      });
    }
  };

  const handleEmailError = () => {
    const formatEmailValue = emailFormRef.current.value.trimStart().trimEnd();
    if (formatEmailValue === '') {
      setEmailStatus({
        isSucess: false,
        type: 'emptyField',
        errorMsg: 'Este campo es obligatorio.'
      });
    } else if (!formatEmailValue.includes('@')) {
      setEmailStatus({
        isSucess: false,
        type: 'emptyField',
        errorMsg: 'Introduzca una dirección de correo electrónico válida.'
      });
    } else {
      setEmailStatus({
        isSucess: true,
        type: undefined,
        errorMsg: undefined
      });
    }
  }

  useEffect(() => {
    if(emailStatus.isSucess === true && nameStatus.isSucess === true){
      setRedirect(true);
    }
  }, [emailStatus, nameStatus])

  if (redirect) {
    return <Navigate to="/page-two"/>
  } else {
    return (
      <div className="form-container">
        <div className="fields">
          <TextField
            label={'Nombre'}
            placeholder={'Escriba su nombre'}
            name="fullname"
            require={true}
            type="text"
            isSucess={nameStatus.isSucess}
            errorMsg={nameStatus.errorMsg}
            ref={nameFormRef}
          />
          <TextField
            label={'Email'}
            placeholder={'Escribe tu mejor correo electrónico!*'}
            name="email"
            require={true}
            type="email"
            isSucess={emailStatus.isSucess}
            errorMsg={emailStatus.errorMsg}
            ref={emailFormRef}
          />
        </div>
        <button className="btn" type="submit" onClick={() => {
          handleNameError();
          handleEmailError();
          }}
        >
          Mira mi Tarjeta!
        </button>
      </div>
    )}
}