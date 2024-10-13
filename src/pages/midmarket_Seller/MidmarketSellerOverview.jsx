import React, { useState } from 'react'
import MidmarketSellerHeader from '../../components/MidmarketSellerHeader'
import InputBox from '../../components/InputBox'
import InputPhone from '../../components/InputPhone'
import InputSelect from '../../components/InputSelect'
import NDATemplate from '../../components/NDATemplate'
import Overlay from '../../components/Overlay'
import DragAndDropComponent from '../../components/DragAndDropComponent'



const MidmarketSellerOverview = () => {
    const [isUploadTeaserClicked, setIsuploadTeaserClicked] = useState(false);
    const [isCreateTeaserClicked, setIsCreateTeaserClicked] = useState(false);
    const [isUploadNDAClicked, setIsuploadNDAClicked] = useState(false);
    const [isSignNDAClicked, setIsSignNDAClicked] = useState(false);
    const [isUploadNDATemplateClicked, setIsUploadNDATemplateClicked] = useState(false);
    return (
        <>
            <section>
                <MidmarketSellerHeader />

                <div className='flex gap-2 max-w-[1440px] mx-auto'>
                    {/* LEFT */}
                    <article className='flex-2 border-r  pr-12 mt-4 hidden xl:block'>
                        <h1 className='text-primary font-semibold text-[16px] cursor-pointer my-4'>Business Side Dashboard</h1>
                        <ul className='flex flex-col gap-4'>
                            <li className='cursor-pointer flex gap-3'>
                                <img src="/Stack.png" alt="" />
                                <span className='font-medium text-[14px] text-[#767F8C]'>Overview</span>
                            </li>
                            <li className='cursor-pointer flex gap-3'>
                                <img src="/Gear.png" alt="" />
                                <span className='font-medium text-[14px] text-[#767F8C]'>Settings</span>
                            </li>
                            <li className='cursor-pointer flex gap-3'>
                                <img src="/SignOut.png" alt="" />
                                <span className='font-medium text-[14px] text-[#767F8C]'>Log-out</span>
                            </li>
                        </ul>

                    </article>

                    {/* RIGHT */}
                    <article className='flex-[6] px-4 flex flex-col gap-10'>

                        <div className='border-b-[1px] w-full mt-12 flex '>
                            <p className=' flex gap-2 font-semibold text-[14px] cursor-pointer p-3 hover:text-primary text-primary border-b border-primary'>
                                <img src="/User.png" alt="" />
                                <span>
                                    Personal
                                </span>
                            </p>
                            <p className=' flex gap-2 font-semibold text-[14px] cursor-pointer p-3 hover:text-primary text-[#767F8C] border-b hover:border-primary'>
                                <img src="/UserCircle.png" alt="" />
                                <span>Business</span>
                            </p>
                        </div>
                        <div>

                            <div className='flex flex-1 gap-4 my-6 flex-col md:flex-row' >
                                <div className='flex items-center w-full justify-center md:flex-1'>

                                    <DragAndDropComponent />
                                </div>
                                <div className='flex w-full flex-col  gap-4 md:flex-1  '>
                                    <div className='w-full flex-1'>
                                        <InputBox
                                            name={'first name'}
                                            label={'first name'}
                                        />
                                    </div>
                                    <div className='w-full flex-1'>
                                        <InputBox
                                            name={'Email address'}
                                            label={'Email address'}
                                        />
                                    </div>
                                    <div className='w-full flex-1'>
                                        <InputBox
                                            name={'Change Password'}
                                            label={'Change Password'}
                                        />
                                    </div>
                                </div>
                                <div className='flex w-full flex-col flex-1 gap-4'>
                                    <div className='w-full flex-1'>
                                        <InputBox
                                            name={'Last name'}
                                            label={'Last name'}
                                        />
                                    </div>
                                    <div className='w-full flex-1'>
                                        <InputPhone label="Phone number" name='Phone number' />
                                    </div>
                                    <div className='w-full flex-1'>
                                        <InputBox
                                            name={'Re-Enter Password'}
                                            label={'Re-Enter Password'}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='w-full flex items-center justify-end'>

                                <button className='bg-primary text-white w-1/2 hover:opacity-85   py-3'>Edit Details</button>
                            </div>
                        </div>
                        <form className='mb-16'>

                            <article className=''>
                                <h1 className='text-primary font-semibold text-[16px]'>Create Your listing</h1>
                                <p className='text-[14px]'>Please enter the mandatory fields</p>
                            </article>

                            <div>
                                <article className='flex w-full mt-6 gap-3 flex-col md:flex-row flex-wrap'>
                                    <div className='w-full flex-1'>
                                        <InputBox
                                            label={'Transaction overview'}
                                            name={'Transaction overview'} />

                                    </div>
                                    <div className='w-full flex-1'>
                                        <InputBox
                                            label={'Transaction details'}
                                            name={'Transaction details'} />

                                    </div>
                                    <div className='w-full flex-1'>

                                        <InputBox
                                            label={'Transaction objective'}
                                            name={'Transaction objective'} />
                                    </div>
                                </article>
                            </div>
                            <div className='flex w-full my-4 gap-3 flex-col md:flex-row'>
                                <article className='flex-1 w-full flex flex-col gap-3'>
                                    <div className='flex gap-4 items-center '>
                                        <InputSelect name={'Transaction type'} id={'Transaction type'} />
                                        <img src="/info.png" alt="" />
                                    </div>
                                    <div className='flex gap-4 items-center '>

                                        <InputSelect name={'Industry'} id={'Industry'} />
                                        <img src="/info.png" alt="" />
                                    </div>
                                    <div className='flex gap-4 items-center '>

                                        <InputSelect name={'Country'} id={'Country '} />
                                        <img src="/info.png" alt="" />
                                    </div>
                                    <div className='   items-center w-full flex gap-4'>
                                        <div className='flex-1 w-full'>

                                            <InputBox
                                                label={'Revenue'}
                                                name={'Revenue '} />
                                        </div>
                                        <img src="/info.png" alt="" />
                                    </div>
                                    <div className='   items-center w-full flex gap-4'>
                                        <div className='flex-1 w-full'>

                                            <InputBox
                                                label={'Revenue Growth'}
                                                name={'Revenue Growth '} />
                                        </div>
                                        <img src="/info.png" alt="" />
                                    </div>
                                    <div className='   items-center w-full flex gap-4'>
                                        <div className='flex-1 w-full'>

                                            <InputBox
                                                label={'Enterprise Value'}
                                                name={'Enterprise Value '} />
                                        </div>
                                        <img src="/info.png" alt="" />
                                    </div>
                                </article>
                                <article className='flex-1 w-full flex flex-col gap-3'>
                                    <div className='flex gap-4 items-center '>
                                        <InputSelect name={'Preferred Investor'} id={'Preferred Investor'} />
                                        <img src="/info.png" alt="" />
                                    </div>
                                    <div className='flex gap-4 items-center '>

                                        <InputSelect name={'Sun Industry'} id={'Sun Industry'} />
                                        <img src="/info.png" alt="" />
                                    </div>
                                    <div className='flex gap-4 items-center '>

                                        <InputSelect name={'Country'} id={'Country '} />
                                        <img src="/info.png" alt="" />
                                    </div>
                                    <div className='   items-center w-full flex gap-4'>
                                        <div className='flex-1 w-full'>

                                            <InputBox
                                                label={'EBITDA'}
                                                name={'EBITDA '} />
                                        </div>
                                        <img src="/info.png" alt="" />
                                    </div>
                                    <div className='   items-center w-full flex gap-4'>
                                        <div className='flex-1 w-full'>

                                            <InputBox
                                                label={'EBIDTA Margin'}
                                                name={'EBIDTA Margin '} />
                                        </div>
                                        <img src="/info.png" alt="" />
                                    </div>

                                </article>
                            </div>
                            <div>
                                <textarea name="" id="" cols="30" rows="6" placeholder='Any other details ' className='border w-full p-4'></textarea>
                            </div>
                            <article className='block md:hidden text-center my-6'>
                                <p className='font-medium text-[#202020] text-[16px]'>Need help?</p>
                                <span className='text-primary text-[12px] underline cursor-pointer'>Talk to our advisors </span>
                            </article>
                            <div className='flex justify-between  my-6 flex-col md:flex-row '>
                                <article className='flex gap-4 w-full'>
                                    <p className='border-2 border-primary flex gap-2 items-center p-3 hover:opacity-85 text-primary justify-center   w-full md:w-fit cursor-pointer' onClick={() => setIsuploadTeaserClicked(true)}>
                                        <img src="/upload.png" alt="" />
                                        <span>Upload Teaser</span>
                                    </p>
                                    <p className='border-2 border-primary flex gap-2 items-center bg-primary text-white p-3 hover:opacity-85 justify-center w-full md:w-fit cursor-pointer'
                                        onClick={() => setIsuploadNDAClicked(true)}>
                                        <img src="/file-plus.png" alt="" />
                                        <span>Upload NDA</span>
                                    </p>
                                </article>
                                <article className='hidden md:block '>
                                    <p className='font-medium text-[#202020] text-[16px]'>Need help?</p>
                                    <span className='text-primary text-[12px] underline cursor-pointer whitespace-nowrap'>Talk to our advisors </span>
                                </article>
                            </div>
                            <div className='flex items-center justify-center w-2/3 md:w-full mx-auto  gap-4'>
                                <button className='border-2 border-primary flex gap-2 items-center p-3 hover:opacity-85 text-primary w-full  justify-center md:w-fit'>
                                    Cancel
                                </button>
                                <button className='border-2 border-primary flex gap-2 items-center bg-primary text-white p-3 hover:opacity-85 w-full   justify-center md:w-fit whitespace-nowrap'>
                                    Create Listing
                                </button>
                            </div>

                        </form>

                    </article>

                </div>


            </section>


            {isUploadTeaserClicked && <Overlay >
                <div className='absolute top-4 right-4 font-bold cursor-pointer' onClick={() => setIsuploadTeaserClicked(false)}>X</div>
                <div className='border border-gray py-6 px-12 flex gap-12 flex-col xl:flex-row '>
                    <article className='flex flex-wrap gap-4 w-full flex-col mx-4'>
                        <h1 className=' font-medium text-[16px] text-primary whitespace-nowrap'>Upload teaser file</h1>
                        <p className='text-[#707070] text-[12px] whitespace-nowrap'>.pdf format only</p>
                        <button className='w-[182px] text-primary bg-white py-3 font-medium border-2 border-primary inline-flex items-center justify-center gap-4 '>
                            <label className='cursor-pointer flex gap-4'>
                                <img src="/upload.png" alt="" />
                                <input type="file" className='hidden' />
                                Upload file
                            </label>
                        </button>
                    </article>

                    <article className='flex flex-wrap gap-4 w-full flex-col xl:border-l px-5'>
                        <h1 className=' font-medium text-[16px] text-primary whitespace-nowrap'>Fill in form</h1>
                        <p className='text-[#707070] text-[12px] whitespace-nowrap'>We recommend professionally created teaser</p>
                        <button className='w-[182px] text-white  py-3 font-medium border-2 border-primary inline-flex items-center justify-center gap-4 bg-primary' onClick={() => setIsCreateTeaserClicked(true)} >
                            <img src="/file-plus.png" alt="" />
                            <span>
                                Create Teaser
                            </span>
                        </button>
                    </article>
                    <article className='flex flex-wrap gap-4 w-full flex-col xl:border-l px-5'>
                        <h1 className=' font-medium text-[16px] text-primary whitespace-nowrap'>Create teaser professionally?</h1>
                        <p className='text-[#707070] text-[12px] whitespace-nowrap'>Talk to our advisors</p>
                        <button className='w-[210px] text-primary bg-white py-3 font-medium border-2 border-primary inline-flex items-center justify-center gap-4 '>
                            <img src="/upload.png" alt="" />
                            <span>
                                Talk to our advisors
                            </span>
                        </button>
                    </article>

                </div>
            </Overlay>}
            {isCreateTeaserClicked && <Overlay >

                <form className='max-w-[600px] sm:mx-auto  w-full mx-4'>
                    <h1 className='font-semibold text-[16px] text-primary my-4'>Create Your teaser </h1>
                    <aside className='flex flex-col gap-4 w-full'>

                        <article className='flex items-center gap-3'>

                            <div className='flex-1 w-full'>
                                <InputBox
                                    label={'Company overview'}
                                    name={'Company overview'} />
                            </div>
                            <img src="/info.png" alt="" />
                        </article>
                        <article className='flex items-center gap-3'>

                            <div className='flex-1 w-full'>
                                <InputBox
                                    label={'Investment thesis'}
                                    name={'Investment thesis'} />
                            </div>
                            <img src="/info.png" alt="" />
                        </article>
                        <article className='flex items-center gap-3'>

                            <div className='flex-1 w-full'>
                                <InputBox
                                    label={'Key financials'}
                                    name={'Key financials'} />
                            </div>
                            <img src="/info.png" alt="" />
                        </article>
                        <article className='flex items-center gap-3'>

                            <div className='flex-1 w-full'>
                                <InputBox
                                    label={'Industry overview'}
                                    name={'Industry overview'} />
                            </div>
                            <img src="/info.png" alt="" />
                        </article>
                        <article className='flex items-center gap-3'>

                            <div className='flex-1 w-full'>
                                <InputBox
                                    label={'Key management'}
                                    name={'Key management'} />
                            </div>
                            <img src="/info.png" alt="" />
                        </article>
                        <article className='flex items-center gap-3'>

                            <div className='flex-1 w-full'>
                                <InputBox
                                    label={'Competitors'}
                                    name={'Competitors'} />
                            </div>
                            <img src="/info.png" alt="" />
                        </article>
                        <article className='flex items-center gap-3'>

                            <div className='flex-1 w-full'>
                                <InputBox
                                    label={'Competitors'}
                                    name={'Competitors'} />
                            </div>
                            <img src="/info.png" alt="" />
                        </article>
                        <article className='flex items-center gap-3'>

                            <div className='flex-1 w-full'>
                                <InputBox
                                    isStar={false}
                                    label={'Others'}
                                    name={'Others'} />
                            </div>
                            <span className='text-transparent'>22</span>
                        </article>
                    </aside>
                    <div className='my-6 w-full flex items-center justify-center gap-5'>
                        <button className='border border-primary px-4 py-3 bg-white text-primary'
                            onClick={() => setIsCreateTeaserClicked(false)}>Cancel</button>
                        <button className='border border-primary px-4 py-3 text-white bg-primary'
                            onClick={() => { setIsCreateTeaserClicked(false); setIsuploadTeaserClicked(false); }}
                        >Create Teaser</button>
                    </div>
                </form>
            </Overlay>}


            {isUploadNDAClicked && <Overlay >
                <div className='absolute top-4 right-4 font-bold cursor-pointer' onClick={() => setIsuploadNDAClicked(false)}>X</div>
                <div className='border border-gray py-6 px-12 flex gap-12 flex-col xl:flex-row'>
                    <article className='flex flex-wrap gap-4 w-full flex-col mx-4'>
                        <h1 className=' font-medium text-[16px] text-primary whitespace-nowrap'>Sign our NDA template</h1>
                        <p className='text-[#707070] text-[12px] whitespace-nowrap'>Recommended</p>
                        <button className='w-[182px] text-primary bg-white py-3 font-medium border-2 border-primary inline-flex items-center justify-center gap-4 ' onClick={() => setIsSignNDAClicked(true)}>
                            Sign our NDA
                        </button>
                    </article>

                    <article className='flex flex-wrap gap-4 w-full flex-col xl:border-l px-5'>
                        <h1 className=' font-medium text-[16px] text-primary whitespace-nowrap'>Upload your NDA</h1>
                        <p className='text-[#707070] text-[12px] whitespace-nowrap'>.doc format for edit</p>
                        <button className='w-[182px] text-white  py-3 font-medium border-2 border-primary inline-flex items-center justify-center gap-4 bg-primary' onClick={() => setIsUploadNDATemplateClicked(true)} >
                            <img src="/upload-white.png" alt="" />
                            <span>
                                Upload NDA
                            </span>
                        </button>
                    </article>
                    <article className='flex flex-wrap gap-4 w-full flex-col xl:border-l px-5'>
                        <h1 className=' font-medium text-[16px] text-primary whitespace-nowrap'>No NDA</h1>
                        <p className='text-[#DF0000] italic text-[12px] whitespace-nowrap'>You are not uploading NDA?</p>
                        <button className='w-[210px] text-primary bg-white py-3 font-medium border-2 border-primary inline-flex items-center justify-center gap-4 '>
                            <span>
                                No NDA
                            </span>
                        </button>
                    </article>

                </div>
            </Overlay>}
            {isSignNDAClicked && <Overlay>
                <NDATemplate
                    isInputs={true}
                    onCancel={() => setIsSignNDAClicked(false)}
                    onCreateNDA={() => { setIsSignNDAClicked(false); setIsuploadNDAClicked(false); }}
                />
            </Overlay>}
            {isUploadNDATemplateClicked && <Overlay>
                <NDATemplate
                    onCancel={() => setIsUploadNDATemplateClicked(false)}
                    onCreateNDA={() => { setIsUploadNDATemplateClicked(false); setIsSignNDAClicked(false); }}
                />
            </Overlay>}

        </>
    )
}

export default MidmarketSellerOverview