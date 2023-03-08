import React from 'react'
import { useParams } from 'react-router-dom'
import Description from '../components/video/descripton/Description'
import Player from '../components/video/Player'
import Related from '../components/video/related/Related'

const Videos = () => {
    const {id } = useParams();
    return (
        <section className="pt-6 pb-20">
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                <div className="grid grid-cols-3 gap-2 lg:gap-8">
                    <div className="col-span-full w-full space-y-8 lg:col-span-2">
                        <Player />
                        <Description />
                    </div>
                    <Related />
                </div>
            </div>
        </section>
    )
}

export default Videos