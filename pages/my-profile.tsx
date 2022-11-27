import Head from "next/head";
import ProfileDashboard from "~/features/profile/ui/ProfileDashboard";

const View = () => {
  return (
    <>
      <Head>
        <title>My Profile</title>
      </Head>
      <ProfileDashboard />
    </>
  );
};

export default View;
