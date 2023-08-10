import React from 'react'
import { useState } from 'react'
import PropsSecond from './PropsSecond'

const PropsOne = () => {
    const [title, setTitle] = useState('ram')
  return (
    <>
    <div>PropsOne</div>
    <PropsSecond name ={title}/>
    </>
  )
}

export default PropsOne