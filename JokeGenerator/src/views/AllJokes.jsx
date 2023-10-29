import React, { useState } from 'react'
import Header from '../components/Header'
import Filter from '../components/Filter'

function Alljokes() {
  const [isConditionMet, setIsConditionMet] = useState(true)

  return (
    <div>
      <Header isConditionMet={isConditionMet}/>
      <Filter/>
    </div>
  )
}

export default Alljokes