import React, { useState } from 'react';

const InputBox = ({ label, name, type = 'text', isStar = true }) => {
    const [inputValue, setInputValue] = useState(''); // State to track input value

    const handleChange = (e) => {
        setInputValue(e.target.value); // Update state on input change
    };

    return (
        <div className='relative'>
            <input
                id={name}
                name={name}
                className='w-full border border-[#DCDBDD] p-3 peer placeholder-transparent rounded-md focus:outline-none'
                placeholder=' '
                type={type}
                value={inputValue}
                onChange={handleChange} // Track changes to input
                required
            />
            <label
                htmlFor={name}
                className={`absolute left-3 transition-all duration-300 bg-white cursor-pointer whitespace-nowrap
          ${inputValue ? '-top-3 text-sm text-[#84818A]' : 'top-3 text-base'} peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[#84818A]`}
            >
                {label}
                {isStar &&
                    <span className='text-red-500'>*</span>
                }
            </label>
        </div>
    );
};

export default InputBox;
