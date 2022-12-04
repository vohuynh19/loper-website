import Image from "next/image";
import { Wrapper, LoginBox, SignButton, Title } from "./styled";
import FavIcon from "~/public/favicon.ico";
import { useLocale } from "@src/hooks/useLocale";
import { useAppState } from "@src/contexts/AppContext";

const AuthRequired = () => {
  const { t } = useLocale("common");
  const { user, setUser } = useAppState();

  const loginHandler = () => {
    setUser({ ...user, email: "vohuynh01092002@gmail.com" });
  };

  return (
    <Wrapper>
      <Image width={100} height={100} alt="fav" src={FavIcon} />
      <LoginBox>
        <Title>{t("authRequiredDesc")}</Title>
        <SignButton onClick={loginHandler}>Google</SignButton>
        <SignButton onClick={loginHandler}>Facebook</SignButton>
        <SignButton onClick={loginHandler}>Twitter</SignButton>
      </LoginBox>
    </Wrapper>
  );
};

export default AuthRequired;
