import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MenuIcon from '@mui/icons-material/Menu'
import SectionWrapper from './SectionWrapper'

const MENUS = ['홈', '소개', '서비스', '연락처']

function NavigationSection({ number, title }) {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleMenuClick = (menu) => {
    setAnchorEl(null)
    alert(`${menu} 메뉴를 클릭했습니다.`)
  }

  return (
    <SectionWrapper
      number={number}
      title={title}
      description="AppBar + Toolbar 내비게이션입니다. 화면이 좁아지면 햄버거 메뉴로 바뀝니다."
    >
      <AppBar position="static" sx={{ borderRadius: 1 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>

          {/* 데스크톱: 메뉴 버튼 나열 */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
            {MENUS.map((menu) => (
              <Button key={menu} color="inherit" onClick={() => handleMenuClick(menu)}>
                {menu}
              </Button>
            ))}
          </Box>

          {/* 모바일: 햄버거 메뉴 */}
          <IconButton
            color="inherit"
            aria-label="메뉴 열기"
            onClick={(event) => setAnchorEl(event.currentTarget)}
            sx={{ display: { xs: 'inline-flex', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            {MENUS.map((menu) => (
              <MenuItem key={menu} onClick={() => handleMenuClick(menu)}>
                {menu}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </SectionWrapper>
  )
}

export default NavigationSection
