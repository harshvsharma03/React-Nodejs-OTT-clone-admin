import { useEffect, useState } from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import axios from "axios";

export default function WidgetSm() {
  const [newUsers,setNewUsers]=useState([])

  useEffect(()=>{
    const getNewUsers = async()=>{
      try{
        const res = await axios.get(
          "http://localhost:8800/api/users?new=true",{
            headers:{
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YTExMTdhZjBlNjZlYmNkMzI5YWUxYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4OTA5NDcyNywiZXhwIjoxNjg5NTI2NzI3fQ.IWN4fURTwUGPX9T7jusyWMCnEtJvqKWj1HvHwmdiKZ8"
            }
          }
        );
        setNewUsers(res.data);
      }catch(err){console.log(err)}
    };
    getNewUsers();
  },[])
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user)=>(
          <>
        <li className="widgetSmListItem">
          <img
            src={user.profilePicture||"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"}
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
       
        </>
        ))}
      </ul>
    </div>
  );
}
