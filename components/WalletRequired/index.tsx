import { useLocale } from "@src/hooks/useLocale";
import { FC } from "react";
import { Button } from "..";
import { Desc, Title, Wrapper } from "./styled";

type Props = {
  title: string;
  onConnected: (metaData: any) => void;
};
const WalletRequired: FC<Props> = ({ title, onConnected }) => {
  const { t } = useLocale("common");

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Desc>{t("selectWalletPlaceholder")}</Desc>
      <Button onClick={onConnected}>{t("selectWallet")}</Button>
    </Wrapper>
  );
};

export default WalletRequired;
