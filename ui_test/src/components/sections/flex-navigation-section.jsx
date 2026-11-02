import Box from '@mui/material/Box';
import SectionWrapper from './section-wrapper';

const MENU_ITEMS = ['홈', '소개', '상품', '연락처', '설정'];

/**
 * FlexNavigationSection 컴포넌트
 * MUI 컴포넌트(AppBar 등) 없이 Box + flexbox 만으로 만든 네비게이션 바 데모.
 * 네비게이션 박스(display: flex, justify-content: space-between) 안에
 * 로고 박스(왼쪽)와 메뉴들 박스(오른쪽, gap: 15px)를 양 끝 정렬합니다.
 *
 * Props:
 * @param {number} number - 섹션 순번 [Required]
 * @param {string} title - 섹션 제목 [Required]
 *
 * Example usage:
 * <FlexNavigationSection number={ 17 } title="Flex Navigation" />
 */
function FlexNavigationSection({ number, title }) {
  /** 데모용 링크: 페이지 이동 방지 */
  const handleMenuClick = (event) => {
    event.preventDefault();
  };

  return (
    <SectionWrapper
      number={ number }
      title={ title }
      description="flexbox 로 로고(왼쪽)와 메뉴(오른쪽)를 양 끝 정렬한 네비게이션입니다. 메뉴에 마우스를 올려보세요."
    >
      { /* 큰 네비게이션 박스 */ }
      <Box
        component="nav"
        aria-label="Flex 네비게이션 예시"
        sx={ {
          width: '100%',
          height: '60px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2,
          px: 3,
          bgcolor: '#2d3748',
          borderRadius: 1,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
        } }
      >
        { /* 1. 로고 박스 */ }
        <Box
          sx={ {
            flexShrink: 0,
            color: '#ffffff',
            fontWeight: 700,
            fontSize: '20px',
            letterSpacing: '-0.02em',
          } }
        >
          MyWebsite
        </Box>

        { /* 2. 메뉴들 박스 */ }
        <Box
          component="ul"
          sx={ {
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            m: 0,
            p: 0,
            minWidth: 0,
            overflowX: 'auto',
            listStyle: 'none',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
          } }
        >
          { MENU_ITEMS.map((item) => (
            <Box component="li" key={ item } sx={ { flexShrink: 0 } }>
              <Box
                component="a"
                href="#"
                onClick={ handleMenuClick }
                sx={ {
                  display: 'block',
                  color: '#cbd5e0',
                  fontSize: '16px',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  transition: 'color 0.2s ease',
                  '&:hover': { color: '#ffffff' },
                } }
              >
                { item }
              </Box>
            </Box>
          )) }
        </Box>
      </Box>
    </SectionWrapper>
  );
}

export default FlexNavigationSection;
