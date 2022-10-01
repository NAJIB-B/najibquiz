import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectUserUid } from "../store/user/user.selector";
import { useEffect } from "react";
import { getProfileQuizDataStart } from "../store/profile/profile.action";
import Spinner from "../spinner/spinner.component";
import {
  selectIsLoading,
  selectQuizesData,
} from "../store/profile/profile.selector";

import {
  Circles,
  CirclesLi,
  Area,
  SignUpBtn,
  LogOutBtn,
} from "../home/home.style";
import { InnerQuizData } from "../utils/firebase.utils";
const Profile = () => {
  const dispatch = useDispatch();
  const uid = useSelector(selectUserUid);
  const isLoading = useSelector(selectIsLoading);
  const quizMainObject = useSelector(selectQuizesData);
  useEffect(() => {
    if (uid) {
      dispatch(getProfileQuizDataStart(uid));
    }
  }, []);
  const quiz = Object.entries(quizMainObject);
  const key = Object.values(quizMainObject);
  // key.map((i) => {
  //   i;
  // });

  console.log(Object.keys(quizMainObject), Object.values(quizMainObject));
  return (
    <>
      {isLoading ? (
        <Spinner></Spinner>
      ) : (
        <>
          <Area>
            {quiz.map((item) => {
              const quizSlice = item[1];

              return (
                <>
                  <h2>{quizSlice.quizName}</h2>
                  <p>{(quizSlice.quizData as unknown as InnerQuizData).name}</p>
                </>
              );
            })}

            <Circles>
              <CirclesLi></CirclesLi>
              <CirclesLi></CirclesLi>
              <CirclesLi></CirclesLi>
              <CirclesLi></CirclesLi>
              <CirclesLi></CirclesLi>
              <CirclesLi></CirclesLi>
              <CirclesLi></CirclesLi>
              <CirclesLi></CirclesLi>
              <CirclesLi></CirclesLi>
              <CirclesLi></CirclesLi>
            </Circles>
          </Area>
        </>
      )}
    </>
  );
};

export default Profile;
