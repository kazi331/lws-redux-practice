import React from 'react'
import { Link } from 'react-router-dom'

const RelatedMeta = () => {
    return (
        <div className="flex flex-col w-full">
            <Link to="#">
                <p className="text-slate-900 text-sm font-semibold">
                    Some video title
                </p>
            </Link>
            <Link to="#"
                className="text-gray-400 text-xs mt-2 hover:text-gray-600"
                href="#"
            >
                Learn with Sumit
            </Link>
            <p className="text-gray-400 text-xs mt-1">
                100K views . 23 Oct 2022
            </p>
        </div>
    )
}

export default RelatedMeta