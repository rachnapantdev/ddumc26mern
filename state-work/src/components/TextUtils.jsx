import React, { useState } from 'react'

const TextUtils = () => {
    const [text, setText] = useState("")
    const changeToUpper = ()=>{
        setText(text.toUpperCase())
    }
    return (
        <>
            <div className="container py-5">
                <textarea rows="10" className='form-control' onChange={(event)=>setText(event.target.value)}>

                </textarea>
                <div className="mb-3">
                    {text}
                </div>
                <div className="mb-3">
                    <button className='btn btn-warning ' onClick={changeToUpper}> Upper Case </button>
                </div>
            </div>

        </>
    )
}

export default TextUtils
