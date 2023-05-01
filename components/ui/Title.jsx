import React from 'react'

function Title({children, addClass,propsgonder}) {
  return (
    <div className={`${addClass}`}>{children} <div className='hidden'>{propsgonder}</div> </div>
  )
}

export default Title