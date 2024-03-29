'use client'
import { _data } from '@/data'
import { useEffect, useState } from 'react'
import ButtonPrimary from './ButtonPrimary'
import Container from './Container'
import Preloader from './Preloader'
import User from './User'

export default function UsersList() {
  const [usersList, setUsersList] = useState([])
  const [visible, setVisible] = useState(6)
  const [loading, setLoading] = useState(true)

  const buttonProps = {
    title: 'Show more',
    onClick: e => showMoreUsers(e),
  }
  const showMoreUsers = event => {
    event.preventDefault()
    setVisible(prevVal => prevVal + 6)
  }

  useEffect(() => {
    try {
      const getUsersList = async url => {
        const resp = await fetch(url)
        if (!resp.ok) {
          const msg = `There was an error "${resp.status} ${resp.statusText}"`
          throw new Error(msg)
        }
        setLoading(false)
        const data = await resp.json()
        const usersArr = [...data.users].sort(
          (a, b) => a.registration_timestamp - b.registration_timestamp
        )
        setUsersList(usersArr)
      }
      getUsersList(_data.url.users)
    } catch (error) {
      console.log(error.message)
    }
  }, [])

  return (
    <Container>
      <div className="users text-center mb-[140px]">
        <h2
          id="usersList"
          className="users-title text-[40px] px-[20px] leading-[1] text-center mb-[50px]"
        >
          Working with GET request
        </h2>
        {loading && <Preloader />}
        <div className="users-list p-[20px] flex flex-row items-center justify-center  flex-wrap gap-[20px] mb-[50px]">
          {usersList.slice(0, visible).map(el => (
            <User key={el.id} props={{ ...el }} />
          ))}
        </div>
        {visible < usersList.length && <ButtonPrimary {...buttonProps} />}
      </div>
    </Container>
  )
}
