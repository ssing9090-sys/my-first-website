import { useState } from 'react'
import Slider from '@mui/material/Slider'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SectionWrapper from './SectionWrapper'

const MARKS = [0, 25, 50, 75, 100].map((value) => ({ value, label: String(value) }))

function SliderSection({ number, title }) {
  const [value, setValue] = useState(50)

  return (
    <SectionWrapper
      number={number}
      title={title}
      description="0부터 100까지 조절하는 슬라이더입니다. 25 단위로 구간이 표시됩니다."
    >
      <Box sx={{ px: 1 }}>
        <Slider
          min={0}
          max={100}
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
          marks={MARKS}
          valueLabelDisplay="auto"
          aria-label="슬라이더 값"
        />
      </Box>
      <Typography variant="body2" color="text.secondary" mt={1}>
        현재 값: {value}
      </Typography>
    </SectionWrapper>
  )
}

export default SliderSection
