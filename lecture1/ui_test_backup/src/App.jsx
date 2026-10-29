import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import sections from './components/sections'

function App() {
  return (
    <Box component="main" className="app">
      <Container maxWidth="md">
        <Box component="header" className="app-header">
          <Typography variant="h4" component="h1" fontWeight={700}>
            UI Test
          </Typography>
          <Typography variant="body1" color="text.secondary">
            MUI UI 요소 16종을 섹션 단위로 하나씩 추가해 나가는 페이지입니다.
          </Typography>
        </Box>

        {sections.length === 0 ? (
          <Typography color="text.secondary" className="app-empty">
            아직 추가된 섹션이 없습니다.
          </Typography>
        ) : (
          sections.map(({ id, title, Component }, index) => (
            <Component key={id} number={index + 1} title={title} />
          ))
        )}
      </Container>
    </Box>
  )
}

export default App
