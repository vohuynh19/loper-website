import Head from "next/head";
import QuestDashboard from "~/features/quest/ui/QuestDashboard";

const View = () => {
  return (
    <>
      <Head>
        <title>Loper website</title>
      </Head>
      <QuestDashboard />
    </>
  );
};

export default View;
