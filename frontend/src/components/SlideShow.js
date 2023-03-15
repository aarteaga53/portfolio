import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import CloseIcon from '@mui/icons-material/Close'
import { IconButton } from '@mui/material'
import { BudgetBuddySlides, MyNotesSlides, PortfolioSlides, MachineSlides, PSSSlides, FreeNOSSlides } from '../images'

const SlideShow = () => {
  let [slides, setSlides] = useState({})
  let [index, setIndex] = useState(0)
  let navigate = useNavigate()
  let locate = useLocation()

  useEffect(() => {
    let tempSet = {}
    let tempSlides = []

    switch(locate.state.set) {
      case 'Budget Buddy':
        tempSet = BudgetBuddySlides
        break
      case 'My Notes':
        tempSet = MyNotesSlides
        break
      case 'Andrew\'s Portfolio':
        tempSet = PortfolioSlides
        break
      case 'Machine Learning':
        tempSet = MachineSlides
        break
      case 'Personal Scheduling Service':
        tempSet = PSSSlides
        break
      case 'FreeNOS':
        tempSet = FreeNOSSlides
        break
      default:
        break
    }

    for(let image in tempSet) {
      tempSlides.push(tempSet[image])
    }

    setSlides(tempSlides)
  }, [locate])

  let increase = () => {
    if(index < slides.length - 1) {
      setIndex(index + 1)
    }
  }

  let decrease = () => {
    if(index > 0) {
      setIndex(index - 1)
    }
  }

  let back = () => {
    navigate(-1)
  }

  return (
    <div>
      <div className='top-panel'>
        <div className='name' onClick={back}>Andrew Arteaga</div>
      </div>
      <div className='other-body'>
        <div className='slideshow'>
          <div className='slide-icons'>
            <div className='left-icon' onClick={decrease}>
              <IconButton size='large' color='inherit'>
                <KeyboardArrowLeftIcon fontSize='inherit' />
              </IconButton>
            </div>
            <div className='right-icon' onClick={increase}>
              <IconButton size='large' color='inherit'>
                <KeyboardArrowRightIcon fontSize='inherit' />
              </IconButton>
            </div>
          </div>
          {slides.length > 0 ? (<img className='slide' src={slides[index]} alt='project slide' />) : null}
        </div>
      </div>
      <div className='exit-icon' onClick={back}>
        <IconButton size='large' color='inherit'>
          <CloseIcon fontSize='inherit' />
        </IconButton>
      </div>
    </div>
  )
}

export default SlideShow