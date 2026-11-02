import { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import SectionWrapper from './section-wrapper';

const MARKS = [0, 25, 50, 75, 100].map((value) => ({ value, label: String(value) }));

/**
 * SliderSection 컴포넌트
 * MUI Slider 데모. 0~100 범위, 25 단위 구간 표시(marks)와 현재 값 실시간 표시를 포함합니다.
 *
 * Props:
 * @param {number} number - 섹션 순번 [Required]
 * @param {string} title - 섹션 제목 [Required]
 *
 * Example usage:
 * <SliderSection number={ 7 } title="Slider" />
 */
function SliderSection({ number, title }) {
  const [sliderValue, setSliderValue] = useState(50);

  /** 슬라이더 값 갱신 */
  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  return (
    <SectionWrapper
      number={ number }
      title={ title }
      description="0~100 범위 슬라이더입니다. 0·25·50·75·100 위치에 구간이 표시됩니다."
    >
      <Box sx={ { px: { xs: 1, md: 2 } } }>
        <Slider
          aria-label="슬라이더 값"
          min={ 0 }
          max={ 100 }
          value={ sliderValue }
          onChange={ handleChange }
          marks={ MARKS }
          valueLabelDisplay="auto"
        />
      </Box>
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
        현재 값: <strong>{ sliderValue }</strong>
      </Box>
    </SectionWrapper>
  );
}

export default SliderSection;
