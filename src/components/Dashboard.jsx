import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    let navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const URL = "http://localhost:9000/verifyToken";
    
    useEffect(()=>{
        const verifyToken = ()=>{
            axios.post(URL, {token: localStorage.getItem('token')})
            .then((response)=>{
                if(response.data.valid){
                    setLoading(false);
                }else{
                    navigate('/login')
                }
            }).catch((err)=>{
                    console.log(err)
                    navigate('/login')
            })
        }
        verifyToken()
    }, [navigate])
    if(loading){
        return <div>loading...</div>
    }
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard