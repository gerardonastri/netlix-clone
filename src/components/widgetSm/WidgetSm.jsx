import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import {axiosIstance} from '../../config'
import { useEffect, useState } from "react";


export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
      const getNewUsers = async () => {
        try {
          const {data} = await axiosIstance.get(`user?new=true`, {
            headers: {
              token: 'F]2*Fr7SU:DF!?$ eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYWIyMTY1ZGJjZDYxZTAyODRlY2Y4MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODY5NDI4MSwiZXhwIjoxNjM5MTI2MjgxfQ.Do6FH4ZmGbHzc8fIWuUsLRQudRGfEKkpLx5DSRxxR9M'
            }
          });
          setNewUsers(data)
        } catch (error) {
          console.log(error);
        }
      }
      getNewUsers()
  }, [])
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map(user => (
            <li className="widgetSmListItem" key={user._id}>
            <img
              src={user.profilePicture || "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"}
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
        
      </ul>
    </div>
  );
}
