import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [tokenMatch, setTokenMatch] = useState(false)
    const URL = "http://localhost:3000/verifyToken";

    useEffect(() => {
        const checkToken = () => {
            let token = localStorage.getItem('token')
            if (!token) {
                navigate('/login')
            }

            axios.post(URL, { token })
                .then((response) => {
                    if (token === response.data.token) {
                        setLoading(false)
                        setTokenMatch(true)
                    } else {
                        setLoading(true)
                        setTokenMatch(false)
                    }
                }).catch((err) => {
                    navigate('/login')
                    setLoading(false)
                    setTokenMatch(false)
                    console.log(err)
                })
        }

        const timeout = setTimeout(() => {
            if (loading) {
                setLoading(false)
                navigate('/login')
            }
        }, 3000)
        const interval = setInterval(checkToken, 2000)

        return () => {
            clearInterval(interval)
            clearTimeout(timeout)
        }
    }, [navigate, loading])

    if (loading) {
        return <div>loading...</div>
    }
    if (!tokenMatch) {
        navigate('/login')

    }

    return (
        <div>Dashboard</div>
    )
}

export default Dashboard;
