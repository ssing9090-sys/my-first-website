import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FilterHdrIcon from '@mui/icons-material/FilterHdr';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import SailingIcon from '@mui/icons-material/Sailing';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SectionWrapper from './section-wrapper';

const SLIDES = [
  { id: 'sun', label: '맑은 하늘', Icon: WbSunnyIcon, background: 'linear-gradient(135deg, #ffd54f 0%, #ff8f00 100%)' },
  { id: 'mountain', label: '산', Icon: FilterHdrIcon, background: 'linear-gradient(135deg, #81c784 0%, #1b5e20 100%)' },
  { id: 'sea', label: '바다', Icon: SailingIcon, background: 'linear-gradient(135deg, #4fc3f7 0%, #01579b 100%)' },
  { id: 'snow', label: '눈', Icon: AcUnitIcon, background: 'linear-gradient(135deg, #b3e5fc 0%, #5c6bc0 100%)' },
  { id: 'night', label: '밤하늘', Icon: NightsStayIcon, background: 'linear-gradient(135deg, #7e57c2 0%, #1a237e 100%)' },
];

const DIRECTION_LABELS = { Left: '← 왼쪽', Right: '오른쪽 →' };

/**
 * SwipeSection 컴포넌트
 * react-swipeable 의 useSwipeable 훅으로 만든 이미지 슬라이더 데모.
 * 터치/마우스로 좌우 스와이프하거나 이전/다음 버튼으로 이동하며, 현재 슬라이드 번호와 마지막 스와이프 방향을 표시합니다.
 *
 * Props:
 * @param {number} number - 섹션 순번 [Required]
 * @param {string} title - 섹션 제목 [Required]
 *
 * Example usage:
 * <SwipeSection number={ 16 } title="Swipe" />
 */
function SwipeSection({ number, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [lastDirection, setLastDirection] = useState(null);

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === SLIDES.length - 1;

  /** 이전 슬라이드로 이동 */
  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  /** 다음 슬라이드로 이동 */
  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, SLIDES.length - 1));
  };

  const swipeHandlers = useSwipeable({
    onSwiping: ({ deltaX }) => setDragOffset(deltaX),
    onSwiped: ({ dir }) => {
      setDragOffset(0);
      if (dir === 'Left' || dir === 'Right') setLastDirection(dir);
    },
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
    preventScrollOnSwipe: true,
  });

  return (
    <SectionWrapper
      number={ number }
      title={ title }
      description="이미지를 손가락이나 마우스로 좌우로 끌어보세요. 이전/다음 버튼으로도 이동할 수 있습니다."
    >
      <Box
        { ...swipeHandlers }
        sx={ {
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 2,
          cursor: 'grab',
          userSelect: 'none',
          touchAction: 'pan-y',
          '&:active': { cursor: 'grabbing' },
        } }
      >
        <Box
          sx={ {
            display: 'flex',
            transform: `translateX(calc(${-currentIndex * 100}% + ${dragOffset}px))`,
            transition: dragOffset === 0 ? 'transform 0.35s ease' : 'none',
          } }
        >
          { SLIDES.map(({ id, label, Icon, background }) => (
            <Box
              key={ id }
              role="img"
              aria-label={ label }
              sx={ {
                flex: '0 0 100%',
                height: { xs: 180, md: 240 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
                background,
                color: 'common.white',
              } }
            >
              <Icon sx={ { fontSize: { xs: 56, md: 72 } } } />
              <Box sx={ { fontWeight: 600, fontSize: { xs: '1.1rem', md: '1.3rem' } } }>{ label }</Box>
            </Box>
          )) }
        </Box>

        <Box
          sx={ {
            position: 'absolute',
            top: 12,
            right: 12,
            px: 1.25,
            py: 0.25,
            borderRadius: 4,
            bgcolor: 'rgba(0, 0, 0, 0.45)',
            color: 'common.white',
            fontSize: '0.8rem',
          } }
        >
          { currentIndex + 1 } / { SLIDES.length }
        </Box>
      </Box>

      <Box sx={ { mt: 1.5, display: 'flex', justifyContent: 'center', gap: 1 } }>
        { SLIDES.map((slide, index) => (
          <Box
            key={ slide.id }
            sx={ {
              width: index === currentIndex ? 20 : 8,
              height: 8,
              borderRadius: 4,
              bgcolor: index === currentIndex ? 'primary.main' : 'grey.300',
              transition: 'all 0.3s ease',
            } }
          />
        )) }
      </Box>

      <Box sx={ { mt: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1 } }>
        <Button variant="outlined" startIcon={ <ChevronLeftIcon /> } onClick={ handlePrev } disabled={ isFirst }>
          이전
        </Button>
        <Box sx={ { fontSize: '0.85rem', color: 'text.secondary', textAlign: 'center' } }>
          { lastDirection ? `감지된 스와이프: ${DIRECTION_LABELS[lastDirection]}` : '스와이프 대기 중' }
        </Box>
        <Button variant="outlined" endIcon={ <ChevronRightIcon /> } onClick={ handleNext } disabled={ isLast }>
          다음
        </Button>
      </Box>
    </SectionWrapper>
  );
}

export default SwipeSection;
