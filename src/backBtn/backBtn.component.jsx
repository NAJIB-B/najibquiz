import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { BackButton, BackIcon } from "./backBtn.style";
const BackBtn = () => {
  const navigate = useNavigate();
  const back = () => {
    console.log("back");
    navigate(-1);
  };
  return (
    <>
      <BackButton onClick={back}>
        <BackIcon icon="bi:arrow-left-square-fill" color="#33cc36" />
      </BackButton>
    </>
  );
};

export default BackBtn;
