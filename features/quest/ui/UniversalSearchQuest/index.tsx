import UniversalSearch from "@quest/components/UniversalSearch";
import { Desc, Title, Wrapper } from "./styled";

const HomeSearchQuest = () => {
  return (
    <Wrapper>
      <Title>Welcome to Funding Block</Title>
      <Desc>
        Meet other users like you. Get answers & discover new ways to use
        Funding Block.
      </Desc>
      <UniversalSearch />
    </Wrapper>
  );
};

export default HomeSearchQuest;
