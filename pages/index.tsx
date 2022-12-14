import Head from "next/head";

import UniversalSearchQuest from "@quest/ui/UniversalSearchQuest";
import QuestCategories from "@quest/ui/QuestCategories";
import TopUserList from "@user/ui/TopUserList";

const View = () => {
  return (
    <>
      <Head>
        <title>Loper website</title>
      </Head>

      <UniversalSearchQuest />
      <QuestCategories />
      <TopUserList />
    </>
  );
};

export default View;
