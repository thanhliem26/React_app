import React, { useState, useEffect } from 'react'
import './index.scss'
import FormInput from './formInput'
import emitter from '../../utils/emitter'
import * as yup from 'yup'

const Form = () => {
  const [valueInput, setValueInput] = useState({
    Email: '',
    Password: '',
  })
  const [checkInput, setCheckInput] = useState(false)

  const Check = async () => {
    await schema
      .validate({
        username: valueInput.Email,
        password: valueInput.Password,
      })
      .then((valid) => {
        console.log('check', valid)
      })
      .catch((err) => {
        alert(err)
      })
  }

  let schema = yup.object().shape({
    username: yup.string().required().email('Must be a valid email!'),
    password: yup
      .string()
      .required()
      .min(6, 'must be at lease 6 character long'),
  })

  const handleEventEmitter = () => {
    setCheckInput(true)
    emitter.emit('EVENT_GET_VALUE')
  }

  useEffect(() => {
    for (const property in valueInput) {
      emitter.on(property, (data) => {
        setValueInput((prev) => ({
          ...prev,
          [property]: data.data,
        }))
      })
    }

    checkInput && Check()
  }, [valueInput, checkInput])
  console.log('parent validate')
  return (
    <div className="main">
      <div className="form" id="form-1">
        <h3 className="heading">Sing In</h3>

        <div className="spacer"></div>
        <FormInput
          nameLabel="Email"
          typeInput="text"
          placeholder="VD: email@domain.com"
        />
        <FormInput
          nameLabel="Password"
          typeInput="password"
          placeholder="Nhập mật khẩu"
        />
        <button className="form-submit" onClick={handleEventEmitter}>
          Đăng nhập
        </button>
      </div>
    </div>
  )
}

export default Form
