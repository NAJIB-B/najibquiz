import { InnerUserQuiz } from "../../utils/firebase.utils";
import {
  ProfileContainerDiv,
  QuizName,
  ScoreDiv,
} from "./profileContainer.styles";

type ProfileContainerProp = {
  quizSlice: InnerUserQuiz;
};

const ProfilContainer = ({ quizSlice }: ProfileContainerProp) => {
  const { quizName, quizData } = quizSlice;

  return (
    <>
      <ProfileContainerDiv>
        <div>
          <>
            <QuizName>{quizName}</QuizName>
            {quizData ? (
              Object.keys(quizData).map((key, i) => {
                return (
                  <ScoreDiv key={i}>
                    <p key={i}>{quizData[key].name}</p>
                    <p key={i + 2}>{quizData[key].score}</p>
                  </ScoreDiv>
                );
              })
            ) : (
              <p>No one have taken this quiz yet</p>
            )}
          </>
        </div>
      </ProfileContainerDiv>
    </>
  );
};

export default ProfilContainer;
