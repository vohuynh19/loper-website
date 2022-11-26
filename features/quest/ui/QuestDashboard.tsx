import { useLocale } from "~/src/hooks/useLocale";

const QuestDashboard = () => {
  const { t } = useLocale("quest");

  return (
    <div>
      <div>Quest dashboard</div>
    </div>
  );
};

export default QuestDashboard;
