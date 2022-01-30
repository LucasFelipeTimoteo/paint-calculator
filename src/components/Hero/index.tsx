import React from 'react'
import AppDescription from '../../parts/Hero/AppDescription'
import HeroSVGBackground from '../../parts/Hero/HeroSVGBackground'
import StartCalculationButton from '../../parts/Hero/StartCalculationButton'
import TitleAndSub from '../../parts/Hero/TitleAndSub'
import useStyles from './styles'

export default function Hero() {
  const {
    heroWrapper,
    heroTextWrapper,
  } = useStyles()

  return (
    <div className={heroWrapper}>
      <HeroSVGBackground />

      <div className={heroTextWrapper}>
        <TitleAndSub />
        <AppDescription />
        <StartCalculationButton />
      </div>
    </div>
  )
}
