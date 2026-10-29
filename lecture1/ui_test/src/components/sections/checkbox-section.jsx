import { useState } from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import SectionWrapper from './section-wrapper';

const HOBBY_OPTIONS = [
  { value: 'reading', label: '독서' },
  { value: 'music', label: '음악 감상' },
  { value: 'sports', label: '운동' },
  { value: 'travel', label: '여행' },
  { value: 'cooking', label: '요리' },
];

/**
 * CheckboxSection 컴포넌트
 * MUI Checkbox 다중 선택 데모.
 * 전체 선택/해제 체크박스(일부 선택 시 indeterminate 상태)와 선택 개수 실시간 표시를 포함합니다.
 *
 * Props:
 * @param {number} number - 섹션 순번 [Required]
 * @param {string} title - 섹션 제목 [Required]
 *
 * Example usage:
 * <CheckboxSection number={ 5 } title="Checkbox" />
 */
function CheckboxSection({ number, title }) {
  const [checkedValues, setCheckedValues] = useState([]);

  const checkedCount = checkedValues.length;
  const isAllChecked = checkedCount === HOBBY_OPTIONS.length;
  const isPartiallyChecked = checkedCount > 0 && !isAllChecked;

  /** 전체 선택/해제 */
  const handleToggleAll = (event) => {
    setCheckedValues(event.target.checked ? HOBBY_OPTIONS.map((option) => option.value) : []);
  };

  /** 개별 항목 선택/해제 */
  const handleToggle = (value) => (event) => {
    setCheckedValues((prev) => (
      event.target.checked ? [...prev, value] : prev.filter((item) => item !== value)
    ));
  };

  return (
    <SectionWrapper
      number={ number }
      title={ title }
      description="취미를 여러 개 선택할 수 있습니다. 맨 위 체크박스로 전체 선택/해제가 가능합니다."
    >
      <FormControlLabel
        label="전체 선택"
        control={ (
          <Checkbox
            checked={ isAllChecked }
            indeterminate={ isPartiallyChecked }
            onChange={ handleToggleAll }
          />
        ) }
        sx={ { '& .MuiFormControlLabel-label': { fontWeight: 600 } } }
      />
      <Divider sx={ { my: 1 } } />
      <FormGroup sx={ { flexDirection: { xs: 'column', md: 'row' }, pl: { xs: 2, md: 0 } } }>
        { HOBBY_OPTIONS.map((option) => (
          <FormControlLabel
            key={ option.value }
            label={ option.label }
            control={ (
              <Checkbox
                checked={ checkedValues.includes(option.value) }
                onChange={ handleToggle(option.value) }
              />
            ) }
          />
        )) }
      </FormGroup>
      <Box
        sx={ {
          mt: 2,
          px: 2,
          py: 1.5,
          borderRadius: 1,
          bgcolor: 'grey.100',
          fontSize: '0.875rem',
        } }
      >
        선택된 항목: <strong>{ checkedCount }</strong> / { HOBBY_OPTIONS.length }개
      </Box>
    </SectionWrapper>
  );
}

export default CheckboxSection;
