import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Stack from '@mui/material/Stack'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Typography from '@mui/material/Typography'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import BuildIcon from '@mui/icons-material/Build'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import SectionWrapper from './SectionWrapper'

const NAV_LINKS = [
  { id: 'home', label: '홈', href: '#home', Icon: HomeIcon },
  { id: 'about', label: '소개', href: '#about', Icon: InfoIcon },
  { id: 'services', label: '서비스', href: '#services', Icon: BuildIcon },
  { id: 'contact', label: '연락처', href: '#contact', Icon: ContactMailIcon },
]

function SidebarSection({ number, title }) {
  const [open, setOpen] = useState(false)
  const [anchor, setAnchor] = useState('left')
  const [active, setActive] = useState('home')

  const handleLinkClick = (event, id) => {
    event.preventDefault() // 데모이므로 실제 페이지 이동은 막습니다.
    setActive(id)
    setOpen(false)
  }

  const activeLabel = NAV_LINKS.find((link) => link.id === active)?.label

  return (
    <SectionWrapper
      number={number}
      title={title}
      description="Drawer 사이드바입니다. 위치(왼쪽/오른쪽)를 고른 뒤 버튼으로 열고 닫을 수 있습니다."
    >
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems={{ sm: 'center' }}>
        <ToggleButtonGroup
          exclusive
          size="small"
          value={anchor}
          onChange={(event, value) => value && setAnchor(value)}
          aria-label="사이드바 위치"
        >
          <ToggleButton value="left">왼쪽</ToggleButton>
          <ToggleButton value="right">오른쪽</ToggleButton>
        </ToggleButtonGroup>
        <Button variant="contained" onClick={() => setOpen((prev) => !prev)}>
          사이드바 {open ? '닫기' : '열기'}
        </Button>
      </Stack>
      <Typography variant="body2" color="text.secondary" mt={1}>
        현재 메뉴: {activeLabel}
      </Typography>

      <Drawer anchor={anchor} open={open} onClose={() => setOpen(false)}>
        <Box component="nav" sx={{ width: 240 }} aria-label="사이드바 메뉴">
          <Typography variant="h6" sx={{ px: 2, py: 2 }}>
            메뉴
          </Typography>
          <List>
            {NAV_LINKS.map(({ id, label, href, Icon }) => (
              <ListItem key={id} disablePadding>
                <ListItemButton
                  component="a"
                  href={href}
                  selected={active === id}
                  onClick={(event) => handleLinkClick(event, id)}
                >
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                  <ListItemText primary={label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </SectionWrapper>
  )
}

export default SidebarSection
