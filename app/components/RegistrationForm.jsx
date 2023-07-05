import { _data } from '@/data'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { validSchema } from '../schemas'
import { getPositions, getToken } from '../utils/helpers_async'
import Container from './Container'
import Input from './Input'
import ModalSuccessReg from './ModalSuccessReg'
import RadioButton from './RadioButton'
import SubmitBtn from './SubmitBtn'
import UploadInput from './UploadInput'

export default function RegistrationForm() {
  const [positionsList, setPositionsList] = useState([])
  const [registrationError, setRegistrationError] = useState('')

  const [modal, setModal] = useState(false)
  const toggleModal = () => {
    setModal(!modal)
    document.body.classList.toggle('modal-active')
  }

  // get position list
  useEffect(() => {
    const positions = async () => {
      const data = await getPositions(_data.url.positions)
      setPositionsList(data)
    }
    positions()
  }, [])

  const onSubmit = () => {
    const formData = new FormData()
    formData.append('name', values.name)
    formData.append('email', values.email)
    formData.append('phone', values.phone)
    formData.append('position_id', values.position_id)
    formData.append('photo', values.photo)

    const post = async url => {
      // clear regErrors
      setRegistrationError('')
      const token = await getToken(_data.url.token)
      const config = {
        method: 'POST',
        headers: {
          Token: token,
        },
        body: formData,
      }
      try {
        const response = await fetch(url, config)
        if (!response.ok) {
          const msg = `There was an error: ${response.status}, ${response.statusText}`
          const errorData = await response.json()
          const errorMsg = await errorData.message
          // print error message for user
          setRegistrationError(errorMsg)
          throw new Error(msg)
        }
        // open modal window if response is ok
        if (response.ok) toggleModal()
        // clear form fields
        resetForm({ values: '' })
      } catch (error) {
        console.log(error.message)
      }
    }
    post(_data.url.post)
  }
  // formik helpers
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    isValid,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      position_id: '',
      photo: undefined,
    },
    validationSchema: validSchema,
    onSubmit,
  })

  return (
    <Container>
      <form
        className="registration-form max-w-[400px] h-full my-0 mx-auto flex flex-col p-3"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-y-12 mb-4">
          <Input
            {...{
              ..._data.input.userNameProps,
              value: values.name,
              onChange: handleChange,
              onBlur: handleBlur,
              errors: errors,
              touched: touched,
            }}
          />
          <Input
            {...{
              ..._data.input.emailProps,
              value: values.email,
              onChange: handleChange,
              onBlur: handleBlur,
              errors: errors,
              touched: touched,
            }}
          />
          <Input
            {...{
              ..._data.input.phoneProps,
              value: values.phone,
              onChange: handleChange,
              onBlur: handleBlur,
              errors: errors,
              touched: touched,
            }}
          />
        </div>
        <div className="radio-btns flex flex-col gap-3 mb-12">
          <p className="radio-bts-title">Select your position</p>
          {positionsList.map(position => (
            <RadioButton
              key={position.name}
              {...{
                ...position,
                type: 'radio',
                name: 'position_id',
                title: position.name,
                value: position.id,
                onChange: handleChange,
                onBlur: handleBlur,
              }}
            />
          ))}
        </div>
        <UploadInput
          {...{
            ..._data.input.uploadProps,
            onChange: handleChange,
            onBlur: handleBlur,
            errors: errors,
            setFieldValue,
          }}
        />
        {registrationError && (
          <p className="text-center text-red-600 text-base mt-[-20px] mb-7 ">{registrationError}</p>
        )}
        <div className="text-center">
          <SubmitBtn {...{ title: 'Sign up', type: 'submit', disabled: !isValid }} />
        </div>
        {modal && <ModalSuccessReg toggleModal={toggleModal} />}
      </form>
    </Container>
  )
}
