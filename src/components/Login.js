import React from 'react'

export default function Login({userName, password, handleUsername, handlePassword, handleLogin}) {
    let style = {
        position: 'absolute',
        top:'50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '40%',
        border: '1px solid #999',
        padding: '20px'
    }

    return (
        <div className="formSection" style={style}>
            <h1>Login</h1>
            <div className='form-group'>
                <label>Username: &nbsp;</label>
                <input
                    className="form-control"
                    type="text" 
                    placeholder="Please Enter username"
                    onChange={handleUsername}
                    value={userName}
                    />
            </div>
            <div className='form-group'>
                <label>Password: &nbsp;</label>
                <input 
                    className="form-control"
                    type="password" 
                    placeholder="Please Enter password"
                    onChange={handlePassword}
                    value={password}
                    />
            </div>
            <div className='form-group'>
                <button className="btn btn-primary" onClick={handleLogin}>Login</button>
            </div>
            <div className="text-danger" id='loginError' style={{display: 'none'}}>Please provide valid Credentials</div>
        </div>
    )
}
