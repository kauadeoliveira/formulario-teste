import { forwardRef, useEffect, useRef } from 'react';
import './style.scss'

// eslint-disable-next-line react/display-name
const TextField = forwardRef((props, ref) => {
  const {
    type,
    name,
    placeholder,
    require,
    label,
    isSucess,
    errorMsg
  } = props;
  
  const erroMsgRef = useRef(null);

  useEffect(() => {
    if(!isSucess) {
      erroMsgRef.current.classList.remove('hidden')
    } else {
      erroMsgRef.current.classList.add('hidden')
    }
  }, [isSucess])

  return (
    <div className="textfield-container">
      <input
        ref={ref}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required={require}
      />
      <label htmlFor="fullname">
        {label}
      </label>
      <span 
        className="error-message hidden" ref={erroMsgRef}>
        {errorMsg}
      </span>
  </div>
  )
});

export default TextField;