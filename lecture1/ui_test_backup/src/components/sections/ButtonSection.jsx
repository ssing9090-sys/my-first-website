import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import SectionWrapper from './SectionWrapper'

const VARIANTS = ['contained', 'outlined', 'text']
const COLORS = ['primary', 'secondary', 'error']

function ButtonSection({ number, title }) {
  const handleClick = (variant, color) => {
    alert(`${variant} / ${color} 버튼을 클릭했습니다.`)
  }

  return (
    <SectionWrapper
      number={number}
      title={title}
      description="variant 3종 × color 3종 조합입니다. 버튼을 클릭하면 알림창이 표시됩니다."
    >
      <Stack spacing={2}>
        {VARIANTS.map((variant) => (
          <Stack
            key={variant}
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            alignItems={{ xs: 'stretch', sm: 'center' }}
          >
            <Typography variant="body2" color="text.secondary" width={90}>
              {variant}
            </Typography>
            {COLORS.map((color) => (
              <Button
                key={color}
                variant={variant}
                color={color}
                onClick={() => handleClick(variant, color)}
              >
                {color}
              </Button>
            ))}
          </Stack>
        ))}
      </Stack>
    </SectionWrapper>
  )
}

export default ButtonSection
