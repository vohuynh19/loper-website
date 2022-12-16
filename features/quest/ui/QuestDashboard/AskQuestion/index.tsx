import { PAGE_ROUTES } from "@src/utils/constants/routes";
import Link from "next/link";
import { AskButton, Content, Desc, Icon, Title, Wrapper } from "./styled";

const AskQuestion = () => {
  return (
    <Wrapper>
      <Icon src="https://wordpress-theme.spider-themes.net/ama/wp-content/themes/ama/assets/img/forum/answer.png" />

      <Content>
        <Title>Can’t find an answer?</Title>
        <Desc>Make use of a qualified tutor to get the answer</Desc>
      </Content>

      <Link href={PAGE_ROUTES.CREATE_QUEST}>
        <AskButton>Ask a Question</AskButton>
      </Link>
    </Wrapper>
  );
};

export default AskQuestion;
