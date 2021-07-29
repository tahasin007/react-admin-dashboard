import './widgetLg.css'

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>
  }

  return (
    <div className='widgetLg'>
      <h3 className='widgetLgTitle'>Latest Transactions</h3>
      <table className='widgetLgTable'>
        <tr className='widgetLgTr'>
          <th className='widgetLgTh'>Customer</th>
          <th className='widgetLgTh'>Date</th>
          <th className='widgetLgTh'>Amount</th>
          <th className='widgetLgTh'>Status</th>
        </tr>

        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img
              className='widgetLgImg'
              src='http://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture-1024x1024.jpg'
              alt='avatar'
            />
            <span className='widgetLgName'>Susan Karen</span>
          </td>
          <td className='widgetLgDate'>2 Jul, 2021</td>
          <td className='widgetLgAmount'>$222</td>
          <td className='widgetLgStatus'>
            <Button type='Approved'></Button>
          </td>
        </tr>

        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img
              className='widgetLgImg'
              src='http://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture-1024x1024.jpg'
              alt='avatar'
            />
            <span className='widgetLgName'>Susan Karen</span>
          </td>
          <td className='widgetLgDate'>2 Jul, 2021</td>
          <td className='widgetLgAmount'>$222</td>
          <td className='widgetLgStatus'>
            <Button type='Declined'></Button>
          </td>
        </tr>

        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img
              className='widgetLgImg'
              src='http://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture-1024x1024.jpg'
              alt='avatar'
            />
            <span className='widgetLgName'>Susan Karen</span>
          </td>
          <td className='widgetLgDate'>2 Jul, 2021</td>
          <td className='widgetLgAmount'>$222</td>
          <td className='widgetLgStatus'>
            <Button type='Pending'></Button>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetLg
