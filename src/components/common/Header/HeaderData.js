//icons
import { BiHomeCircle } from 'react-icons/bi'
import { IoListCircleOutline } from 'react-icons/io5'
import { AiOutlineAppstoreAdd, AiOutlineShoppingCart } from 'react-icons/ai'
import { CiGrid32 } from 'react-icons/ci'
import { CgFileDocument } from 'react-icons/cg'
import { RiLayoutLine } from 'react-icons/ri'
// fake Data
const HeaderData = [
  {
    url: null,
    text: 'Dashboard',
    icon: <BiHomeCircle />,
    children: [
      {
        url: null,
        text: 'item',
        icon: null,
        children: [],
      },
      {
        url: '/s',
        text: 'item',
        icon: null,
        children: [],
      },
    ],
  },
  {
    url: null,
    text: 'Ui Elements',
    icon: <IoListCircleOutline />,
    children: [
      {
        url: null,
        text: 'item',
        icon: null,
        children: [],
      },
      {
        url: null,
        text: 'item',
        icon: null,
        children: [],
      },
    ],
  },
  {
    url: null,
    text: 'Apps',
    icon: <AiOutlineAppstoreAdd />,
    children: [
      {
        url: null,
        text: 'item',
        icon: null,
        children: [],
      },
      {
        url: null,
        text: 'item',
        icon: null,
        children: [],
      },
    ],
  },
  {
    url: null,
    text: 'Components',
    icon: <CiGrid32 />,
    children: [
      {
        url: null,
        text: 'item',
        icon: null,
        children: [],
      },
      {
        url: null,
        text: 'item',
        icon: null,
        children: [],
      },
    ],
  },
  {
    url: null,
    text: 'Extra Pages',
    icon: <CgFileDocument />,
    children: [
      {
        url: null,
        text: 'item',
        icon: null,
        children: [],
      },
      {
        url: null,
        text: 'item',
        icon: null,
        children: [],
      },
    ],
  },
  {
    url: null,
    text: 'Layouts',
    icon: <RiLayoutLine />,
    children: [
      {
        url: null,
        text: 'item',
        icon: null,
        children: [],
      },
      {
        url: null,
        text: 'item',
        icon: null,
        children: [],
      },
    ],
  },
]

export default HeaderData
