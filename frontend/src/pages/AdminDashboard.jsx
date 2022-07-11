import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import{useSelector} from 'react-redux'
import Header from '../components/Header'


function AdminDashboard() {
  const navigate = useNavigate()
  const {user} = useSelector((state) => state.auth)

  useEffect(()=> {
    if(!user){
      navigate('/login')
    }
  }, [user, navigate])
  return (
    <>
    <Header />
    <section className="heading">
      <h1>Welcome {user && user.name}</h1>
      <p>Administrator Dashboard</p>
    </section>
        
    </>
  )
}

export default AdminDashboard