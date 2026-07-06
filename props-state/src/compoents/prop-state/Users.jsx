import React, { useState } from 'react'
import UserCard from './UserCard'

const Users = () => {
    const [user, setUser] = useState([
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net"
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "username": "Karianne",
            "email": "Julianne.OConner@kory.org",
        },
        {
            "id": 5,
            "name": "Chelsey Dietrich",
            "username": "Kamren",
            "email": "Lucio_Hettinger@annie.ca",

        },
    ])
    return (
        <>
            <div className="container">
                <div className="row g-4">
                    {
                        user.map((val, index) => {
                            return <div className="col-4 ">
                                <UserCard data = {val} />
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Users
