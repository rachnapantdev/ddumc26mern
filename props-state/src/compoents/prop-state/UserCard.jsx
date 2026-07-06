import React from 'react'

const UserCard = ({data}) => {
  return (
    <>
      <div className="card bg-dark text-info text-center">
        <div className="card-header fs-3  fw-bold border-bottom border-3 border-info">
            {data.name}
        </div>
        <div className="card-body">
          {data.username}
        </div>
        <div className="card-footer">
            {data.email}
        </div>
      </div>
    </>
  )
}

export default UserCard
