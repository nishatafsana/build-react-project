import React from 'react';

const Button = ({children}) => {
    return (
        <div className='text-center '>
           <button className="btn w-30 mt-3 btn-secondary">{children}</button>
        </div>
    );
};

export default Button;