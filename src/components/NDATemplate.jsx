import React, { useState } from 'react';
import InputBox from './InputBox';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ndaContent } from '../constant';

const NDATemplate = ({ onCancel, onCreateNDA, isInputs = false }) => {
    const [value, setValue] = useState(ndaContent);
    const [isDragging, setIsDragging] = useState(false);
    const [file, setFile] = useState(null);

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

    // Handle drag over
    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    // Handle drag leave
    const handleDragLeave = () => {
        setIsDragging(false);
    };

    // Handle drop event
    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);

        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile) {
            setFile(droppedFile);  // Store the dropped file
        }
    };

    // Handle file input change (for regular file selection)
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    return (
        <div className='max-w-[800px] w-full mx-4'>
            <h1 className='text-[16px] font-semibold text-primary'>{isInputs ? 'Sign our NDA template' : 'Upload NDA template'}</h1>
            {isInputs ? (
                <aside className='w-full flex gap-3 my-6 flex-col md:flex-row'>
                    <article className='flex-1'>
                        <InputBox name={'Title'} label={' Title'} />
                    </article>
                    <article className='flex-1'>
                        <InputBox name={'Name'} label={'Name'} />
                    </article>
                </aside>
            ) : (
                <aside
                    className={`w-full my-6 flex items-center justify-center p-6 rounded-lg ${isDragging ? 'border-blue-500 bg-blue-100' : 'border-gray-300'}`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <label>
                        <input
                            type="file"
                            className='hidden'
                            onChange={handleFileChange}
                        />
                        <div className='flex flex-col items-center'>
                            {file ? (
                                <p className='text-sm text-green-500'>File Uploaded: {file.name}</p>
                            ) : (
                                <>
                                    <img src="/File upload area.png" alt="" />

                                </>
                            )}
                        </div>
                    </label>
                </aside>
            )}
            <article className='shadow-2xl rounded-2xl'>
                <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules} />
            </article>
            <article className='my-6 flex justify-end gap-6'>
                <button className='font-medium text-[14px] px-4 py-3 border-2 border-primary text-primary'
                    onClick={onCancel}
                >Cancel</button>
                <button className='font-medium text-[14px] px-4 py-3 border-2 border-primary text-white bg-primary'
                    onClick={onCreateNDA}
                >Create NDA</button>
            </article>
        </div>
    );
};

export default NDATemplate;
