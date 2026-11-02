import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import SectionWrapper from './section-wrapper';

/**
 * ModalSection 컴포넌트
 * MUI Dialog 데모. 버튼 클릭 시 모달이 열리며,
 * 확인/취소 버튼, 우측 상단 닫기(X) 버튼, 배경 클릭, ESC 키로 닫을 수 있습니다.
 *
 * Props:
 * @param {number} number - 섹션 순번 [Required]
 * @param {string} title - 섹션 제목 [Required]
 *
 * Example usage:
 * <ModalSection number={ 8 } title="Modal" />
 */
function ModalSection({ number, title }) {
  const [isOpen, setIsOpen] = useState(false);

  /** 모달 열기 */
  const handleOpen = () => {
    setIsOpen(true);
  };

  /** 모달 닫기 (확인/취소/X 버튼, 배경 클릭, ESC 공통) */
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SectionWrapper
      number={ number }
      title={ title }
      description="버튼을 누르면 Dialog 가 열립니다. 버튼, X, 배경 클릭, ESC 키로 닫을 수 있습니다."
    >
      <Button variant="contained" onClick={ handleOpen }>
        모달 열기
      </Button>

      <Dialog
        open={ isOpen }
        onClose={ handleClose }
        aria-labelledby="modal-section-title"
        aria-describedby="modal-section-description"
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle id="modal-section-title" sx={ { pr: 6 } }>
          알림
        </DialogTitle>
        <IconButton
          aria-label="닫기"
          onClick={ handleClose }
          sx={ { position: 'absolute', top: 8, right: 8, color: 'text.secondary' } }
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <DialogContentText id="modal-section-description">
            MUI Dialog 로 만든 모달입니다. 확인 또는 취소 버튼을 누르거나,
            오른쪽 위 X 버튼이나 바깥 배경을 클릭하면 닫힙니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={ { px: 3, pb: 2 } }>
          <Button onClick={ handleClose }>취소</Button>
          <Button variant="contained" onClick={ handleClose } autoFocus>
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </SectionWrapper>
  );
}

export default ModalSection;
