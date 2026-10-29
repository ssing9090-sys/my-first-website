import { useState } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import SectionWrapper from './SectionWrapper'

const INITIAL_ITEMS = [
  { id: 'a', label: '📄 문서', zone: 'source' },
  { id: 'b', label: '🖼️ 이미지', zone: 'source' },
  { id: 'c', label: '🎵 음악', zone: 'source' },
  { id: 'd', label: '🎬 동영상', zone: 'source' },
]

const ZONES = [
  { id: 'source', title: '아이템 목록' },
  { id: 'target', title: '드롭 영역' },
]

function DragDropSection({ number, title }) {
  const [items, setItems] = useState(INITIAL_ITEMS)
  const [draggingId, setDraggingId] = useState(null)
  const [overZone, setOverZone] = useState(null)

  const handleDragStart = (event, id) => {
    event.dataTransfer.setData('text/plain', id)
    event.dataTransfer.effectAllowed = 'move'
    setDraggingId(id)
  }

  const handleDragEnd = () => {
    setDraggingId(null)
    setOverZone(null)
  }

  const handleDragOver = (event, zoneId) => {
    event.preventDefault() // 기본 동작을 막아야 drop이 허용됩니다.
    event.dataTransfer.dropEffect = 'move'
    if (overZone !== zoneId) setOverZone(zoneId)
  }

  const handleDragLeave = (event) => {
    // 자식 요소로 이동한 경우는 영역을 벗어난 것이 아니므로 무시합니다.
    if (!event.currentTarget.contains(event.relatedTarget)) setOverZone(null)
  }

  const handleDrop = (event, zoneId) => {
    event.preventDefault()
    const id = event.dataTransfer.getData('text/plain')
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, zone: zoneId } : item)))
    setOverZone(null)
  }

  return (
    <SectionWrapper
      number={number}
      title={title}
      description="HTML5 Drag and Drop API로 아이템을 다른 영역으로 옮길 수 있습니다."
    >
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
        {ZONES.map((zone) => {
          const zoneItems = items.filter((item) => item.zone === zone.id)
          const isOver = overZone === zone.id

          return (
            <Box
              key={zone.id}
              onDragOver={(event) => handleDragOver(event, zone.id)}
              onDragLeave={handleDragLeave}
              onDrop={(event) => handleDrop(event, zone.id)}
              sx={{
                minHeight: 200,
                p: 2,
                borderRadius: 2,
                border: '2px dashed',
                borderColor: isOver ? 'primary.main' : 'divider',
                bgcolor: isOver ? 'action.hover' : 'background.default',
                transition: 'all 0.2s',
              }}
            >
              <Typography variant="subtitle2" gutterBottom>
                {zone.title} ({zoneItems.length})
              </Typography>
              {zoneItems.map((item) => (
                <Paper
                  key={item.id}
                  draggable
                  onDragStart={(event) => handleDragStart(event, item.id)}
                  onDragEnd={handleDragEnd}
                  sx={{
                    p: 1.5,
                    mb: 1,
                    cursor: 'grab',
                    opacity: draggingId === item.id ? 0.4 : 1,
                    transition: 'opacity 0.2s',
                  }}
                >
                  {item.label}
                </Paper>
              ))}
              {zoneItems.length === 0 && (
                <Typography variant="body2" color="text.secondary">
                  여기로 끌어다 놓으세요
                </Typography>
              )}
            </Box>
          )
        })}
      </Box>
    </SectionWrapper>
  )
}

export default DragDropSection
