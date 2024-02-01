import './App.css'
import back from './assets/Right Side.png'
import logo from './assets/free-icon-google-300221 1.svg'
export default function App() {
  return (
    <div className="container">
      <div className="left-side">
        <h1>Welcome Back</h1>
        <p>Welcome back! Please enter your details.</p>
        <p>Email</p>
        <input className='password-email' type="email" placeholder='Enter your email' />
        <p>Password</p>
        <input className='password-email' type="password" placeholder='*************' />
        <br />
        <div className="checkbox">
          <input type="checkbox" />
          <span>Remember me</span>
        </div>
        <button>Sign in</button>
        <br />
        <button> <img src={logo} alt="" />Sign in with Google</button>
        <span>Don't have your account? <a className='free-sign' href="#">Sign up for free</a></span>
      </div>
      <div className="right-side">
        <img src={back} alt="right-side" />
      </div>
    </div>
  )
}