import UniversalSearch from "@quest/components/UniversalSearch";
import {
  DecorateImg,
  Desc,
  Title,
  Wrapper,
  DecorateImg1,
  DecorateImg2,
} from "./styled";

const HomeSearchQuest = () => {
  return (
    <Wrapper>
      <Title>Welcome to Funding Block</Title>
      <Desc>
        Meet other users like you. Get answers & discover new ways to use
        Funding Block.
      </Desc>
      <UniversalSearch />
      <DecorateImg src="https://raroin.creabik.com/assets/img/logos/raroin.svg" />
      <DecorateImg1 src="https://raroin.creabik.com/assets/img/logos/raroin.svg" />{" "}
      <DecorateImg2 src="https://raroin.creabik.com/assets/img/logos/raroin.svg" />
    </Wrapper>
  );
};

export default HomeSearchQuest;
