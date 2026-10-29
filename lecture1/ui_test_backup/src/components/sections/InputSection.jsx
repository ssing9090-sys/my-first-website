import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import SectionWrapper from './SectionWrapper'

const VARIANTS = ['standard', 'outlined', 'filled']

function InputSection({ number, title }) {
  const [values, setValues] = useState({ standard: '', outlined: '', filled: '' })

  const handleChange = (variant) => (event) => {
    setValues((prev) => ({ ...prev, [variant]: event.target.value }))
  }

  return (
    <SectionWrapper
      number={number}
      title={title}
      description="variant 3종 TextField입니다. 입력한 값이 아래에 실시간으로 표시됩니다."
    >
      <Stack spacing={3}>
        {VARIANTS.map((variant) => (
          <Stack key={variant} spacing={1}>
            <TextField
              variant={variant}
              label={`${variant} 입력`}
              placeholder="텍스트를 입력하세요"
              value={values[variant]}
              onChange={handleChange(variant)}
              fullWidth
            />
            <Typography variant="body2" color="text.secondary">
              입력값: {values[variant] || '(없음)'}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </SectionWrapper>
  )
}

export default InputSection
