import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

function PrivateRoute({ children }) {
  const currentUser = useSelector(selectCurrentUser);
  // const { isAllow } = useContext(UserContext);

  if (!currentUser) {
    // not logged in so redirect to login page with the return url

    return <Navigate to="/login" />;
  }

  // authorized so return child components
  return children;
}

export default PrivateRoute;
