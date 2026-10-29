import { useState } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShareIcon from '@mui/icons-material/Share';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SectionWrapper from './section-wrapper';

const MENU_ITEMS = [
  { id: 'edit', label: '편집', Icon: EditIcon },
  { id: 'cut', label: '잘라내기', Icon: ContentCutIcon },
  { id: 'copy', label: '복사', Icon: ContentCopyIcon },
  { id: 'paste', label: '붙여넣기', Icon: ContentPasteIcon },
  { id: 'share', label: '공유', Icon: ShareIcon },
  { id: 'delete', label: '삭제', Icon: DeleteIcon, isDanger: true },
];

/**
 * MenuSection 컴포넌트
 * MUI Menu 데모. 버튼 클릭 시 아이콘이 포함된 메뉴 6개가 열리고,
 * 메뉴를 클릭하면 메뉴가 닫히며 선택된 메뉴가 아래에 표시됩니다.
 *
 * Props:
 * @param {number} number - 섹션 순번 [Required]
 * @param {string} title - 섹션 제목 [Required]
 *
 * Example usage:
 * <MenuSection number={ 13 } title="Menu" />
 */
function MenuSection({ number, title }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  const isOpen = Boolean(anchorEl);
  const selectedItem = MENU_ITEMS.find((item) => item.id === selectedId);

  /** 메뉴 열기 */
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  /** 메뉴 닫기 */
  const handleClose = () => {
    setAnchorEl(null);
  };

  /** 메뉴 아이템 선택 */
  const handleItemClick = (id) => {
    setSelectedId(id);
    setAnchorEl(null);
  };

  return (
    <SectionWrapper
      number={ number }
      title={ title }
      description="버튼을 누르면 아이콘이 포함된 메뉴가 열립니다. 메뉴를 선택하면 아래에 표시됩니다."
    >
      <Button
        id="menu-section-button"
        variant="outlined"
        aria-controls={ isOpen ? 'menu-section-menu' : undefined }
        aria-haspopup="true"
        aria-expanded={ isOpen ? 'true' : undefined }
        endIcon={ <KeyboardArrowDownIcon /> }
        onClick={ handleOpen }
      >
        메뉴 열기
      </Button>
      <Menu
        id="menu-section-menu"
        anchorEl={ anchorEl }
        open={ isOpen }
        onClose={ handleClose }
        slotProps={ { list: { 'aria-labelledby': 'menu-section-button' } } }
      >
        { MENU_ITEMS.flatMap(({ id, label, Icon, isDanger }) => {
          const menuItem = (
            <MenuItem
              key={ id }
              selected={ id === selectedId }
              onClick={ () => handleItemClick(id) }
              sx={ isDanger ? { color: 'error.main' } : undefined }
            >
              <ListItemIcon sx={ isDanger ? { color: 'error.main' } : undefined }>
                <Icon fontSize="small" />
              </ListItemIcon>
              <ListItemText>{ label }</ListItemText>
            </MenuItem>
          );
          return isDanger ? [<Divider key={ `${id}-divider` } />, menuItem] : [menuItem];
        }) }
      </Menu>

      <Box
        sx={ {
          mt: 2,
          px: 2,
          py: 1.5,
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          borderRadius: 1,
          bgcolor: 'grey.100',
          fontSize: '0.875rem',
          color: selectedItem ? 'text.primary' : 'text.disabled',
        } }
      >
        { selectedItem ? (
          <>
            <selectedItem.Icon fontSize="small" />
            선택한 메뉴: <strong>{ selectedItem.label }</strong>
          </>
        ) : '아직 선택하지 않았습니다' }
      </Box>
    </SectionWrapper>
  );
}

export default MenuSection;
