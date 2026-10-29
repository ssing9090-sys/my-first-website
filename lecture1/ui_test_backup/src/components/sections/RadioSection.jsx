import { useState } from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Typography from '@mui/material/Typography'
import SectionWrapper from './SectionWrapper'

const OPTIONS = [
  { value: 'small', label: '소 (Small)' },
  { value: 'medium', label: '중 (Medium)' },
  { value: 'large', label: '대 (Large)' },
]

function RadioSection({ number, title }) {
  const [selected, setSelected] = useState('medium')

  const selectedLabel = OPTIONS.find((option) => option.value === selected)?.label

  return (
    <SectionWrapper
      number={number}
      title={title}
      description="하나만 선택할 수 있는 라디오 버튼입니다."
    >
      <FormControl>
        <FormLabel id="radio-label">사이즈</FormLabel>
        <RadioGroup
          aria-labelledby="radio-label"
          row
          value={selected}
          onChange={(event) => setSelected(event.target.value)}
        >
          {OPTIONS.map((option) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              label={option.label}
              control={<Radio />}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <Typography variant="body2" color="text.secondary" mt={1}>
        선택된 옵션: {selectedLabel}
      </Typography>
    </SectionWrapper>
  )
}

export default RadioSection
