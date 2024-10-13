import React from 'react'

const InputSelect = ({ name, id, options = [], }) => {
    return (
        <select
            className='w-full border p-3 rounded-sm  focus:outline-none outline-none text-[14px] text-[#202020]'
            name={name}
            id={id}>

            {options.length === 0 && <option value={name}>
                {name}
                <p className='bg-red-400'>*</p>
            </option>}
            {
                options.length > 0 &&
                options.map(el => (
                    <option>
                        <div key={el}>
                            {el}
                        </div>
                    </option>
                ))
            }
        </select>
    )
}

export default InputSelect