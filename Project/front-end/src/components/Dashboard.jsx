import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../main'

const Dashboard = () => {
    const { getAllUsers, deleteUser, getUsersByName } = useContext(userContext)

    const [users, setUsers] = useState([]);
    const fetchUsers = () => {
        getAllUsers().then((val) => {
            console.log(val);

            setUsers(val)
        }).catch(err => {
            console.log(err);

        })
    }

    const removeUser = async (id) => {
        if (confirm("are you sure?")) {
            deleteUser(id)
            fetchUsers();
        }
    }
    useEffect(() => {
        fetchUsers();

    }, [])
    const [search, setSearch] = useState("");
    const handleSearch = (e) => {
        setSearch(e.target.value)

    }



    const searchUser = async ()=>{
        if(search==""){
            alert("cannot search data ")
        }
        else{
               let res =  await getUsersByName(search);
                console.log(res);
                setUsers(res)
                
        }
    }
    return (
        <>
            <div className="container py-5">
                <div className="mb-3 d-flex justify-content-around gap-4">
                    <input type="search" className='form-control' placeholder='enter text to search' onChange={handleSearch} value={search} />
                    <button className='btn btn-dark' onClick={searchUser}> Search </button>
                </div>

                <p className='text-light fs-3 fw-bold fst-italic border-bottom border-light border-4 w-50 rounded-pill text-center m-auto'> All Users <Link className='text-light text-decoration-none' to="/add">  <i className='fa fa-user'></i> <i className='fa fa-plus'></i></Link> </p>
                <table className='table table-light text-center my-5'>
                    <thead>
                        <tr>
                            <th> SN </th>
                            <th> Full Name </th>
                            <th> Email </th>
                            <th> Phone </th>
                            <th> Status </th>
                            <th> Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((val, index) => {
                                return <tr key={index}>
                                    <td> {index + 1} </td>
                                    <td> {val.fname} {val.lname} </td>
                                    <td> {val.email} </td>
                                    <td> {val.phone} </td>
                                    <td> {val.isActive ? "Active" : "In-active"} </td>
                                    <td>
                                        <Link to={`/edit/${val._id}`} className='btn btn-warning'> <i className='fa fa-pencil'> </i> </Link>
                                        <span className='btn btn-danger mx-2' onClick={() => removeUser(val._id)}> <i className='fa fa-trash'> </i></span>
                                    </td>
                                </tr>
                            })
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Dashboard
