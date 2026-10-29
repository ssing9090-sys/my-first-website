import Box from '@mui/material/Box'
import ButtonBase from '@mui/material/ButtonBase'
import Typography from '@mui/material/Typography'
import SectionWrapper from './SectionWrapper'

// 카드마다 :hover 시 적용할 sx 스타일
const EFFECTS = [
  {
    id: 'color',
    label: '색상 변화',
    sx: { '&:hover': { bgcolor: 'primary.main', color: 'primary.contrastText' } },
  },
  {
    id: 'scale',
    label: '크기 변화',
    sx: { '&:hover': { transform: 'scale(1.08)' } },
  },
  {
    id: 'shadow',
    label: '그림자',
    sx: { '&:hover': { boxShadow: 8 } },
  },
  {
    id: 'lift',
    label: '떠오르기',
    sx: { '&:hover': { transform: 'translateY(-8px)', boxShadow: 4 } },
  },
  {
    id: 'rotate',
    label: '회전',
    sx: { '&:hover': { transform: 'rotate(-4deg)' } },
  },
  {
    id: 'border',
    label: '테두리 강조',
    sx: { '&:hover': { borderColor: 'secondary.main', color: 'secondary.main', borderWidth: 3 } },
  },
]

function HoverSection({ number, title }) {
  return (
    <SectionWrapper
      number={number}
      title={title}
      description="카드에 마우스를 올리면 각기 다른 효과가 나타납니다."
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)' },
          gap: 2,
        }}
      >
        {EFFECTS.map((effect) => (
          <ButtonBase
            key={effect.id}
            focusRipple
            sx={{
              height: 100,
              borderRadius: 2,
              border: 1,
              borderColor: 'divider',
              bgcolor: 'background.paper',
              transition: 'all 0.3s ease',
              ...effect.sx,
            }}
          >
            <Typography fontWeight={500}>{effect.label}</Typography>
          </ButtonBase>
        ))}
      </Box>
    </SectionWrapper>
  )
}

export default HoverSection
