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
        tempSet = {
          ...FreeNOSSlides, 
          ...{v1: 'kbUgqW4eEvI', v2: 'Zh_9kIh7R1k', v3: 'dJWRucVLNSA'}
        }
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
        <div className='slide-glass-tile'>
          <div className='slide-glass'></div>
          <div className='slideshow'>
            <div className='slide-icons'>
              <div className='left-icon' onClick={decrease}>
                <IconButton size='large' color='inherit' sx={{ '&:hover': { backgroundColor: 'rgba(161, 153, 237, 0.4)' } }}>
                  <KeyboardArrowLeftIcon fontSize='inherit' />
                </IconButton>
              </div>
              <div className='right-icon' onClick={increase}>
                <IconButton size='large' color='inherit' sx={{ '&:hover': { backgroundColor: 'rgba(161, 153, 237, 0.4)' } }}>
                  <KeyboardArrowRightIcon fontSize='inherit' />
                </IconButton>
              </div>
            </div>
            {(locate.state.set === 'FreeNOS' && index === 0) || locate.state.set !== 'FreeNOS' ? 
              (<img className='slide' src={slides[index]} alt='project slide' />) :
              (<iframe
                className='slide'
                src={`https://www.youtube.com/embed/${slides[index]}`}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                title='Embedded youtube'
                />)
              }
          </div>
        </div>
      </div>
      <div className='exit-icon' onClick={back}>
        <IconButton size='large' color='inherit' sx={{ '&:hover': { backgroundColor: 'rgba(211, 39, 62, 0.4)' } }}>
          <CloseIcon fontSize='inherit' />
        </IconButton>
      </div>
    </div>
  )
}

export default SlideShow