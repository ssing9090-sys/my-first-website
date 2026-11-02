import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import sections from './components/sections';

/**
 * App 컴포넌트
 * 네비게이션 없는 단일 페이지 레이아웃. sections 배열에 등록된 섹션을 순서대로 렌더링합니다.
 */
function App() {
  return (
    <Box
      component="main"
      sx={ {
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        bgcolor: 'background.default',
        py: { xs: 2, md: 4 },
      } }
    >
      <Container maxWidth="md" sx={ { px: { xs: 2, md: 3 } } }>
        <Box component="header" sx={ { mb: { xs: 3, md: 4 } } }>
          <Typography
            variant="h4"
            component="h1"
            sx={ { fontWeight: 700, fontSize: { xs: '1.75rem', md: '2.25rem' } } }
          >
            UI Test
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={ { mt: 1 } }>
            MUI UI 요소 16종을 섹션 단위로 하나씩 추가해 나가는 페이지입니다.
          </Typography>
        </Box>

        { sections.length === 0 ? (
          <Typography color="text.secondary" sx={ { textAlign: 'center', py: 8 } }>
            아직 추가된 섹션이 없습니다.
          </Typography>
        ) : (
          sections.map(({ id, title, Component }, index) => (
            <Component key={ id } number={ index + 1 } title={ title } />
          ))
        ) }
      </Container>
    </Box>
  );
}

export default App;
