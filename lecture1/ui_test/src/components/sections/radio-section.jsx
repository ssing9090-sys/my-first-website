import { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import SectionWrapper from './section-wrapper';

const SIZE_OPTIONS = [
  { value: 'small', label: '스몰 (S)' },
  { value: 'medium', label: '미디엄 (M)' },
  { value: 'large', label: '라지 (L)' },
  { value: 'xlarge', label: '엑스라지 (XL)' },
];

/**
 * RadioSection 컴포넌트
 * MUI Radio + RadioGroup 단일 선택 데모.
 * FormControlLabel 로 각 옵션의 레이블을 설정하고, 선택된 옵션을 아래에 표시합니다.
 *
 * Props:
 * @param {number} number - 섹션 순번 [Required]
 * @param {string} title - 섹션 제목 [Required]
 *
 * Example usage:
 * <RadioSection number={ 6 } title="Radio" />
 */
function RadioSection({ number, title }) {
  const [selectedValue, setSelectedValue] = useState('');

  const selectedOption = SIZE_OPTIONS.find((option) => option.value === selectedValue);

  /** 선택값 갱신 */
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <SectionWrapper
      number={ number }
      title={ title }
      description="RadioGroup 으로 사이즈 4개 중 하나만 선택할 수 있습니다."
    >
      <FormControl>
        <FormLabel id="radio-section-label">사이즈 선택</FormLabel>
        <RadioGroup
          aria-labelledby="radio-section-label"
          name="radio-section-size"
          value={ selectedValue }
          onChange={ handleChange }
          sx={ { flexDirection: { xs: 'column', md: 'row' } } }
        >
          { SIZE_OPTIONS.map((option) => (
            <FormControlLabel
              key={ option.value }
              value={ option.value }
              label={ option.label }
              control={ <Radio /> }
            />
          )) }
        </RadioGroup>
      </FormControl>
      <Box
        sx={ {
          mt: 2,
          px: 2,
          py: 1.5,
          borderRadius: 1,
          bgcolor: 'grey.100',
          fontSize: '0.875rem',
          color: selectedOption ? 'text.primary' : 'text.disabled',
        } }
      >
        { selectedOption ? `선택한 옵션: ${selectedOption.label}` : '아직 선택하지 않았습니다' }
      </Box>
    </SectionWrapper>
  );
}

export default RadioSection;
