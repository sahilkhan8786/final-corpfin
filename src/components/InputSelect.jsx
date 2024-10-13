import React from 'react';

const InputSelect = ({ name, id, options = [], required = true }) => {
    return (
        <select
            className='w-full border p-3 rounded-sm focus:outline-none outline-none text-[14px] text-[#202020]'
            name={name}
            id={id}
        >
            {options.length === 0 && (
                <option value={name}>
                    {required ? `${name} *` : name}
                </option>
            )}
            {options.length > 0 && (
                <option disabled value="">
                    {required ? `${name} *` : name}
                </option>
            )}
            {options.length > 0 &&
                options.map(el => (
                    <option key={el}>
                        {el}
                    </option>
                ))
            }
        </select>
    );
};

export default InputSelect;
