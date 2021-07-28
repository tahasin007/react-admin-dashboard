import './topbar.css'
import { Notifications, Language, Settings } from '@material-ui/icons'
import ImageUrl from '../../img/profile image.jpg'

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='logo'>admin</div>
        <div className='topRight'>
          <div className='topperIconContainer'>
            <Notifications />
            <span className='topIconCount'>3</span>
          </div>
          <div className='topperIconContainer'>
            <Language />
          </div>
          <div className='topperIconContainer'>
            <Settings />
          </div>
          <img src={ImageUrl} alt="avatar" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}
