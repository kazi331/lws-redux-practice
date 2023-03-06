import React from 'react'
import Filter from '../components/home/Filter'
import Gallery from '../components/home/Gallery'
import Pagination from '../components/home/Pagination'

const Home = () => {
  return (
    <>
      <Filter />
      <Gallery />
      <Pagination />
    </>
  )
}

export default Home