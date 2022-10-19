import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user,setUser] = useState({});
  const username = useParams().username;

  useEffect(()=>{
    const fetchUsers = async ()=>{
      const res =await axios.get(`https://bhavesh-annam-facebook-clone.herokuapp.com/users?username=${username}`);
      setUser(res.data);
    }
    fetchUsers();
  },[username])

  //console.log(user,"Profile user");
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={user.coverPic ? PF+user.coverPic : PF+"person/noCover.png"}
                alt=""
              />
              <img
                className="profileUserImg"
                src={user.profilePic ? PF+user.profilePic : PF+"person/noAvatar.png"}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username}/>
            <Rightbar user={user}/>
          </div>
        </div>
      </div>
    </>
  );
}
