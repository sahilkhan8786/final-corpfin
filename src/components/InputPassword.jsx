import React, { useState } from 'react';

const InputPassword = ({ label, name }) => {
    const [inputValue, setInputValue] = useState(''); // State to track input value
    const [type, setType] = useState('password'); // State to toggle between 'password' and 'text'

    // Handle input change
    const handleChange = (e) => {
        setInputValue(e.target.value); // Update state on input change
    };

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setType((prevType) => (prevType === 'password' ? 'text' : 'password')); // Toggle between password and text
    };

    return (
        <div className='relative'>
            {/* Input */}
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
            {/* Label */}
            <label
                htmlFor={name}
                className={`absolute left-3 transition-all duration-300 bg-white cursor-pointer whitespace-nowrap
          ${inputValue ? '-top-3 text-sm text-[#84818A]' : 'top-3 text-base'} peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[#84818A]`}
            >
                {label}
                <span className='text-red-500'>*</span>
            </label>

            {/* Toggle Password Visibility Icon */}
            <img
                src="/Shape.png"
                alt="Toggle visibility"
                className='absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer'
                onClick={togglePasswordVisibility} // Toggle password visibility
            />
        </div>
    );
};

export default InputPassword;
