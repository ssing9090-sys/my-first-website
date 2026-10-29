import { useState } from 'react'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import SectionWrapper from './SectionWrapper'

const ITEMS = ['사과', '바나나', '딸기', '포도']

function CheckboxSection({ number, title }) {
  const [checked, setChecked] = useState([])

  const allChecked = checked.length === ITEMS.length
  const someChecked = checked.length > 0 && !allChecked

  const handleToggle = (item) => {
    setChecked((prev) =>
      prev.includes(item) ? prev.filter((value) => value !== item) : [...prev, item],
    )
  }

  const handleToggleAll = () => {
    setChecked(allChecked ? [] : ITEMS)
  }

  return (
    <SectionWrapper
      number={number}
      title={title}
      description="여러 항목을 함께 선택할 수 있는 체크박스입니다. 전체 선택/해제도 할 수 있습니다."
    >
      <FormControlLabel
        label="전체 선택"
        control={
          <Checkbox
            checked={allChecked}
            indeterminate={someChecked}
            onChange={handleToggleAll}
          />
        }
      />
      <Divider sx={{ my: 1 }} />
      <FormGroup sx={{ pl: 3 }}>
        {ITEMS.map((item) => (
          <FormControlLabel
            key={item}
            label={item}
            control={
              <Checkbox checked={checked.includes(item)} onChange={() => handleToggle(item)} />
            }
          />
        ))}
      </FormGroup>
      <Typography variant="body2" color="text.secondary" mt={1}>
        선택된 항목: {checked.length}개 / {ITEMS.length}개
      </Typography>
    </SectionWrapper>
  )
}

export default CheckboxSection
