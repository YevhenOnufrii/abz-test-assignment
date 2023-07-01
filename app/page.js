import bgImage from './assets/img/bg_image.jpg'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Registration from './components/Registration'
import Users from './components/Users'
import Wrapper from './components/Wrapper.jsx'

export default function Home() {
  return (
    <Wrapper>
      <Header />
      <Main bgImage={bgImage} />
      <Users />
      <Registration />
    </Wrapper>
  )
}
