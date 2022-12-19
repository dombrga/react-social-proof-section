import { useState } from 'react'
import './App.scss'
import Review from './components/review/Review'
import Rating from './components/rating/Rating'

function App() {

  return (
    <div className='app'>
      <main>
        <div className=''>

        </div>
        <div className='ratings'>
          <Rating />
        </div>
        <div className='reviews'>
          <Review />
        </div>
      </main>
    </div>
  )
}

export default App
