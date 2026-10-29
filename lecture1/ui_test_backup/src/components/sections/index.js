// 섹션 등록 목록 — 새 섹션을 만들면 import 후 배열 끝에 추가하세요.
// 배열 순서대로 화면에 렌더링되며, 번호(1~16)도 자동으로 매겨집니다.
import ButtonSection from './ButtonSection'
import InputSection from './InputSection'
import NavigationSection from './NavigationSection'
import DropdownSection from './DropdownSection'
import CheckboxSection from './CheckboxSection'
import RadioSection from './RadioSection'
import SliderSection from './SliderSection'
import ModalSection from './ModalSection'
import CardSection from './CardSection'
import DragDropSection from './DragDropSection'
import ScrollSection from './ScrollSection'
import AnimationSection from './AnimationSection'
import MenuSection from './MenuSection'
import SidebarSection from './SidebarSection'
import HoverSection from './HoverSection'
import SwipeSection from './SwipeSection'

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
]

export default sections
