import './main.css'
import React from 'react'
import Card_1 from './Card1';
import Card_2 from './Card2';
import Banner from './Banner';

export default function Main() {
  return (
    <React.Fragment>
        <Banner/>
        <Card_1/>
        <Card_2/>

    </React.Fragment>
  )
}
