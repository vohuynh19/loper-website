import { FC } from "react";

import Divider from "@quest/components/Divider";
import { uuid } from "@src/utils/functions/uuid";
import { useLocale } from "@src/hooks/useLocale";

import {
  Cover,
  QuestSectionTitle,
  QuestDesc,
  QuestAttach,
  AttachmentItem,
} from "../styled";

type Props = {
  desc: string;
  attachmentList: any[];
};

const QuestDetailBody: FC<Props> = ({ desc, attachmentList }) => {
  const { t } = useLocale("quest");

  return (
    <>
      <Cover url={"/vercel.svg"} />
      <QuestSectionTitle>{t("common.description")}</QuestSectionTitle>
      <QuestDesc>{desc}</QuestDesc>
      <Divider thickness={1} space={16} />
      <QuestSectionTitle>{t("common.attachment")}</QuestSectionTitle>
      <QuestAttach>
        {attachmentList.map((attachment: any) => (
          <AttachmentItem key={uuid()} previewUri="/vercel.svg" />
        ))}
      </QuestAttach>
    </>
  );
};

export default QuestDetailBody;
