import { uuid } from "@src/utils/functions/uuid";

import Reply from "./Reply";
import Quest from "./Quest";
import RecentActivities from "@quest/components/RecentActivities";

import {
  Replies,
  Title,
  Wrapper,
  Container,
  LeftCol,
  RightCol,
} from "./styled";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import axiosInstance from "@src/apis/axios";
import { ENDPOINTS } from "@src/apis/endpoints";
import { DEFAULT_FILTER } from "@src/apis/types";
import { CommentModel, QuestModel } from "@quest/types/models";
import { Button } from "antd";
import CommentModal from "./CommentModal";
import { useRef } from "react";

const QuestDetail = () => {
  const questReplies = [{}, {}];
  const router = useRouter();
  const { slug } = router.query;
  const id = (slug as string[])?.[0];
  const modalRef = useRef<any>(null);

  const { data: questDetail } = useQuery(`get/quest/${id}`, () =>
    axiosInstance.post(ENDPOINTS.QUEST.GET, {
      ...DEFAULT_FILTER,
      filter: {
        _id: id,
      },
    })
  );

  const questDetailData: QuestModel = (questDetail?.data as any)?.docs?.[0];

  const { data: commentData } = useQuery(
    `get/commentData`,
    () =>
      axiosInstance.post(ENDPOINTS.COMMENT.GET, {
        ...DEFAULT_FILTER,
        filter: {
          questAddress: questDetailData.questAddress,
        },
      }),
    {
      enabled: !!questDetailData,
    }
  );

  const commentDataArr: CommentModel[] = (commentData?.data as any)?.docs;

  const openComment = () => {
    modalRef.current.open(questDetailData);
  };

  return (
    <Container>
      <Wrapper>
        <LeftCol>
          <Quest
            title={questDetailData?.title}
            description={questDetailData?.description}
            likeNum={questDetailData?.like}
            category={questDetailData?.category}
            tags={questDetailData?.tag}
          />

          <Replies>
            <Title>
              All Replies <Button onClick={openComment}>Comment</Button>
            </Title>

            {(commentDataArr || []).map((reply) => {
              return (
                <Reply like={reply.like} content={reply.content} key={uuid()} />
              );
            })}
          </Replies>
        </LeftCol>

        <RightCol>
          <RecentActivities
            title="Recent Topics"
            activities={[{}, {}, {}, {}, {}, {}]}
          />
          <RecentActivities
            title="Recent Replies"
            activities={[{}, {}, {}, {}, {}, {}]}
          />
        </RightCol>
      </Wrapper>

      <CommentModal ref={modalRef} />
    </Container>
  );
};

export default QuestDetail;
