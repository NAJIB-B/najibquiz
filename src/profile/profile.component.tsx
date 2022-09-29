import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectUserUid } from "../store/user/user.selector";
import { useEffect } from "react";
import { getProfileQuizDataStart } from "../store/profile/profile.action";
const Profile = () => {
  const dispatch = useDispatch();
  const uid = useSelector(selectUserUid);
  useEffect(() => {
    if(uid){
        dispatch(getProfileQuizDataStart(uid));
    }
    
  }, []);
  return <h1>profile page</h1>;
};

export default Profile;
