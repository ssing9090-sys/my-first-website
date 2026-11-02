import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import SectionWrapper from './section-wrapper';

const NAV_LINKS = [
  { id: 'home', label: '홈', href: '#home', Icon: HomeIcon },
  { id: 'dashboard', label: '대시보드', href: '#dashboard', Icon: DashboardIcon },
  { id: 'about', label: '소개', href: '#about', Icon: InfoIcon },
  { id: 'contact', label: '연락처', href: '#contact', Icon: MailIcon },
];

const SUB_LINKS = [
  { id: 'settings', label: '설정', href: '#settings', Icon: SettingsIcon },
];

const ALL_LINKS = [...NAV_LINKS, ...SUB_LINKS];

/**
 * SidebarSection 컴포넌트
 * MUI Drawer 사이드바 데모. 버튼으로 열고 닫을 수 있고, 왼쪽/오른쪽 위치를 선택할 수 있습니다.
 * 사이드바 내부는 List + ListItem + ListItemButton(a 태그) 네비게이션 링크로 구성됩니다.
 *
 * Props:
 * @param {number} number - 섹션 순번 [Required]
 * @param {string} title - 섹션 제목 [Required]
 *
 * Example usage:
 * <SidebarSection number={ 14 } title="Sidebar" />
 */
function SidebarSection({ number, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const [anchor, setAnchor] = useState('left');
  const [activeId, setActiveId] = useState('home');

  const activeLink = ALL_LINKS.find((link) => link.id === activeId);

  /** 사이드바 열기/닫기 토글 */
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  /** 사이드바 닫기 (배경 클릭, ESC, X 버튼 공통) */
  const handleClose = () => {
    setIsOpen(false);
  };

  /** 위치 변경 (선택 해제는 무시) */
  const handleAnchorChange = (event, newAnchor) => {
    if (newAnchor) setAnchor(newAnchor);
  };

  /** 네비게이션 링크 클릭: 데모이므로 페이지 이동 대신 활성 링크만 변경 후 닫기 */
  const handleLinkClick = (id) => (event) => {
    event.preventDefault();
    setActiveId(id);
    setIsOpen(false);
  };

  /** 링크 목록 렌더링 */
  const renderLinks = (links) => (
    <List>
      { links.map(({ id, label, href, Icon }) => (
        <ListItem key={ id } disablePadding>
          <ListItemButton
            component="a"
            href={ href }
            selected={ id === activeId }
            onClick={ handleLinkClick(id) }
          >
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={ label } />
          </ListItemButton>
        </ListItem>
      )) }
    </List>
  );

  return (
    <SectionWrapper
      number={ number }
      title={ title }
      description="버튼으로 Drawer 사이드바를 열고 닫습니다. 사이드바가 나올 위치(왼쪽/오른쪽)를 선택할 수 있습니다."
    >
      <Box sx={ { display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 2 } }>
        <ToggleButtonGroup
          exclusive
          size="small"
          color="primary"
          value={ anchor }
          onChange={ handleAnchorChange }
          aria-label="사이드바 위치"
        >
          <ToggleButton value="left">왼쪽</ToggleButton>
          <ToggleButton value="right">오른쪽</ToggleButton>
        </ToggleButtonGroup>
        <Button variant="contained" startIcon={ <MenuIcon /> } onClick={ handleToggle }>
          사이드바 { isOpen ? '닫기' : '열기' }
        </Button>
      </Box>

      <Box
        sx={ {
          mt: 2,
          px: 2,
          py: 1.5,
          borderRadius: 1,
          bgcolor: 'grey.100',
          fontSize: '0.875rem',
        } }
      >
        현재 페이지: <strong>{ activeLink.label }</strong> ({ activeLink.href })
      </Box>

      <Drawer anchor={ anchor } open={ isOpen } onClose={ handleClose }>
        <Box component="nav" aria-label="사이드바 네비게이션" sx={ { width: { xs: 240, md: 280 } } }>
          <Box
            sx={ {
              px: 2,
              py: 1.5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            } }
          >
            <Box sx={ { fontWeight: 700, fontSize: '1.1rem' } }>MENU</Box>
            <IconButton aria-label="사이드바 닫기" onClick={ handleClose }>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          { renderLinks(NAV_LINKS) }
          <Divider />
          { renderLinks(SUB_LINKS) }
        </Box>
      </Drawer>
    </SectionWrapper>
  );
}

export default SidebarSection;
