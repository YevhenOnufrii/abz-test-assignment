import { _data } from '@/data'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { validSchema } from '../schemas'
import ButtonPrimary from './ButtonPrimary'
import Container from './Container'
import Input from './Input'
import ModalSuccessReg from './ModalSuccessReg'
import RadioButton from './RadioButton'
import UploadInput from './UploadInput'

export default function RegistrationForm() {
  const [positionsList, setPositionsList] = useState([])
  const [registrationError, setRegistrationError] = useState('')
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
    // document.body.className = 'modal-active'
    document.body.classList.toggle('modal-active')
  }

  useEffect(() => {
    try {
      const getPositions = async url => {
        const response = await fetch(url)
        if (!response.ok) {
          const msg = `There was error " ${response.status} ${response.statusText} "`

          throw new Error(msg)
        }
        const data = await response.json()
        setPositionsList(data.positions)
      }
      getPositions(_data.url.positions)
    } catch (error) {
      console.log(error.message, 'getPositions')
    }
  }, [])

  const getToken = async url => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        const msg = `There was an error: ${response.status}, ${response.statusText}`
        throw new Error(msg)
      }
      const data = await response.json()
      const token = await data.token

      return token
    } catch (error) {
      console.log(error.message)
    }
  }

  const onSubmit = () => {
    values.position_id = parseInt(values.position_id)
    const formData = new FormData()
    formData.append('name', values.name)
    formData.append('email', values.email)
    formData.append('phone', values.phone)
    formData.append('position_id', values.position_id)
    formData.append('photo', values.photo)

    const post = async url => {
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
          setRegistrationError(errorMsg)
          throw new Error(msg)
        }
        // open modal window if response is ok
        if (response.ok) toggleModal()
        const data = await response.json()
        resetForm({ values: '' })
      } catch (error) {
        console.log(error.message)
      }
    }
    post(_data.url.post)
  }

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
  const userNameProps = {
    type: 'text',
    id: 'name',
    placeholder: 'Your name',
    value: values.name,
    onChange: handleChange,
    onBlur: handleBlur,
    errors: errors,
    touched: touched,
  }
  const emailInputProps = {
    type: 'email',
    id: 'email',
    placeholder: 'Email',
    value: values.email,
    onChange: handleChange,
    onBlur: handleBlur,
    errors: errors,
    touched: touched,
  }
  const phoneInputProps = {
    type: 'tel',
    id: 'phone',
    placeholder: 'Phone',
    label: '+38 (XXX) XXX - XX - XX',
    value: values.phone,
    onChange: handleChange,
    onBlur: handleBlur,
    errors: errors,
    touched: touched,
  }
  const uploadInpProps = {
    type: 'file',
    id: 'photo',
    placeholder: 'Upload your photo',
    accept: 'image/*',
    onChange: handleChange,
    onBlur: handleBlur,
    errors: errors,
    setFieldValue,
  }
  const submitBtnProps = {
    type: 'submit',
    title: 'Sign up',
  }

  return (
    <Container>
      <form
        className="registration-form max-w-[400px] h-full my-0 mx-auto flex flex-col p-3"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-y-12 mb-4">
          <Input {...userNameProps} />
          <Input {...emailInputProps} />
          <Input {...phoneInputProps} />
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
        <UploadInput {...uploadInpProps} />
        {registrationError && (
          <p className="text-center text-red-600 text-base mt-[-20px] mb-7 ">{registrationError}</p>
        )}
        <div className="text-center">
          <ButtonPrimary {...{ ...submitBtnProps, disabled: !isValid }} />
        </div>
        {modal && <ModalSuccessReg toggleModal={toggleModal} />}
      </form>
    </Container>
  )
}
