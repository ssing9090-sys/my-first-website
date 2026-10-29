import { useState } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'
import MailIcon from '@mui/icons-material/Mail'
import HelpIcon from '@mui/icons-material/Help'
import LogoutIcon from '@mui/icons-material/Logout'
import SectionWrapper from './SectionWrapper'

const MENU_ITEMS = [
  { id: 'profile', label: '프로필', Icon: PersonIcon },
  { id: 'settings', label: '설정', Icon: SettingsIcon },
  { id: 'mail', label: '메시지', Icon: MailIcon },
  { id: 'help', label: '도움말', Icon: HelpIcon },
  { id: 'logout', label: '로그아웃', Icon: LogoutIcon },
]

function MenuSection({ number, title }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const [selected, setSelected] = useState('')

  const handleSelect = (label) => {
    setSelected(label)
    setAnchorEl(null)
  }

  return (
    <SectionWrapper
      number={number}
      title={title}
      description="버튼을 누르면 아이콘이 포함된 메뉴가 열립니다."
    >
      <Button
        variant="contained"
        endIcon={<KeyboardArrowDownIcon />}
        onClick={(event) => setAnchorEl(event.currentTarget)}
        aria-controls={anchorEl ? 'demo-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={anchorEl ? 'true' : undefined}
      >
        메뉴 열기
      </Button>
      <Menu
        id="demo-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {MENU_ITEMS.map(({ id, label, Icon }) => (
          <MenuItem key={id} selected={selected === label} onClick={() => handleSelect(label)}>
            <ListItemIcon>
              <Icon fontSize="small" />
            </ListItemIcon>
            <ListItemText>{label}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
      <Typography variant="body2" color="text.secondary" mt={1}>
        선택된 메뉴: {selected || '(없음)'}
      </Typography>
    </SectionWrapper>
  )
}

export default MenuSection
