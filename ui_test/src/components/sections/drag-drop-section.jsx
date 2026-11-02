import { useState } from 'react';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import SectionWrapper from './section-wrapper';

const INITIAL_ITEMS = [
  { id: 'item-1', label: '📄 문서', zone: 'source' },
  { id: 'item-2', label: '🖼️ 이미지', zone: 'source' },
  { id: 'item-3', label: '🎵 음악', zone: 'source' },
  { id: 'item-4', label: '🎬 동영상', zone: 'source' },
];

const ZONES = [
  { id: 'source', label: '아이템 목록' },
  { id: 'target', label: '드롭 영역' },
];

/**
 * DragDropSection 컴포넌트
 * HTML5 Drag and Drop API 데모. 아이템을 '아이템 목록'과 '드롭 영역' 사이로 끌어 옮길 수 있습니다.
 * 드래그 중인 아이템은 반투명해지고, 아이템이 올라간 영역은 테두리·배경색이 강조됩니다.
 *
 * Props:
 * @param {number} number - 섹션 순번 [Required]
 * @param {string} title - 섹션 제목 [Required]
 *
 * Example usage:
 * <DragDropSection number={ 10 } title="Drag & Drop" />
 */
function DragDropSection({ number, title }) {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [draggingId, setDraggingId] = useState(null);
  const [overZoneId, setOverZoneId] = useState(null);

  /** 드래그 시작: 옮길 아이템 id 를 dataTransfer 에 저장 */
  const handleDragStart = (id) => (event) => {
    event.dataTransfer.setData('text/plain', id);
    event.dataTransfer.effectAllowed = 'move';
    setDraggingId(id);
  };

  /** 드래그 종료(드롭 성공/취소 공통): 피드백 상태 초기화 */
  const handleDragEnd = () => {
    setDraggingId(null);
    setOverZoneId(null);
  };

  /** 영역 위를 지나는 중: 드롭 허용 + 영역 강조 */
  const handleDragOver = (zoneId) => (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    if (overZoneId !== zoneId) setOverZoneId(zoneId);
  };

  /** 영역을 벗어남: 자식 요소로 이동한 경우는 무시 */
  const handleDragLeave = (event) => {
    if (event.currentTarget.contains(event.relatedTarget)) return;
    setOverZoneId(null);
  };

  /** 드롭: 아이템을 해당 영역으로 이동 */
  const handleDrop = (zoneId) => (event) => {
    event.preventDefault();
    const id = event.dataTransfer.getData('text/plain');
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, zone: zoneId } : item)));
    setOverZoneId(null);
  };

  return (
    <SectionWrapper
      number={ number }
      title={ title }
      description="아이템을 끌어서 드롭 영역으로 옮겨보세요. 다시 아이템 목록으로 되돌릴 수도 있습니다."
    >
      <Grid container spacing={ 2 }>
        { ZONES.map((zone) => {
          const zoneItems = items.filter((item) => item.zone === zone.id);
          const isOver = overZoneId === zone.id;

          return (
            <Grid key={ zone.id } size={ { xs: 12, md: 6 } }>
              <Typography variant="subtitle2" color="text.secondary" sx={ { mb: 1 } }>
                { zone.label } ({ zoneItems.length })
              </Typography>
              <Box
                onDragOver={ handleDragOver(zone.id) }
                onDragLeave={ handleDragLeave }
                onDrop={ handleDrop(zone.id) }
                sx={ {
                  minHeight: 220,
                  p: 1.5,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                  borderRadius: 1,
                  border: '2px dashed',
                  borderColor: isOver ? 'primary.main' : 'divider',
                  bgcolor: isOver ? 'action.hover' : 'grey.50',
                  transition: 'border-color 0.2s, background-color 0.2s',
                } }
              >
                { zoneItems.length === 0 && (
                  <Box
                    sx={ {
                      flexGrow: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'text.disabled',
                      fontSize: '0.875rem',
                    } }
                  >
                    여기에 아이템을 놓으세요
                  </Box>
                ) }
                { zoneItems.map((item) => (
                  <Paper
                    key={ item.id }
                    draggable
                    onDragStart={ handleDragStart(item.id) }
                    onDragEnd={ handleDragEnd }
                    variant="outlined"
                    sx={ {
                      px: 1.5,
                      py: 1,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      cursor: 'grab',
                      userSelect: 'none',
                      opacity: draggingId === item.id ? 0.4 : 1,
                      transition: 'opacity 0.2s, box-shadow 0.2s',
                      '&:hover': { boxShadow: 2 },
                      '&:active': { cursor: 'grabbing' },
                    } }
                  >
                    <DragIndicatorIcon fontSize="small" sx={ { color: 'text.disabled' } } />
                    { item.label }
                  </Paper>
                )) }
              </Box>
            </Grid>
          );
        }) }
      </Grid>
    </SectionWrapper>
  );
}

export default DragDropSection;
