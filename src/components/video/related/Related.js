import React from 'react'
import { Link } from 'react-router-dom'
import RelatedMeta from './RelatedMeta'

const Related = () => {
    return (
        <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
            {/* <!-- single related video --> */}
            <div className="w-full flex flex-row gap-2 mb-4">
                <div className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
                    <Link to="#">
                        <img
                            src="https://i3.ytimg.com/vi/6O4s7v28nlw/maxresdefault.jpg"
                            className="object-cover"
                            alt="Some video title"
                        />
                    </Link>
                    <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">12:10</p>
                </div>
            <RelatedMeta />
            </div>
        </div>
    )
}

export default Related