export type PaginationParams = {
  filter: {};
  sort: {};
  limit: 10;
  page: 1;
};

type CreateQuestParams = {
  userAddress: string;
  imageLink: string;
  questAddress: string;
  title: string;
  category: string;
  tag: string;
  timeEnd: number;
  fund: number;
};

type CreateSolutionParams = {
  solutionAddress: string;
  questAddress: string;
  userAddress: string;
  content: string;
  imageLink: string;
};

type VoteParams = {
  funderAddress: string;
  solutionAddress: string;
  isVote: boolean;
};

export type MutateParams =
  | VoteParams
  | CreateQuestParams
  | CreateSolutionParams;
