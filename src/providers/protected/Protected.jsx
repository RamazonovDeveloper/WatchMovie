

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Protected = ({children}) => {

    const navigate = useNavigate()

    useEffect(() => {
        if(!localStorage.getItem('token')){
            navigate('/login')
        }
    })

    return (
        <div>
            <>
                {children}
            </>
        </div>
    );
}

export default Protected;
