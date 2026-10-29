import { useState } from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import SectionWrapper from './SectionWrapper'

const CARDS = [
  {
    id: 1,
    title: '디자인',
    text: '사용자 경험을 고려한 깔끔한 인터페이스를 설계합니다.',
    background: 'linear-gradient(135deg, #42a5f5, #1565c0)',
  },
  {
    id: 2,
    title: '개발',
    text: 'React와 MUI로 빠르고 안정적인 화면을 구현합니다.',
    background: 'linear-gradient(135deg, #ef5350, #ad1457)',
  },
  {
    id: 3,
    title: '배포',
    text: '자동화된 파이프라인으로 언제든 쉽게 배포합니다.',
    background: 'linear-gradient(135deg, #66bb6a, #2e7d32)',
  },
]

function CardSection({ number, title }) {
  const [hovered, setHovered] = useState(null)

  return (
    <SectionWrapper
      number={number}
      title={title}
      description="Card 3개를 Grid로 배치했습니다. 마우스를 올리면 그림자(elevation)가 커집니다."
    >
      <Grid container spacing={2}>
        {CARDS.map((card) => (
          <Grid key={card.id} size={{ xs: 12, sm: 4 }}>
            <Card
              elevation={hovered === card.id ? 8 : 1}
              onMouseEnter={() => setHovered(card.id)}
              onMouseLeave={() => setHovered(null)}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'box-shadow 0.3s',
              }}
            >
              <CardMedia component="div" sx={{ height: 120, background: card.background }} />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="h3" gutterBottom>
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.text}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">자세히 보기</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  )
}

export default CardSection
