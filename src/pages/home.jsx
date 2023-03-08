import React from 'react'
import Gallery from '../components/home/Gallery'
import Tags from '../components/home/Tags'
import Pagination from '../components/ui/Pagination'

const Home = () => {
  return (
    <>
      <Tags />
      <Gallery />
      <Pagination />
    </>
  )
}

export default Home