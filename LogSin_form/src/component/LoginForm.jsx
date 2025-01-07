const LoginForm = ()=>{
    return <div className="form">
    <h2>Login Form</h2>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <a href="#">Forget Password</a>
    <button>Login</button>
    <p>Not a member? <a href="#" onClick={()=> setIsLogin(false)}>SingUp now</a></p>
  </div>
}
export default LoginForm;