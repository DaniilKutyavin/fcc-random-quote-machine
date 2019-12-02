import React from 'react'
import './Loader.scss'

export default function Loader({ size }) {
  return <div className="loader" style={{ height: size, width: size }} />
}
