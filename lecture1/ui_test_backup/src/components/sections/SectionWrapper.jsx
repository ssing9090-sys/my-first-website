import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

// 모든 섹션이 공통으로 사용하는 레이아웃 (번호 + 제목 + 내용)
function SectionWrapper({ number, title, description, children }) {
  return (
    <Paper component="section" variant="outlined" className="section">
      <Typography variant="overline" color="primary">
        {String(number).padStart(2, '0')}
      </Typography>
      <Typography variant="h5" component="h2" fontWeight={600}>
        {title}
      </Typography>
      {description && (
        <Typography variant="body2" color="text.secondary" mt={0.5}>
          {description}
        </Typography>
      )}
      <Divider sx={{ my: 2 }} />
      {children}
    </Paper>
  )
}

export default SectionWrapper
