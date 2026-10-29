import { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import SectionWrapper from './SectionWrapper'

function ModalSection({ number, title }) {
  const [open, setOpen] = useState(false)
  const [result, setResult] = useState('')

  // 배경 클릭, ESC, 닫기 버튼은 모두 '닫기'로 처리합니다.
  const handleClose = (reason) => {
    setOpen(false)
    setResult(reason)
  }

  return (
    <SectionWrapper
      number={number}
      title={title}
      description="버튼을 누르면 Dialog가 열립니다. 닫기 버튼이나 배경을 클릭해도 닫힙니다."
    >
      <Button variant="contained" onClick={() => setOpen(true)}>
        모달 열기
      </Button>
      <Typography variant="body2" color="text.secondary" mt={1}>
        마지막 결과: {result || '(없음)'}
      </Typography>

      <Dialog open={open} onClose={() => handleClose('닫기')} aria-labelledby="modal-title">
        <DialogTitle id="modal-title" sx={{ pr: 6 }}>
          알림
          <IconButton
            aria-label="닫기"
            onClick={() => handleClose('닫기')}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            변경 사항을 저장하시겠습니까? 확인을 누르면 저장되고, 취소를 누르면 저장하지 않습니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose('취소')}>취소</Button>
          <Button variant="contained" onClick={() => handleClose('확인')}>
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </SectionWrapper>
  )
}

export default ModalSection
