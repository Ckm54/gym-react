import { Box } from '@mui/material'
import React from 'react'
import Exercises from '../components/Exercises'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'

const Home = () => {
  const[exercises, setExercises] = React.useState([]);
  const[bodyPart, setBodyPart] = React.useState('all')

  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
    </Box>
  )
}

export default Home