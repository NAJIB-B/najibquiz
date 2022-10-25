import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectUserUid } from "../../store/user/user.selector";
import { useEffect } from "react";
import { getProfileQuizDataStart } from "../../store/profile/profile.action";
import Spinner from "../../components/spinner/spinner.component";
import {
  selectIsLoading,
  selectQuizesData,
} from "../../store/profile/profile.selector";

import { Area } from "../home/home.style";

import { ProfileMainDiv, ProfileMainText } from "./profile.styles";
import ProfilContainer from "../../components/profilContainer/profileContainer.component";
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

  return (
    <>
      {isLoading ? (
        <Spinner></Spinner>
      ) : (
        <>
          <Area>
            <ProfileMainDiv>
              <ProfileMainText>See all your quiz here</ProfileMainText>
            </ProfileMainDiv>

            {quiz.map((item, i) => {
              // outerQuizData[Object.keys(outerQuizData)[0]];
              return (
                <>
                  <ProfilContainer
                    quizSlice={item[1]}
                    key={i}
                  ></ProfilContainer>
                </>
              );
            })}
          </Area>
        </>
      )}
    </>
  );
};

export default Profile;
