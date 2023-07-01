'use client'
import Container from './Container'
import RegistrationForm from './RegistrationForm'

export default function Registration() {
  return (
    <Container>
      <div className="registration">
        <h2 className="registration-title text-[40px] px-[20px] leading-[1] text-center mb-[50px]">
          Working with POST request
        </h2>
        <RegistrationForm />
      </div>
    </Container>
  )
}
