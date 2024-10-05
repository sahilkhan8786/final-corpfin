import React from 'react'

const TeamCard = ({ name, post, isShown = false }) => {
    return (
        <div className='relative'>
            <img src="/asian-woman-insurance-salesperson-is-presenting-th-2023-11-27-05-00-33-utc copy 5.png" alt="" />

            {isShown && <article className='absolute right-20 top-1/2 -translate-y-1/2 flex flex-col gap-4'>
                <img src="/twitter.png" alt="" />
                <img src="/whatsapp.png" alt="" />
            </article>}
            <article>
                <h1 className='font-medium text-[28px] text-[#0D0D0D]'>{name}</h1>
                <p className=' text-[16px] text-[#3B3B3B]'> {post}</p>
            </article>
        </div>
    )
}

export default TeamCard