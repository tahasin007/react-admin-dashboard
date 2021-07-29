import './sidebar.css'
import {
  LineStyle,
  Timeline,
  TrendingUp,
  Person,
  AttachMoney,
  BarChart,
  Mail,
  Feedback,
  Message,
  Report,
  CardTravel,
} from '@material-ui/icons'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Dashboard</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem active'>
              <LineStyle className='sidebarIcon' /> Home
            </li>
            <li className='sidebarListItem'>
              <Timeline className='sidebarIcon' /> Analytics
            </li>
            <li className='sidebarListItem'>
              <TrendingUp className='sidebarIcon' /> Sales
            </li>
          </ul>
        </div>

        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Quick Menu </h3>
          <ul className='sidebarList'>
            <Link to='/users' className='link'>
            <li className='sidebarListItem'>
              <Person className='sidebarIcon' /> Users
            </li>
            </Link>
            <Link to='/products' className='link'>
            <li className='sidebarListItem'>
              <CardTravel className='sidebarIcon' /> Products
            </li>
            </Link>
            <li className='sidebarListItem'>
              <AttachMoney className='sidebarIcon' /> Transactions
            </li>
            <li className='sidebarListItem'>
              <BarChart className='sidebarIcon' /> Reports
            </li>
          </ul>
        </div>

        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Notifications</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <Mail className='sidebarIcon' /> Mail
            </li>
            <li className='sidebarListItem'>
              <Feedback className='sidebarIcon' /> Feedback
            </li>
            <li className='sidebarListItem'>
              <Message className='sidebarIcon' /> Messages
            </li>
          </ul>
        </div>

        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Staffs</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <LineStyle className='sidebarIcon' /> Manage
            </li>
            <li className='sidebarListItem'>
              <Timeline className='sidebarIcon' /> Analytics
            </li>
            <li className='sidebarListItem'>
              <Report className='sidebarIcon' /> Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
