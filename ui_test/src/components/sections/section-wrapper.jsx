import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

/**
 * SectionWrapper 컴포넌트
 * 모든 UI 섹션이 공통으로 사용하는 카드형 틀 (번호 + 제목 + 설명 + 본문)
 *
 * Props:
 * @param {number} number - 섹션 순번 (sections/index.js 배열 순서로 자동 부여) [Required]
 * @param {string} title - 섹션 제목 [Required]
 * @param {string} description - 섹션 설명 [Optional, 기본값: '']
 * @param {node} children - 섹션 본문 (UI 요소 데모) [Optional]
 *
 * Example usage:
 * <SectionWrapper number={ 1 } title="Button" description="버튼 예시">
 *   <Button>클릭</Button>
 * </SectionWrapper>
 */
function SectionWrapper({ number, title, description = '', children }) {
  return (
    <Paper
      component="section"
      variant="outlined"
      sx={ { p: { xs: 2, md: 3 }, mb: { xs: 2, md: 3 } } }
    >
      <Box sx={ { mb: 2 } }>
        <Typography variant="overline" color="primary" sx={ { fontWeight: 700 } }>
          { String(number).padStart(2, '0') }
        </Typography>
        <Typography variant="h5" component="h2" sx={ { fontWeight: 600 } }>
          { title }
        </Typography>
        { description && (
          <Typography variant="body2" color="text.secondary" sx={ { mt: 0.5 } }>
            { description }
          </Typography>
        ) }
      </Box>
      <Box>{ children }</Box>
    </Paper>
  );
}

export default SectionWrapper;
