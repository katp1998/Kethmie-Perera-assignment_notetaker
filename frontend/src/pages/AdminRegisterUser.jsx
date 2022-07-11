 import {useState, useEffect, React} from 'react'
import {FaUser} from 'react-icons/fa'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {register, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import Header from '../components/Header'

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
  
  const navigate = useNavigate()
  const dispatch = useDispatch()

 const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  ) 
  
  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/adminDashboard')
    }
    
    dispatch(reset())

  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) =>{
    e.preventDefault();
    

    const userData = {
      firstName,
      lastName,
      email,
      dateOfBirth,
      mobile,
      accountType,
      password
    }
    dispatch(register(userData))

    //method to send email to student with temporary password

  }

  if(isLoading){
    return <Spinner />
  }

  return (
    <>
    <Header />
    <section className="heading">
      <h1>
        <FaUser /> Register User
      </h1>
      <p>Please add the below details to add a user</p>
    </section>
    <section className="form">
      <form onSubmit={onSubmit}>
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
      <input type="number" className="form-control" id = 'mobile' name = 'mobile' value = {mobile} placeholder = "Enter mobile number" onChange={onChange}/>
      </div>
      <div className="form-group">
      <input type="text" className="form-control" id = 'accountType' name = 'accountType' value = {accountType} placeholder = "Enter account type -- Admin/Student" onChange={onChange}/>
      </div>
      <div className="form-group">
      <input type="password" className="form-control" id = 'password' name = 'password' value = {password} placeholder = "Enter temporary password" onChange={onChange}/>
      </div>
      <div className="form-group">
        <button type='submit' className="btn btn-block">Register User</button>
      </div>
      </form>
    </section>
    </>
  )
}

export default AdminRegisterUser