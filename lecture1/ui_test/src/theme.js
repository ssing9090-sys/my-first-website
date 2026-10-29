import { createTheme } from '@mui/material/styles';

/**
 * 앱 전역 MUI 테마
 * 섹션/UI 컴포넌트에서 색상·간격·모서리 값을 이 테마 기준으로 사용합니다.
 */
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',
    },
    background: {
      default: '#f5f7fa',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
});

export default theme;
