import React, { useState } from 'react'
import InputBox from './InputBox'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const NDATemplate = ({ onCancel, onCreateNDA, isInputs = false }) => {
    const [value, setValue] = useState('Data will be here from backend');

    const modules = {
        toolbar: [
            [{ 'size': [] }],
            [{ 'color': [] }, { 'background': [] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['direction', { 'align': [] }],
            ['image', 'video', 'link'],
        ],
    };

    return (
        <div className='max-w-[800px] w-full'>
            <h1 className='text-[16px] font-semibold text-primary'>{isInputs ? 'Sign our NDA template' : 'Upload NDA template'}</h1>
            {isInputs ?
                <aside className='w-full flex gap-3 my-6'>
                    <article className='flex-1'>
                        <InputBox name={'Title'} label={' Title'} />
                    </article>
                    <article className='flex-1'>
                        <InputBox name={'Name'} label={'Name'} />
                    </article>
                </aside>
                :
                <aside className='w-full my-6 flex items-center justify-center'>
                    <label>
                        <input type="file" className='hidden' />
                        <img src="/File upload area.png" alt="" />
                    </label>
                </aside>
            }
            <article className='shadow-2xl rounded-2xl'>
                <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules} />
            </article>
            <article className='my-6 flex justify-end gap-6'>
                <button className=' font-medium text-[14px] px-4 py-3 border-2 border-primary text-primary'
                    onClick={onCancel}
                >Cancel</button>
                <button className=' font-medium text-[14px] px-4 py-3 border-2 border-primary text-white bg-primary'
                    onClick={onCreateNDA}
                >Create NDA</button>
            </article>
        </div>
    )
}

export default NDATemplate