import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import SectionWrapper from './section-wrapper';

const VARIANTS = ['standard', 'outlined', 'filled'];

/**
 * InputSection 컴포넌트
 * MUI TextField 의 variant(standard/outlined/filled) 3종을 보여주고,
 * 각 입력값을 필드 아래에 실시간으로 표시합니다.
 *
 * Props:
 * @param {number} number - 섹션 순번 [Required]
 * @param {string} title - 섹션 제목 [Required]
 *
 * Example usage:
 * <InputSection number={ 2 } title="Input" />
 */
function InputSection({ number, title }) {
  const [values, setValues] = useState({ standard: '', outlined: '', filled: '' });

  /** variant 별 입력값 갱신 */
  const handleChange = (variant) => (event) => {
    setValues((prev) => ({ ...prev, [variant]: event.target.value }));
  };

  return (
    <SectionWrapper
      number={ number }
      title={ title }
      description="variant 3종 TextField 입니다. 입력하는 즉시 아래에 값이 표시됩니다."
    >
      <Grid container spacing={ 2 }>
        { VARIANTS.map((variant) => (
          <Grid key={ variant } size={ { xs: 12, md: 4 } }>
            <TextField
              fullWidth
              variant={ variant }
              label={ variant }
              placeholder={ `${variant} 입력` }
              value={ values[variant] }
              onChange={ handleChange(variant) }
              slotProps={ { inputLabel: { shrink: true } } }
            />
            <Box
              sx={ {
                mt: 1,
                px: 1.5,
                py: 1,
                minHeight: 40,
                borderRadius: 1,
                bgcolor: 'grey.100',
                fontSize: '0.875rem',
                color: values[variant] ? 'text.primary' : 'text.disabled',
                wordBreak: 'break-all',
              } }
            >
              { values[variant] || '입력값이 여기에 표시됩니다' }
            </Box>
          </Grid>
        )) }
      </Grid>
    </SectionWrapper>
  );
}

export default InputSection;
