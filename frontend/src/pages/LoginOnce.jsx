import {useState, useEffect, React} from 'react'
import {FaUser} from 'react-icons/fa'

const LoginOnce = () => {
    const [formData, setFormData] = useState({
        password: '',
        password2: ''
      })
    
      const {password, password2} = formData
    
      const onChange = (e) =>{
        setFormData((prevState) => ({
          ...prevState, [e.target.name]: e.target.value 
        }))
      }
    
      const onSubmit = (e) =>{
        e.preventDefault();
      }
    
  
    return (
    <>
    <section className="heading">
      <h1>
        <FaUser /> Reset Password
      </h1>
    </section>
    <section className="form">
      <form>
      <div className="form-group">
      <input type="password" className="form-control" id = 'password' name = 'password' value = {password} placeholder = "Enter password" onChange={onChange}/>
      </div>
      <div className="form-group">
      <input type="password" className="form-control" id = 'password2' name = 'password2' value = {password2} placeholder = "Confirm password" onChange={onChange}/>
      </div>
      <div onSubmit={onSubmit} className="form-group">
        <button type='submit' className="btn btn-block">Reset password</button>
      </div>
      </form>
    </section>
    </>
  )
}

export default LoginOnce