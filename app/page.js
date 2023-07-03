import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Registration from './components/Registration'
import Users from './components/UsersList.jsx'
import Wrapper from './components/Wrapper.jsx'

export default function Home() {
  return (
    <Wrapper>
      <Header />
      <Main />
      <Users />
      <Registration />
    </Wrapper>
  )
}
