import { useState } from "react";
import Button from "../../shared/buttons/button/Button";
import Input from "../../shared/inputs/input/Input";
import {
  BackgroundImage,
  ContainerLogin,
  LimitedContainer,
  LogoImage,
  Titlelogin,
  ContainerLoginScreen,
} from "../styles/LoginScreen.styles";

const LoginScreen = () => {
  const [username, setUsername] = useState("");

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value + "DD");
  };

  return (
    <ContainerLoginScreen>
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo2.png" />
          <Titlelogin level={2} type="secondary">
            LOGIN
          </Titlelogin>
          <Input title="USUÁRIO" margin="32px 0px 0px" onChange={handleUsername} />
          <Input title="SENHA" margin="32px 0px 0px" />
          <Button type="primary" margin="64px 0px 16px 0px">
            ENTRAR
          </Button>
        </LimitedContainer>
      </ContainerLogin>
      <BackgroundImage src="./03.png" />
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
