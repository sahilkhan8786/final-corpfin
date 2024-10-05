import React from 'react'

const InputSelect = ({ name, id }) => {
    return (
        <select
            className='w-full border p-3 rounded-sm  focus:outline-none outline-none text-[14px] text-[#202020]'
            name={name}
            id={id}>
            <option value={name}>
                {name}
                <span className='text-red-500'>*</span>
            </option>
        </select>
    )
}

export default InputSelect