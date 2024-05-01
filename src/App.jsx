import { Stack } from "@mui/material";
import { LoginPage, HomePage } from "./Pages";
import { useLoginContext } from "./context/LoginContext";

const App = () => {
  const { userLogin } = useLoginContext();

  // we can achive this behaviour with react router dom also
  // but i choose this to keep things simple
  return <Stack>{userLogin ? <HomePage /> : <LoginPage />}</Stack>;
};

export default App;
