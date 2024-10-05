import React, { useState } from 'react';

const InputPassword = ({ label, name }) => {
    const [type, setType] = useState('password'); // State to toggle between 'password' and 'text'
    const [inputValue, setInputValue] = useState(''); // State to track the input value

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setType((prevType) => (prevType === 'password' ? 'text' : 'password'));
    };

    // Handle input change
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className='relative'>
            {/* Label */}
            <label
                htmlFor={name}
                className={`absolute left-3 transition-all duration-300 bg-white cursor-pointer
          ${inputValue ? '-top-3 text-sm text-[#84818A]' : 'top-3 text-base'} 
          peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[#84818A]`}
            >
                {label}
                <span className='text-red-500'>*</span>
            </label>

            {/* Input */}
            <input
                id={name}
                name={name}
                className='w-full border border-[#DCDBDD] p-3 peer placeholder-transparent rounded-md focus:outline-none'
                placeholder=' '
                type={type}
                value={inputValue}
                onChange={handleChange} // Track input value changes
                required
            />

            {/* Toggle Password Visibility Icon */}
            <img
                src="/Shape.png"
                alt="Toggle visibility"
                className='absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer'
                onClick={togglePasswordVisibility} // Toggle password type between 'text' and 'password'
            />
        </div>
    );
};

export default InputPassword;
