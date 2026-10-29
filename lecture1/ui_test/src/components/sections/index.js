import ButtonSection from './button-section';
import InputSection from './input-section';
import NavigationSection from './navigation-section';
import DropdownSection from './dropdown-section';
import CheckboxSection from './checkbox-section';
import RadioSection from './radio-section';
import SliderSection from './slider-section';
import ModalSection from './modal-section';
import CardSection from './card-section';
import DragDropSection from './drag-drop-section';
import ScrollSection from './scroll-section';
import AnimationSection from './animation-section';
import MenuSection from './menu-section';
import SidebarSection from './sidebar-section';
import HoverSection from './hover-section';
import SwipeSection from './swipe-section';
import FlexNavigationSection from './flex-navigation-section';

/**
 * 섹션 등록 목록
 * 새 섹션을 만들면 import 후 배열 끝에 추가하세요.
 * 배열 순서대로 화면에 렌더링되며, 번호(1~16)도 자동으로 매겨집니다.
 *
 * 예시:
 * import ButtonSection from './button-section';
 * { id: 'button', title: 'Button', Component: ButtonSection },
 */
const sections = [
  { id: 'button', title: 'Button', Component: ButtonSection },
  { id: 'input', title: 'Input', Component: InputSection },
  { id: 'navigation', title: 'Navigation', Component: NavigationSection },
  { id: 'dropdown', title: 'Dropdown', Component: DropdownSection },
  { id: 'checkbox', title: 'Checkbox', Component: CheckboxSection },
  { id: 'radio', title: 'Radio', Component: RadioSection },
  { id: 'slider', title: 'Slider', Component: SliderSection },
  { id: 'modal', title: 'Modal', Component: ModalSection },
  { id: 'card', title: 'Card', Component: CardSection },
  { id: 'drag-drop', title: 'Drag & Drop', Component: DragDropSection },
  { id: 'scroll', title: 'Scroll', Component: ScrollSection },
  { id: 'animation', title: 'Animation', Component: AnimationSection },
  { id: 'menu', title: 'Menu', Component: MenuSection },
  { id: 'sidebar', title: 'Sidebar', Component: SidebarSection },
  { id: 'hover', title: 'Hover', Component: HoverSection },
  { id: 'swipe', title: 'Swipe', Component: SwipeSection },
  { id: 'flex-navigation', title: 'Flex Navigation', Component: FlexNavigationSection },
];

export default sections;
