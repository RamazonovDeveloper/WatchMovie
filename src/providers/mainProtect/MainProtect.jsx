import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Mainprotect = ({children}) => {

    const navigate = useNavigate()

    useEffect(() => {

        if(localStorage.getItem('token')){
            navigate('/')
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

export default Mainprotect;
