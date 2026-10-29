import { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import SectionWrapper from './section-wrapper';

const FRUIT_OPTIONS = [
  { value: 'apple', label: '사과' },
  { value: 'banana', label: '바나나' },
  { value: 'grape', label: '포도' },
  { value: 'orange', label: '오렌지' },
  { value: 'strawberry', label: '딸기' },
  { value: 'watermelon', label: '수박' },
];

/**
 * DropdownSection 컴포넌트
 * MUI Select + MenuItem 으로 만든 단일 선택 드롭다운 데모.
 * 선택된 값을 드롭다운 옆에 실시간으로 표시합니다.
 *
 * Props:
 * @param {number} number - 섹션 순번 [Required]
 * @param {string} title - 섹션 제목 [Required]
 *
 * Example usage:
 * <DropdownSection number={ 4 } title="Dropdown" />
 */
function DropdownSection({ number, title }) {
  const [selectedValue, setSelectedValue] = useState('');

  const selectedOption = FRUIT_OPTIONS.find((option) => option.value === selectedValue);

  /** 선택값 갱신 */
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <SectionWrapper
      number={ number }
      title={ title }
      description="Select 로 옵션 6개 중 하나를 선택합니다. 선택한 값이 즉시 표시됩니다."
    >
      <Grid container spacing={ 2 } sx={ { alignItems: 'center' } }>
        <Grid size={ { xs: 12, md: 6 } }>
          <FormControl fullWidth>
            <InputLabel id="dropdown-section-label">과일 선택</InputLabel>
            <Select
              labelId="dropdown-section-label"
              id="dropdown-section-select"
              label="과일 선택"
              value={ selectedValue }
              onChange={ handleChange }
            >
              { FRUIT_OPTIONS.map((option) => (
                <MenuItem key={ option.value } value={ option.value }>
                  { option.label }
                </MenuItem>
              )) }
            </Select>
          </FormControl>
        </Grid>
        <Grid size={ { xs: 12, md: 6 } }>
          <Box
            sx={ {
              px: 2,
              py: 1.5,
              borderRadius: 1,
              bgcolor: 'grey.100',
              fontSize: '0.875rem',
              color: selectedOption ? 'text.primary' : 'text.disabled',
            } }
          >
            { selectedOption
              ? `선택한 값: ${selectedOption.label} (${selectedOption.value})`
              : '아직 선택하지 않았습니다' }
          </Box>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}

export default DropdownSection;
