import { useEffect, useRef, useState } from 'react'
import emitter from '../../utils/emitter'

const FormInput = ({ nameLabel, typeInput, placeholder }) => {
  const value = useRef(null)
  const [showPass, setShowPass] = useState(false)
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    emitter.on('EVENT_GET_VALUE', () => {
      // emitter.emit(nameLabel, { data: value.current.value })
      emitter.emit(nameLabel, { data: inputValue })
    })
  }, [nameLabel])

  console.log('childrenn')
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  return (
    <div className="form-group">
      <label className="form-label">{nameLabel}</label>
      <div className="form__group-input">
        <input
          onChange={(e) => handleChange(e)}
          ref={value}
          value={inputValue}
          type={showPass ? 'text' : `${typeInput}`}
          placeholder={`${placeholder}`}
          className="form-control"
        />
        {/* <span className="form-message"></span> */}
        {typeInput === 'password' && (
          <i
            className="fa-solid fa-eye"
            onClick={() => setShowPass((prev) => !prev)}
          ></i>
        )}
      </div>
    </div>
  )
}

export default FormInput
