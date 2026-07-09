import React, { useEffect, useState } from 'react'

const DigitalClock = () => {
    const [time, setTime] = useState("")
    useEffect(() => {
        document.title = "Digital Clock"
        setInterval(() => {
            const date = new Date();
            setTime(date.toLocaleTimeString());
        },1000)

        
    })
    return (
        <>
            <div className="container">
                <div className="alert alert-info text-center" style={{
                    height: "100vh"
                }}>
                    <h1> Digital Clock </h1>
                    <h2> {time}  </h2>
                </div>
            </div>
        </>
    )
}

export default DigitalClock
