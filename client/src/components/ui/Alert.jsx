import { useAppContext } from "../../context/appContext";

export default function Alert() {
  const { alertType, alertText } = useAppContext();

  return (
    <div
      className={`bg-${alertType}-100 p-2 text-${alertType}-500 text-center mb-4 rounded-md`}
    >
      {alertText}
    </div>
  );
}
