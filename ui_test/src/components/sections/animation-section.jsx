import { useRef, useState } from 'react';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import { keyframes } from '@mui/material/styles';
import SectionWrapper from './section-wrapper';

/** CSS 키프레임: 두근거림 */
const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.25); }
`;

/** CSS 키프레임: 회전 */
const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

/** CSS 키프레임: 위아래 튕김 */
const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
`;

const EFFECTS = [
  {
    id: 'fade',
    label: 'Fade + Pulse',
    description: '서서히 나타난 뒤 두근거립니다.',
    Icon: FavoriteIcon,
    color: 'error.main',
    cssAnimation: `${pulse} 1s ease-in-out infinite`,
  },
  {
    id: 'grow',
    label: 'Grow + Spin',
    description: '작은 크기에서 커진 뒤 회전합니다.',
    Icon: AutorenewIcon,
    color: 'primary.main',
    cssAnimation: `${spin} 1.5s linear infinite`,
  },
  {
    id: 'slide',
    label: 'Slide + Bounce',
    description: '아래에서 미끄러져 올라온 뒤 튕깁니다.',
    Icon: RocketLaunchIcon,
    color: 'secondary.main',
    cssAnimation: `${bounce} 0.8s ease-in-out infinite`,
  },
];

const TRANSITION_TIMEOUT = 600;

const INITIAL_STATE = EFFECTS.reduce((acc, effect) => (
  { ...acc, [effect.id]: { isIn: false, isReplaying: false } }
), {});

/**
 * AnimationSection 컴포넌트
 * MUI 트랜지션(Fade/Grow/Slide)으로 등장시킨 뒤, 등장한 아이콘에 CSS 키프레임 애니메이션(pulse/spin/bounce)을
 * 이어서 재생하는 데모. 이미 보이는 상태에서 버튼을 누르면 사라졌다가 다시 등장합니다.
 *
 * Props:
 * @param {number} number - 섹션 순번 [Required]
 * @param {string} title - 섹션 제목 [Required]
 *
 * Example usage:
 * <AnimationSection number={ 12 } title="Animation" />
 */
function AnimationSection({ number, title }) {
  const [effectStates, setEffectStates] = useState(INITIAL_STATE);
  const slideContainerRef = useRef(null);

  /** 특정 효과의 상태 일부 갱신 */
  const updateEffect = (id, patch) => {
    setEffectStates((prev) => ({ ...prev, [id]: { ...prev[id], ...patch } }));
  };

  /** 재생: 숨겨져 있으면 등장, 보이는 중이면 퇴장 후 다시 등장 */
  const handlePlay = (id) => {
    if (effectStates[id].isIn) {
      updateEffect(id, { isIn: false, isReplaying: true });
    } else {
      updateEffect(id, { isIn: true });
    }
  };

  /** 퇴장 완료 시 다시 재생 중이었다면 재등장 */
  const handleExited = (id) => {
    if (effectStates[id].isReplaying) {
      updateEffect(id, { isIn: true, isReplaying: false });
    }
  };

  /** 효과별 MUI 트랜지션으로 콘텐츠 감싸기 */
  const renderTransition = (effect, content) => {
    const { isIn } = effectStates[effect.id];
    const commonProps = {
      in: isIn,
      timeout: TRANSITION_TIMEOUT,
      onExited: () => handleExited(effect.id),
    };

    if (effect.id === 'fade') return <Fade { ...commonProps }>{ content }</Fade>;
    if (effect.id === 'grow') return <Grow { ...commonProps }>{ content }</Grow>;
    return (
      <Slide { ...commonProps } direction="up" container={ slideContainerRef.current }>
        { content }
      </Slide>
    );
  };

  return (
    <SectionWrapper
      number={ number }
      title={ title }
      description="MUI 트랜지션으로 등장한 뒤 CSS 키프레임 애니메이션이 이어집니다. 다시 누르면 처음부터 재생됩니다."
    >
      <Grid container spacing={ 2 }>
        { EFFECTS.map((effect) => {
          const { Icon } = effect;
          const { isIn } = effectStates[effect.id];

          return (
            <Grid key={ effect.id } size={ { xs: 12, md: 4 } }>
              <Paper variant="outlined" sx={ { p: 2, height: '100%' } }>
                <Box sx={ { fontWeight: 600, fontSize: '0.95rem' } }>{ effect.label }</Box>
                <Box sx={ { color: 'text.secondary', fontSize: '0.8rem', mt: 0.5, mb: 1.5 } }>
                  { effect.description }
                </Box>
                <Box
                  ref={ effect.id === 'slide' ? slideContainerRef : undefined }
                  sx={ {
                    height: 140,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    borderRadius: 1,
                    bgcolor: 'grey.100',
                  } }
                >
                  { renderTransition(effect, (
                    <Box
                      sx={ {
                        width: 88,
                        height: 88,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 2,
                        bgcolor: 'background.paper',
                        boxShadow: 3,
                      } }
                    >
                      <Icon
                        sx={ {
                          fontSize: 44,
                          color: effect.color,
                          animation: isIn ? effect.cssAnimation : 'none',
                        } }
                      />
                    </Box>
                  )) }
                </Box>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={ () => handlePlay(effect.id) }
                  sx={ { mt: 1.5 } }
                >
                  { isIn ? '다시 재생' : '재생' }
                </Button>
              </Paper>
            </Grid>
          );
        }) }
      </Grid>
    </SectionWrapper>
  );
}

export default AnimationSection;
