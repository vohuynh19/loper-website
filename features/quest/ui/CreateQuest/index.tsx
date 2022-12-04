import { useState } from "react";

import { useAppState } from "@src/contexts/AppContext";
import { useLocale } from "@src/hooks/useLocale";

import CreateQuestForm from "./CreateQuestForm";
import WalletRequired from "@components/WalletRequired";
import AuthRequired from "@components/AuthRequired";
import { Content, Wrapper } from "./styled";

const CreateQuest = () => {
  const { user } = useAppState();
  const { t } = useLocale("quest");

  const [isConnectWallet, setIsConnectWallet] = useState(false);

  return (
    <Wrapper>
      {!user.email ? (
        <AuthRequired />
      ) : (
        <Content>
          {isConnectWallet ? (
            <CreateQuestForm />
          ) : (
            <WalletRequired
              title={t("createQuest")}
              onConnected={() => setIsConnectWallet(true)}
            />
          )}
        </Content>
      )}
    </Wrapper>
  );
};

export default CreateQuest;
