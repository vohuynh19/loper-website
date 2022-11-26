export const PAGE_ROUTES = {
  DASHBOARD: "/",
  CREATE_QUEST: "/create-quest",
  QUEST: "/quest",
  MY_PROFILE: "/my-profile",
  PROFILE: "/profile",
};

export const PUBLIC_ROUTES = [
  PAGE_ROUTES.DASHBOARD,
  PAGE_ROUTES.CREATE_QUEST,
  PAGE_ROUTES.QUEST,
  PAGE_ROUTES.PROFILE,
];

export const PRIVATE_ROUTES = [PAGE_ROUTES.QUEST];
