import { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import SectionWrapper from './SectionWrapper'

const OPTIONS = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
  { value: 'next', label: 'Next.js' },
]

function DropdownSection({ number, title }) {
  const [selected, setSelected] = useState('')

  const selectedLabel = OPTIONS.find((option) => option.value === selected)?.label

  return (
    <SectionWrapper
      number={number}
      title={title}
      description="Select 드롭다운입니다. 선택한 값이 아래에 실시간으로 표시됩니다."
    >
      <FormControl fullWidth>
        <InputLabel id="dropdown-label">프레임워크</InputLabel>
        <Select
          labelId="dropdown-label"
          label="프레임워크"
          value={selected}
          onChange={(event) => setSelected(event.target.value)}
        >
          {OPTIONS.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Typography variant="body2" color="text.secondary" mt={1}>
        선택값: {selectedLabel || '(없음)'}
      </Typography>
    </SectionWrapper>
  )
}

export default DropdownSection
