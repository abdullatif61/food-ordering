import React from 'react'

function Title({children, addClass}) {
  return (
    <div className={`${addClass} font-dancing text-3xl font-bold` }>{children}</div>
  )
}

export default Title