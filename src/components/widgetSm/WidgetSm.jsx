import './widgetSm.css'
import {VisibilitySharp} from '@material-ui/icons'

const WidgetSm = () => {
  return (
    <div className='widgetSm'>
      <span className='widgetSmTitle'>New Members</span>
      <ul className='widgetSmList'>
        <li className='widgetSmListItem'>
          <img className='widgetSmImg'
            src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            alt='User Pic'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUserName'>Jon Doe</span>
            <span className='widgetSmUserTitle'>Developer</span>
          </div>
          <button className='widgetSmButton'>
          <VisibilitySharp className='widgetSmIcon'/>
          Display
          </button>
        </li>

        <li className='widgetSmListItem'>
          <img className='widgetSmImg'
            src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            alt='User Pic'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUserName'>Jon Doe</span>
            <span className='widgetSmUserTitle'>Developer</span>
          </div>
          <button className='widgetSmButton'>
          <VisibilitySharp className='widgetSmIcon'/>
          Display
          </button>
        </li>
      </ul>
    </div>
  )
}

export default WidgetSm
