export type QuestModel = {
  _id: string;
  title: string;
  category: string;
  like: number;
  timeEnd: number;
  numFunder: number;
  voted: number;
  fund: number;
  solverAddress: string[];
  funderAddress: string[];
  closed: QuestStatus;
  createdAt: string;
  updatedAt: string;
  description: string;
  tag: string;
  questAddress: string;
};

export type CommentModel = {
  content: string;
  createdAt: string;
  imageLink: string;
  like: number;
  numVote: number;
  questAddress: string;
  solutionAddress: string;
  updatedAt: string;
  userAddress: string;
  _id: string;
};

enum QuestStatus {
  FALSE = "FALSE",
  TRUE = "TRUE",
  PARTIAL = "PARTIAL",
}
