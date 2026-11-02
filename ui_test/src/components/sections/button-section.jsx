import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';
import SectionWrapper from './section-wrapper';

const VARIANTS = ['contained', 'outlined', 'text'];
const COLORS = ['primary', 'secondary', 'error'];

/**
 * ButtonSection 컴포넌트
 * MUI Button 의 variant(contained/outlined/text) × color(primary/secondary/error) 조합을 보여주고,
 * 버튼 클릭 시 Snackbar 알림창을 표시합니다.
 *
 * Props:
 * @param {number} number - 섹션 순번 [Required]
 * @param {string} title - 섹션 제목 [Required]
 *
 * Example usage:
 * <ButtonSection number={ 1 } title="Button" />
 */
function ButtonSection({ number, title }) {
  const [alertState, setAlertState] = useState({ isOpen: false, message: '', color: 'primary' });

  /** 버튼 클릭 시 알림창 열기 */
  const handleButtonClick = (variant, color) => {
    setAlertState({ isOpen: true, message: `${variant} / ${color} 버튼을 클릭했습니다.`, color });
  };

  /** 알림창 닫기 (바깥 클릭으로는 닫히지 않음) */
  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setAlertState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <SectionWrapper
      number={ number }
      title={ title }
      description="variant 3종 × color 3종 조합입니다. 버튼을 클릭하면 알림창이 표시됩니다."
    >
      <Grid container spacing={ 2 }>
        { VARIANTS.map((variant) => (
          <Grid key={ variant } size={ { xs: 12, md: 4 } }>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={ { mb: 1, fontFamily: 'monospace' } }
            >
              { variant }
            </Typography>
            <Box sx={ { display: 'flex', flexWrap: 'wrap', gap: 1 } }>
              { COLORS.map((color) => (
                <Button
                  key={ color }
                  variant={ variant }
                  color={ color }
                  onClick={ () => handleButtonClick(variant, color) }
                >
                  { color }
                </Button>
              )) }
            </Box>
          </Grid>
        )) }
      </Grid>

      <Snackbar
        open={ alertState.isOpen }
        autoHideDuration={ 2500 }
        onClose={ handleAlertClose }
        anchorOrigin={ { vertical: 'bottom', horizontal: 'center' } }
      >
        <Alert
          onClose={ handleAlertClose }
          severity={ alertState.color === 'error' ? 'error' : 'info' }
          variant="filled"
          sx={ { width: '100%' } }
        >
          { alertState.message }
        </Alert>
      </Snackbar>
    </SectionWrapper>
  );
}

export default ButtonSection;
