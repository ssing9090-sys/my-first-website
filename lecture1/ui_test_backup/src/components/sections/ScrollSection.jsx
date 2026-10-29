import { useRef, useState } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Fab from '@mui/material/Fab'
import Zoom from '@mui/material/Zoom'
import Typography from '@mui/material/Typography'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import SectionWrapper from './SectionWrapper'

const ITEMS = Array.from({ length: 30 }, (_, index) => index + 1)
const SHOW_TOP_BUTTON_AT = 100 // 이만큼(px) 내려가면 Top 버튼 표시

function ScrollSection({ number, title }) {
  const containerRef = useRef(null)
  const [scrollTop, setScrollTop] = useState(0)

  const handleScroll = (event) => {
    setScrollTop(event.currentTarget.scrollTop)
  }

  const scrollToTop = () => {
    containerRef.current.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <SectionWrapper
      number={number}
      title={title}
      description="높이 300px 스크롤 영역입니다. 조금 내려가면 오른쪽 아래에 Top 버튼이 나타납니다."
    >
      <Box sx={{ position: 'relative' }}>
        <Paper
          ref={containerRef}
          variant="outlined"
          onScroll={handleScroll}
          sx={{ height: 300, overflowY: 'auto', p: 2 }}
        >
          {ITEMS.map((item) => (
            <Typography key={item} sx={{ py: 1, borderBottom: 1, borderColor: 'divider' }}>
              콘텐츠 항목 {item}
            </Typography>
          ))}
        </Paper>
        <Zoom in={scrollTop > SHOW_TOP_BUTTON_AT}>
          <Fab
            size="small"
            color="primary"
            aria-label="맨 위로 이동"
            onClick={scrollToTop}
            sx={{ position: 'absolute', right: 16, bottom: 16 }}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </Zoom>
      </Box>
      <Typography variant="body2" color="text.secondary" mt={1}>
        스크롤 위치: {Math.round(scrollTop)}px
      </Typography>
    </SectionWrapper>
  )
}

export default ScrollSection
