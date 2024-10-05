import React, { useState } from 'react';
import ReactFlagsSelect from "react-flags-select";

const InputPhone = ({ label, name, type = 'text' }) => {
    const [select, setSelect] = useState("SE"); // State for the flag select
    const [inputValue, setInputValue] = useState(''); // State for input value

    const onSelect = (code) => setSelect(code); // Update selected flag
    const handleChange = (e) => setInputValue(e.target.value); // Update input value

    return (
        <div className='relative'>
            {/* Flags Select */}
            <div className='absolute w-[50px] flex pt-1 justify-start left-0'>
                <ReactFlagsSelect
                    selected={select}
                    onSelect={onSelect}
                />
            </div>

            {/* Phone Input */}
            <input
                id={name}
                name={name}
                className='w-full border border-[#DCDBDD] p-3 peer placeholder-transparent rounded-md focus:outline-none pl-20'
                placeholder=' '
                type='number'
                value={inputValue}
                onChange={handleChange} // Track input changes
                required
            />

            {/* Label */}
            <label
                htmlFor={name}
                className={`absolute left-[75px] transition-all duration-300 bg-white cursor-pointer
          ${inputValue ? '-top-3 text-sm text-[#84818A]' : 'top-3 text-base'} 
          peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[#84818A]`}
            >
                {label}
                <span className='text-red-500'>*</span>
            </label>
        </div>
    );
};

export default InputPhone;
