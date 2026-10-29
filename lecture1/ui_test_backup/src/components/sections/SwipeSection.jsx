import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import SectionWrapper from './SectionWrapper'

// 외부 이미지 없이 동작하도록 그라데이션 슬라이드를 사용합니다.
const SLIDES = [
  { id: 1, label: '슬라이드 1', background: 'linear-gradient(135deg, #42a5f5, #1565c0)' },
  { id: 2, label: '슬라이드 2', background: 'linear-gradient(135deg, #ab47bc, #6a1b9a)' },
  { id: 3, label: '슬라이드 3', background: 'linear-gradient(135deg, #ffa726, #e65100)' },
  { id: 4, label: '슬라이드 4', background: 'linear-gradient(135deg, #66bb6a, #2e7d32)' },
]

function SwipeSection({ number, title }) {
  const [index, setIndex] = useState(0)
  const [lastSwipe, setLastSwipe] = useState('')

  const goPrev = () => setIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)
  const goNext = () => setIndex((prev) => (prev + 1) % SLIDES.length)

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setLastSwipe('왼쪽')
      goNext()
    },
    onSwipedRight: () => {
      setLastSwipe('오른쪽')
      goPrev()
    },
    trackMouse: true, // 마우스 드래그도 스와이프로 인식
    preventScrollOnSwipe: true,
  })

  return (
    <SectionWrapper
      number={number}
      title={title}
      description="터치하거나 마우스로 좌우로 끌어서 슬라이드를 넘길 수 있습니다."
    >
      <Box
        {...handlers}
        sx={{ overflow: 'hidden', borderRadius: 2, cursor: 'grab', userSelect: 'none', touchAction: 'pan-y' }}
      >
        <Box
          sx={{
            display: 'flex',
            transform: `translateX(-${index * 100}%)`,
            transition: 'transform 0.4s ease',
          }}
        >
          {SLIDES.map((slide) => (
            <Box
              key={slide.id}
              sx={{
                flex: '0 0 100%',
                height: { xs: 180, sm: 240 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: slide.background,
                color: '#fff',
              }}
            >
              <Typography variant="h5" fontWeight={600}>
                {slide.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Stack direction="row" alignItems="center" justifyContent="center" spacing={2} mt={2}>
        <IconButton aria-label="이전 슬라이드" onClick={goPrev}>
          <ChevronLeftIcon />
        </IconButton>
        <Typography variant="body2">
          {index + 1} / {SLIDES.length}
        </Typography>
        <IconButton aria-label="다음 슬라이드" onClick={goNext}>
          <ChevronRightIcon />
        </IconButton>
      </Stack>
      <Typography variant="body2" color="text.secondary" textAlign="center">
        마지막 스와이프 방향: {lastSwipe || '(없음)'}
      </Typography>
    </SectionWrapper>
  )
}

export default SwipeSection
