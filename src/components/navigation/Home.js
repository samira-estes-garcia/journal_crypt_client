import React from 'react'
import lock from './lock.jpg'

const Home = () => {
    return (
        <div className="text-center p-3">
            <h1>Journal Crypt</h1>
            <p className="text-primary">Journal in peace, your entries are secure.</p>
            <img src={lock} className="img-fluid"/>
        </div>
    )
}

export default Home;