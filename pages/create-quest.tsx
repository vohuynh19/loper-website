import Head from "next/head";
import CreateQuest from "~/features/quest/ui/CreateQuest";

const View = () => {
  return (
    <>
      <Head>
        <title>Create quest</title>
      </Head>
      <CreateQuest />
    </>
  );
};

export default View;
