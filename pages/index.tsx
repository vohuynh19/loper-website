import Head from "next/head";

import UniversalSearchQuest from "@quest/ui/UniversalSearchQuest";
import QuestCategories from "@quest/ui/QuestCategories";
import RecentQuests from "@quest/ui/RecentQuests";
import TopUserList from "@user/ui/TopUserList";

const View = () => {
  return (
    <>
      <Head>
        <title>Loper website</title>
      </Head>

      <UniversalSearchQuest />
      <TopUserList />
      <QuestCategories />
      <RecentQuests />
    </>
  );
};

export default View;
