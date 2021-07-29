import './home.css'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/charts/Chart'
import { userdata } from '../../data/activeUser'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'

const Home = () => {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart
        data={userdata}
        title='User Analytics'
        grid
        dataKey='Active User'
      />
      <div className='homeWidgets'>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}

export default Home
