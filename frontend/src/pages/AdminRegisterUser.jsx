import {useState, useEffect, React} from 'react'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'

function AdminRegisterUser() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    mobile:'',
    accountType: '',
    password: ''
  })

  const {firstName, lastName, email, dateOfBirth, mobile, accountType, password} = formData

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
        <FaUser /> Register User
      </h1>
      <p>Please add the below details to add a user</p>
    </section>
    <section className="form">
      <form>
      <div className="form-group">
      <input type="text" className="form-control" id = 'firstName' name = 'firstName' value = {firstName} placeholder = "Enter first name" onChange={onChange}/>
      </div>
      <div className="form-group">
      <input type="text" className="form-control" id = 'lastName' name = 'lastName' value = {lastName} placeholder = "Enter last name" onChange={onChange}/>
      </div>
      <div className="form-group">
      <input type="email" className="form-control" id = 'email' name = 'email' value = {email} placeholder = "Enter email" onChange={onChange}/>
      </div>
      <div className="form-group">
      <input type="date" className="form-control" id = 'dateOfBirth' name = 'dateOfBirth' value = {dateOfBirth} onChange={onChange}/>
      </div>
      <div className="form-group">
      <input type="text" className="form-control" id = 'mobile' name = 'mobile' value = {mobile} placeholder = "Enter mobile number" onChange={onChange}/>
      </div>
      <div className="form-group">
      <input type="text" className="form-control" id = 'accountType' name = 'accountType' value = {accountType} placeholder = "Enter account type -- Admin/Student" onChange={onChange}/>
      </div>
      <div className="form-group">
      <input type="password" className="form-control" id = 'password' name = 'password' value = {password} placeholder = "Enter temporary password" onChange={onChange}/>
      </div>
      <div onSubmit={onSubmit} className="form-group">
        <button type='submit' className="btn btn-block">Register User</button>
      </div>
      </form>
    </section>
    </>
  )
}

export default AdminRegisterUser