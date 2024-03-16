import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Loyaut({children}) {
  return (
    <div>
      <Header></Header>
        {children}
      <Footer></Footer>
    </div>
  )
}

export default Loyaut
