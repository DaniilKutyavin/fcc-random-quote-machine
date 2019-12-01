import React from 'react'
import './Loader.scss'

export default function Loader({ size }) {
  return (
    <div className="loader" style={{ height: size, width: size }}>
      <div className="loader__circle" />
      <div className="loader__circle loader__circle--delayed" />
    </div>
  )
}
