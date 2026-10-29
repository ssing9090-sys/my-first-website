import { useState } from 'react'
import { keyframes } from '@emotion/react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Fade from '@mui/material/Fade'
import Grow from '@mui/material/Grow'
import Slide from '@mui/material/Slide'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import SectionWrapper from './SectionWrapper'

// CSS 애니메이션 (MUI 트랜지션이 끝난 뒤 계속 재생)
const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.08); }
`

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
`

const EFFECTS = [
  { id: 'fade', label: 'Fade + Pulse', Transition: Fade, animation: `${pulse} 1.2s ease-in-out infinite` },
  { id: 'grow', label: 'Grow + Spin', Transition: Grow, animation: `${spin} 3s linear infinite` },
  { id: 'slide', label: 'Slide + Bounce', Transition: Slide, animation: `${bounce} 0.8s ease-in-out infinite` },
]

const BOX_COLORS = { fade: 'primary.main', grow: 'secondary.main', slide: 'success.main' }

function AnimationSection({ number, title }) {
  const [visible, setVisible] = useState({ fade: false, grow: false, slide: false })

  const toggle = (id) => {
    setVisible((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <SectionWrapper
      number={number}
      title={title}
      description="MUI 트랜지션(Fade, Grow, Slide)으로 나타난 뒤 CSS 애니메이션이 이어서 재생됩니다."
    >
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mb={3}>
        {EFFECTS.map((effect) => (
          <Button
            key={effect.id}
            variant={visible[effect.id] ? 'contained' : 'outlined'}
            onClick={() => toggle(effect.id)}
          >
            {effect.label}
          </Button>
        ))}
      </Stack>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
          gap: 2,
          overflow: 'hidden',
        }}
      >
        {EFFECTS.map(({ id, label, Transition, animation }) => (
          <Box
            key={id}
            sx={{
              height: 140,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 1,
              borderColor: 'divider',
              borderRadius: 2,
            }}
          >
            <Transition in={visible[id]} {...(id === 'slide' && { direction: 'up' })}>
              <Box
                sx={{
                  width: 72,
                  height: 72,
                  borderRadius: 2,
                  bgcolor: BOX_COLORS[id],
                  animation,
                }}
              />
            </Transition>
            {!visible[id] && (
              <Typography variant="caption" color="text.secondary" sx={{ position: 'absolute' }}>
                {label}
              </Typography>
            )}
          </Box>
        ))}
      </Box>
    </SectionWrapper>
  )
}

export default AnimationSection
