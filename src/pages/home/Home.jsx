import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import {axiosIstance} from '../../config'

export default function Home() {
  const MONTHS = useMemo(() => [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Agu',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ], []
  ) 
  
    const [userStats, setUserStats] = useState([]);
    useEffect(() => {
      const getStats = async () => {
        try {
          const {data} = await axiosIstance.get(`user/stats`, {
            headers: {
              token: "F]2*Fr7SU:DF!?$ eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYWIyMTY1ZGJjZDYxZTAyODRlY2Y4MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODY5NDI4MSwiZXhwIjoxNjM5MTI2MjgxfQ.Do6FH4ZmGbHzc8fIWuUsLRQudRGfEKkpLx5DSRxxR9M"
            }
          })
          const statsLists = data.sort(function(a,b){
            return a._id - b._id;
          })
          statsLists.map(item => setUserStats(prev =>
             [...prev,
              {name: MONTHS[item._id-1],
              "New User": item.total}]))
        } catch (error) {
          console.log(error);
        }
      }
      getStats()
    }, [MONTHS])
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
