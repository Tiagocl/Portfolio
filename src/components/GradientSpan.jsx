import React from 'react'

const GradientSpan = ({ text }) => {
  return (
    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500
          to-cyan-500'>
            {text}
    </span>
  )
}

export default GradientSpan;