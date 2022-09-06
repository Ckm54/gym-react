import { Box, Typography, Stack } from '@mui/material'
import React from 'react'
import HorizontalScrollBar from './HorizontalScrollBar'
import Loader from './Loader'

const SimilarExercises = ({equipment, muscle, targetMuscleExercises, equipmentExercises}) => {
  console.log({targetMuscleExercises});
  return (
    <Box sx={{mt: {lg: '100px', xs: '0'}}}>
      <Typography variant="h3" mb={5}>Similar <span style={{color: "#ff2625", textTransform: 'capitalize'}}>{muscle}</span> Exercises</Typography>
      <Stack direction="row" sx={{p: '2', position: 'relative'}}>
        {targetMuscleExercises.length ?
        <HorizontalScrollBar data={targetMuscleExercises} />
        :
        <Loader />
        }
      </Stack>

      <Typography variant="h3" mb={5}>Similar <span style={{color: "#ff2625", textTransform: 'capitalize'}}>{equipment}</span> Exercises</Typography>
      <Stack direction="row" sx={{p: '2', position: 'relative'}}>
        {equipmentExercises.length ?
        <HorizontalScrollBar data={equipmentExercises} />
        :
        <Loader />
        }
      </Stack>
    </Box>
  )
}

export default SimilarExercises