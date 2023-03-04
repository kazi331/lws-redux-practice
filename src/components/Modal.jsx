import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../redux/features/modal'

const Modal = () => {
    const { open } = useSelector(state => state.modal)
    const dispatch = useDispatch();
    return (
        <div onClick={() => dispatch(closeModal())}
            className={` ${open ? 'z-10 ' : '-z-10 transition-all duration-500'}  absolute left-0 top-0 bottom-0 right-0 bg-gray-900 bg-opacity-70 flex items-center justify-center px-4 md:px-0`}>
            {/* modal body  */}
            <div onClick={(e) => e.stopPropagation()}
                className={` ${open ? 'mt-0 opacity-100 ' : 'mt-40 opacity-20'} transition-all duration-500 flex flex-col  text-right w-full md:w-2/3 lg:w-1/2 py-4 bg-gray-100 shadow rounded`}
            >
                {/* modal header  */}
                <div className='pb-4 px-8 border-b'>
                    <button onClick={() => dispatch(closeModal())} className="rounded p-2 bg-gray-500 text-white ">Close</button>
                </div>
                {/* modal content  */}
                <div className='text-left py-8 px-8 '>
                    Modal Content
                </div>
                {/* modal footer  */}
                <div className='pt-4 px-8 border-t'>
                    <button onClick={() => dispatch(closeModal())} className="rounded p-2 bg-gray-500 text-white ">Cancel</button>
                    <button onClick={() => dispatch(closeModal())} className="rounded p-2 bg-sky-500 text-white ml-2 ">Confirm</button>

                </div>
            </div>
        </div>
    )
}

export default Modal