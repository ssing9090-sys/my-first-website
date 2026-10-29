import { useRef, useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Paper from '@mui/material/Paper';
import Zoom from '@mui/material/Zoom';
import SectionWrapper from './section-wrapper';

const SCROLL_ITEMS = Array.from({ length: 30 }, (_, index) => ({
  id: index + 1,
  title: `콘텐츠 아이템 ${index + 1}`,
  description: '스크롤 동작을 확인하기 위한 예시 콘텐츠입니다.',
}));

/** Top 버튼을 표시하기 시작하는 스크롤 위치(px) */
const SHOW_TOP_BUTTON_OFFSET = 100;

/**
 * ScrollSection 컴포넌트
 * 고정 높이(300px) Paper 스크롤 컨테이너 데모.
 * 일정 위치 이상 스크롤하면 우측 하단에 Top 이동 버튼이 나타나고, 클릭 시 맨 위로 부드럽게 이동합니다.
 *
 * Props:
 * @param {number} number - 섹션 순번 [Required]
 * @param {string} title - 섹션 제목 [Required]
 *
 * Example usage:
 * <ScrollSection number={ 11 } title="Scroll" />
 */
function ScrollSection({ number, title }) {
  const scrollRef = useRef(null);
  const [isTopButtonVisible, setIsTopButtonVisible] = useState(false);

  /** 스크롤 위치에 따라 Top 버튼 표시 여부 갱신 */
  const handleScroll = (event) => {
    setIsTopButtonVisible(event.currentTarget.scrollTop > SHOW_TOP_BUTTON_OFFSET);
  };

  /** 스크롤 컨테이너 맨 위로 이동 */
  const handleScrollToTop = () => {
    scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <SectionWrapper
      number={ number }
      title={ title }
      description="높이 300px 스크롤 영역입니다. 아래로 스크롤하면 Top 이동 버튼이 나타납니다."
    >
      <Box sx={ { position: 'relative' } }>
        <Paper
          ref={ scrollRef }
          variant="outlined"
          onScroll={ handleScroll }
          sx={ { height: 300, overflowY: 'auto', bgcolor: 'grey.50' } }
        >
          { SCROLL_ITEMS.map((item) => (
            <Box
              key={ item.id }
              sx={ {
                px: 2,
                py: 1.5,
                borderBottom: '1px solid',
                borderColor: 'divider',
                '&:last-of-type': { borderBottom: 'none' },
              } }
            >
              <Box sx={ { fontWeight: 500, fontSize: '0.95rem' } }>{ item.title }</Box>
              <Box sx={ { color: 'text.secondary', fontSize: '0.8rem', mt: 0.25 } }>
                { item.description }
              </Box>
            </Box>
          )) }
        </Paper>

        <Zoom in={ isTopButtonVisible }>
          <Fab
            color="primary"
            size="small"
            aria-label="맨 위로 이동"
            onClick={ handleScrollToTop }
            sx={ { position: 'absolute', right: 16, bottom: 16 } }
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </Zoom>
      </Box>
    </SectionWrapper>
  );
}

export default ScrollSection;
