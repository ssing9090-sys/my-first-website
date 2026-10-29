import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Alert from '@mui/material/Alert';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SectionWrapper from './section-wrapper';

const MENU_ITEMS = ['홈', '소개', '서비스', '연락처'];

/**
 * NavigationSection 컴포넌트
 * MUI AppBar + Toolbar 로 만든 네비게이션 바 데모.
 * 데스크톱(md 이상)에서는 메뉴 버튼을 가로로, 모바일에서는 햄버거 아이콘 드롭다운으로 표시하며
 * 메뉴 클릭 시 Snackbar 알림창으로 메뉴명을 보여줍니다.
 *
 * Props:
 * @param {number} number - 섹션 순번 [Required]
 * @param {string} title - 섹션 제목 [Required]
 *
 * Example usage:
 * <NavigationSection number={ 3 } title="Navigation" />
 */
function NavigationSection({ number, title }) {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [alertState, setAlertState] = useState({ isOpen: false, message: '' });

  /** 햄버거 메뉴 열기 */
  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  /** 햄버거 메뉴 닫기 */
  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  /** 메뉴 클릭 시 메뉴명 알림 (햄버거 메뉴가 열려 있으면 함께 닫음) */
  const handleItemClick = (item) => {
    setMenuAnchorEl(null);
    setAlertState({ isOpen: true, message: `'${item}' 메뉴를 클릭했습니다.` });
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
      description="AppBar + Toolbar 네비게이션입니다. 화면 폭을 줄이면(900px 미만) 햄버거 메뉴로 바뀝니다."
    >
      <AppBar position="static" sx={ { borderRadius: 1 } }>
        <Toolbar>
          <Typography variant="h6" component="div" sx={ { flexGrow: 1, fontWeight: 700 } }>
            LOGO
          </Typography>

          { /* 데스크톱: 가로 메뉴 */ }
          <Box sx={ { display: { xs: 'none', md: 'flex' }, gap: 1 } }>
            { MENU_ITEMS.map((item) => (
              <Button key={ item } color="inherit" onClick={ () => handleItemClick(item) }>
                { item }
              </Button>
            )) }
          </Box>

          { /* 모바일: 햄버거 메뉴 */ }
          <IconButton
            color="inherit"
            edge="end"
            aria-label="메뉴 열기"
            aria-controls={ menuAnchorEl ? 'navigation-section-menu' : undefined }
            aria-haspopup="true"
            onClick={ handleMenuOpen }
            sx={ { display: { xs: 'inline-flex', md: 'none' } } }
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="navigation-section-menu"
            anchorEl={ menuAnchorEl }
            open={ Boolean(menuAnchorEl) }
            onClose={ handleMenuClose }
            anchorOrigin={ { vertical: 'bottom', horizontal: 'right' } }
            transformOrigin={ { vertical: 'top', horizontal: 'right' } }
          >
            { MENU_ITEMS.map((item) => (
              <MenuItem key={ item } onClick={ () => handleItemClick(item) }>
                { item }
              </MenuItem>
            )) }
          </Menu>
        </Toolbar>
      </AppBar>

      <Snackbar
        open={ alertState.isOpen }
        autoHideDuration={ 2500 }
        onClose={ handleAlertClose }
        anchorOrigin={ { vertical: 'bottom', horizontal: 'center' } }
      >
        <Alert onClose={ handleAlertClose } severity="info" variant="filled" sx={ { width: '100%' } }>
          { alertState.message }
        </Alert>
      </Snackbar>
    </SectionWrapper>
  );
}

export default NavigationSection;
