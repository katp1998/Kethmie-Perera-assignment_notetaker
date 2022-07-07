import {useState, useEffect, React} from 'react'
import {FaUser} from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import CommonHeader from '../components/CommonHeader'

const LoginOnce = () => {
    const [formData, setFormData] = useState({
        password: '',
        password2: ''
      })
    
      const {password, password2} = formData

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
          navigate('/login')
        }else{
          console.log("isSucess = false");
        }
        dispatch(reset())
      }, [user, isError, isSuccess, message, navigate, dispatch])
      
    
      const onChange = (e) =>{
        setFormData((prevState) => ({
          ...prevState, [e.target.name]: e.target.value 
        }))
      }
    
      const onSubmit = (e) =>{
        e.preventDefault();
        if (password !== password2){
          toast.error("passwords do not match")
        }else{
          const userData = {
            password,
          }
          dispatch(register(userData))
          navigate('/login')
        }
        
        
      }

      
  if(isLoading){
    return <Spinner />
  }
    
  
    return (
    <>
    <CommonHeader />
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