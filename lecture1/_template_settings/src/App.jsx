import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

/**
 * App 컴포넌트
 *
 * 전체 페이지 중앙정렬 패턴(design-system.md 5.2)을 적용한 기본 레이아웃.
 *
 * Props: 없음
 *
 * Example usage:
 * <App />
 */
function App() {
  return (
    <Box sx={ {
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      py: { xs: 2, md: 4 },
    } }>
      <Container maxWidth="md" sx={ { py: 4, px: { xs: 2, md: 3 } } }>
        <Typography variant="h1" sx={ { textAlign: 'center' } }>
          새 프로젝트
        </Typography>
      </Container>
    </Box>
  );
}

export default App;
