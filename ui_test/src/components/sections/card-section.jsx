import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import ForestIcon from '@mui/icons-material/Forest';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SectionWrapper from './section-wrapper';

const CARD_ITEMS = [
  {
    id: 'beach',
    title: '바다',
    description: '푸른 바다와 하얀 모래사장에서 여유로운 휴식을 즐겨보세요.',
    Icon: BeachAccessIcon,
    background: 'linear-gradient(135deg, #4fc3f7 0%, #1976d2 100%)',
  },
  {
    id: 'forest',
    title: '숲',
    description: '울창한 나무 사이를 걸으며 맑은 공기를 마셔보세요.',
    Icon: ForestIcon,
    background: 'linear-gradient(135deg, #81c784 0%, #2e7d32 100%)',
  },
  {
    id: 'city',
    title: '도시',
    description: '화려한 야경과 다양한 먹거리가 가득한 도시를 여행해보세요.',
    Icon: LocationCityIcon,
    background: 'linear-gradient(135deg, #ba68c8 0%, #6a1b9a 100%)',
  },
];

/**
 * CardSection 컴포넌트
 * MUI Card(CardMedia + CardContent + CardActions) 3개를 Grid 로 배치하고,
 * 마우스를 올리면 그림자(elevation)가 깊어지며 살짝 떠오르는 효과를 줍니다.
 *
 * Props:
 * @param {number} number - 섹션 순번 [Required]
 * @param {string} title - 섹션 제목 [Required]
 *
 * Example usage:
 * <CardSection number={ 9 } title="Card" />
 */
function CardSection({ number, title }) {
  return (
    <SectionWrapper
      number={ number }
      title={ title }
      description="Card 3개를 Grid 로 배치했습니다. 카드에 마우스를 올리면 그림자가 깊어집니다."
    >
      <Grid container spacing={ 2 }>
        { CARD_ITEMS.map(({ id, title: cardTitle, description, Icon, background }) => (
          <Grid key={ id } size={ { xs: 12, sm: 6, md: 4 } }>
            <Card
              elevation={ 1 }
              sx={ {
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'box-shadow 0.3s, transform 0.3s',
                '&:hover': {
                  boxShadow: 8,
                  transform: 'translateY(-4px)',
                },
              } }
            >
              <CardMedia
                component="div"
                role="img"
                aria-label={ cardTitle }
                sx={ {
                  height: 140,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background,
                  color: 'common.white',
                } }
              >
                <Icon sx={ { fontSize: 56 } } />
              </CardMedia>
              <CardContent sx={ { flexGrow: 1 } }>
                <Typography variant="h6" component="h3" gutterBottom>
                  { cardTitle }
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={ { lineHeight: 1.6 } }>
                  { description }
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">자세히 보기</Button>
                <Button size="small">공유</Button>
              </CardActions>
            </Card>
          </Grid>
        )) }
      </Grid>
    </SectionWrapper>
  );
}

export default CardSection;
