import React from 'react'
import Style from'./demo.module.css'

function Styles() {
    const head = {
        color:'blue'
    }
  return (
    <div>
        {/* inline */}
      <h1 style={{color:'red'}}>1.What is React?</h1>
      {/* internal */}
      <h5 style={head}>* A open source javascript Library that is used to build User Interfaces(UI).</h5>
      {/* External */}
      <h5 className='external'>* React is a Single page Application.</h5>
      {/* modules */}
      <h5 className={Style.ex}>* They migrated from FAXJS to React JS and released it to public on 29th may 2013.</h5>
    </div>
  )
}

export default Styles
