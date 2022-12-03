import { Tag, Space, Avatar } from "antd";
import { FC } from "react";
import { useLocale } from "~/src/hooks/useLocale";
import { uuid } from "~/src/utils/functions/uuid";
import {
  Header,
  HeadInfo,
  QuestTitle,
  GroupName,
  QuestContribute,
  ContributeArea,
  UserWrapper,
  UserTitle,
  PoolArea,
  CountdownDate,
  TotalAsset,
} from "../styled";

type Props = {
  questTitle: string;
  groupName: string;
  solverList: any[];
  donatorList: any[];
  timeOut: string;
  totalFund: number;
};

const QuestDetailHeader: FC<Props> = ({
  questTitle,
  groupName,
  solverList,
  donatorList,
  timeOut,
  totalFund,
}) => {
  const { t } = useLocale("quest");

  return (
    <>
      <Header>
        <HeadInfo>
          <QuestTitle>{questTitle}</QuestTitle>
          <GroupName>{groupName}</GroupName>
        </HeadInfo>
        <div>
          <Tag color="green">{t("questStatus.open")}</Tag>
        </div>
      </Header>

      <QuestContribute>
        <ContributeArea>
          <UserWrapper>
            <UserTitle>{t("role.solver")}</UserTitle>
            <Space>
              {solverList.map((solver) => (
                <Avatar key={uuid()} src={"/"} />
              ))}
            </Space>
          </UserWrapper>

          <UserWrapper>
            <UserTitle>{t("role.donator")}</UserTitle>
            <Space>
              {donatorList.map((donator) => (
                <Avatar key={uuid()} src={"/"} />
              ))}
            </Space>
          </UserWrapper>
        </ContributeArea>

        <PoolArea>
          <CountdownDate>{timeOut}</CountdownDate>
          <TotalAsset>{`${totalFund} LOPER`}</TotalAsset>
        </PoolArea>
      </QuestContribute>
    </>
  );
};

export default QuestDetailHeader;
