import React from 'react'

const InputPhoto = () => {
    return (
        <div className='flex w-full '>
            <label htmlFor="file" className=' flex-1 border w-full py-2 flex items-center justify-center gap-3 hover:border-primary cursor-pointer'>
                <img src="/image-gallery 1.png" alt="" />
                <span className='text-[14px] text-[#8A818A]'>Upload Photo</span>
            </label>
            <input type="file" className='hidden' name='file' id='file' />
        </div>
    )
}

export default InputPhoto