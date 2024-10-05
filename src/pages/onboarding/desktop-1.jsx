import React from 'react'
import Header from '../../components/Header'

const Desktop1 = () => {
    return (
        <section>
            <Header />
            <div className='flex gap-2 max-w-[1440px] mx-auto flex-col w-full md:flex-row p-3 md:p-0'>
                <aside className='w-full md:w-1/4 px-2'>
                    <h1 className='font-semibold text-[14px] text-[#A8A8A8] tracking-widest my-4'>TABLE OF CONTENT</h1>
                    <ul>
                        <li className='hover:text-primary text-primary'>Terms & Condition</li>
                        <li className='hover:text-primary'>Security</li>
                        <li className='hover:text-primary'>Privacy Policy</li>
                    </ul>
                </aside>
                <article className='w-full md:w-3/4 text-[#5E6670] px-2'>
                    <h1 className='font-medium text-[#18191C] text-[32px] '>Terms & Condition</h1>

                    <p className=' my-3'>Praesent placerat dictum elementum. Nam pulvinar urna vel lectus maximus, eget faucibus turpis hendrerit. Sed iaculis molestie arcu, et accumsan nisi. Quisque molestie velit vitae ligula luctus bibendum. Duis sit amet eros mollis, viverra ipsum sed, convallis sapien. Donec justo erat, pulvinar vitae dui ut, finibus euismod enim. Donec velit tortor, mollis eu tortor euismod, gravida lacinia arcu.</p>
                    <ul className='list-disc px-4 flex flex-col gap-4' >
                        <li>In ac turpis mi. Donec quis semper neque. Nulla cursus gravida interdum.</li>
                        <li>Curabitur luctus sapien augue, mattis faucibus nisl vehicula nec. Mauris at scelerisque lorem. Nullam tempus felis ipsum, sagittis malesuada nulla vulputate et.</li>
                        <li>Aenean vel metus leo. Vivamus nec neque a libero sodales aliquam a et dolor.</li>
                        <li>Vestibulum rhoncus sagittis dolor vel finibus.</li>
                        <li>Integer feugiat lacus ut efficitur mattis. Sed quis molestie velit.</li>
                    </ul>
                    <p className=' my-3'>In pretium est sit amet diam feugiat eleifend. Curabitur consectetur fringilla metus. Morbi hendrerit facilisis tincidunt. Sed condimentum lacinia arcu. Ut ut iaculis metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel erat elit. In vitae turpis tempor, accumsan sapien vitae, rutrum eros. Integer pulvinar mattis turpis, ac fermentum leo ullamcorper a. Nam finibus eros libero, sit amet mattis lacus tristique eu. Donec nec ex convallis, ultricies eros ut, mollis libero. Ut scelerisque lacus interdum consectetur sodales.</p>
                    <ul className='list-disc px-4 flex flex-col gap-4' >
                        <li>In ac turpis mi. Donec quis semper neque. Nulla cursus gravida interdum.</li>
                        <li>Curabitur luctus sapien augue</li>
                        <li>mattis faucibus nisl vehicula nec, Mauris at scelerisque lorem.</li>
                        <li>Nullam tempus felis ipsum, sagittis malesuada nulla vulputate et. Aenean vel metus leo.</li>
                        <li>Vivamus nec neque a libero sodales aliquam a et dolor.</li>
                    </ul>
                    <p className=' my-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ex neque, elementum eu blandit in, ornare eu purus. Fusce eu rhoncus mi, quis ultrices lacus. Phasellus id pellentesque nulla. Cras erat nisi, mattis et efficitur et, iaculis a lacus. Fusce gravida augue quis leo facilisis.</p>
                    <p className=' my-8'>Praesent non sem facilisis, hendrerit nisi vitae, volutpat quam. Aliquam metus mauris, semper eu eros vitae, blandit tristique metus. Vestibulum maximus nec justo sed maximus. Vivamus sit amet turpis sem. Integer vitae tortor ac ex scelerisque facilisis ac vitae urna. In hac habitasse platea dictumst. Maecenas imperdiet tortor arcu, nec tincidunt neque malesuada volutpat.</p>
                    <ul className='list-disc px-4 flex flex-col gap-4' >
                        <li>In ac turpis mi. Donec quis semper neque. Nulla cursus gravida interdum.</li>
                        <li>Curabitur luctus sapien augue</li>
                        <li>mattis faucibus nisl vehicula nec, Mauris at scelerisque lorem.</li>
                        <li>Nullam tempus felis ipsum, sagittis malesuada nulla vulputate et. Aenean vel metus leo.</li>
                        <li>Vivamus nec neque a libero sodales aliquam a et dolor.</li>
                    </ul>
                    <p className=' my-8'>Fusce rutrum mauris sit amet justo rutrum, ut sodales lorem ullamcorper. Aliquam vitae iaculis urna. Nulla vitae mi vel nisl viverra ullamcorper vel elementum est. Mauris vitae elit nec enim tincidunt aliquet. Donec ultrices nulla a enim pulvinar, quis pulvinar lacus consectetur. Donec dignissim, risus nec mollis efficitur, turpis erat blandit urna, eget elementum lacus lectus eget lorem.</p>

                </article>
            </div>
        </section>
    )
}

export default Desktop1