import React from 'react';
import { useDropzone } from 'react-dropzone';

const DragAndDropComponent = () => {
    const onDrop = (acceptedFiles) => {
        // Handle the accepted files here
        console.log(acceptedFiles);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div className='flex items-center w-full justify-center md:flex-1' {...getRootProps()} style={{ border: isDragActive ? '2px dashed #4A90E2' : 'none', padding: '20px', borderRadius: '8px' }}>
            <input {...getInputProps()} />
            <img src="/Group 65.png" alt="" className='w-fit' />

        </div>
    );
};

export default DragAndDropComponent;
