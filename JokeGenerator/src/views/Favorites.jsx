import React, { useState } from 'react'
import Header from '../components/Header'
import Filter from '../components/Filter'

function Favorites() {
  const [activePage, setActivePage] = useState(true)


  return (
    <div>
      <Header activePage={activePage}/>
      <Filter/>
    </div>
  )
}

export default Favorites