import Profile from '../Profile/Profile'
import './main.css'
import Header from '../Header'
import About from '../About/About'

const Main = () => {
  return (
    <main className="main-container">
      {/* <Header /> */}
      <Profile />
      <About />
    </main>
  )
}

export default Main
