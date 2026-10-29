import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SectionWrapper from './section-wrapper';

/** 모든 호버 카드 공통 스타일 */
const BASE_CARD_SX = {
  position: 'relative',
  height: 120,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 0.5,
  overflow: 'hidden',
  borderRadius: 2,
  border: '1px solid',
  borderColor: 'divider',
  bgcolor: 'background.paper',
  cursor: 'pointer',
  userSelect: 'none',
  transition: 'all 0.3s ease',
};

const HOVER_EFFECTS = [
  {
    id: 'color',
    label: '색상 변화',
    hint: '배경·글자색 반전',
    sx: {
      '&:hover': { bgcolor: 'primary.main', color: 'primary.contrastText', borderColor: 'primary.main' },
    },
  },
  {
    id: 'scale',
    label: '크기 변화',
    hint: '1.08배 확대',
    sx: {
      '&:hover': { transform: 'scale(1.08)' },
    },
  },
  {
    id: 'shadow',
    label: '그림자 효과',
    hint: '떠오르며 그림자',
    sx: {
      '&:hover': { transform: 'translateY(-6px)', boxShadow: 8, borderColor: 'transparent' },
    },
  },
  {
    id: 'rotate',
    label: '회전',
    hint: '살짝 기울어짐',
    sx: {
      '&:hover': { transform: 'rotate(-4deg) scale(1.03)' },
    },
  },
  {
    id: 'border',
    label: '테두리 강조',
    hint: '테두리 발광',
    sx: {
      '&:hover': {
        borderColor: 'secondary.main',
        boxShadow: (theme) => `0 0 0 3px ${theme.palette.secondary.light}`,
        color: 'secondary.main',
      },
    },
  },
  {
    id: 'fill',
    label: '배경 채우기',
    hint: '아래에서 채워짐',
    sx: {
      zIndex: 0,
      '&::before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        zIndex: -1,
        background: 'linear-gradient(135deg, #ff9800 0%, #f44336 100%)',
        transform: 'translateY(100%)',
        transition: 'transform 0.3s ease',
      },
      '&:hover': { color: 'common.white', borderColor: 'transparent' },
      '&:hover::before': { transform: 'translateY(0)' },
    },
  },
];

/**
 * HoverSection 컴포넌트
 * 일반 div(Box) 카드 6개에 서로 다른 CSS 호버 효과(색상, 크기, 그림자, 회전, 테두리, 배경 채우기)를 적용한 데모.
 *
 * Props:
 * @param {number} number - 섹션 순번 [Required]
 * @param {string} title - 섹션 제목 [Required]
 *
 * Example usage:
 * <HoverSection number={ 15 } title="Hover" />
 */
function HoverSection({ number, title }) {
  return (
    <SectionWrapper
      number={ number }
      title={ title }
      description="카드 위에 마우스를 올려보세요. 카드마다 다른 호버 효과가 적용되어 있습니다."
    >
      <Grid container spacing={ 2 }>
        { HOVER_EFFECTS.map((effect) => (
          <Grid key={ effect.id } size={ { xs: 6, md: 4 } }>
            <Box sx={ { ...BASE_CARD_SX, ...effect.sx } }>
              <Box sx={ { fontWeight: 600, fontSize: { xs: '0.95rem', md: '1rem' } } }>
                { effect.label }
              </Box>
              <Box sx={ { fontSize: '0.75rem', opacity: 0.7 } }>{ effect.hint }</Box>
            </Box>
          </Grid>
        )) }
      </Grid>
    </SectionWrapper>
  );
}

export default HoverSection;
