import { useAppContext } from "../../context/appContext";

export default function Alert() {
  const { alertType, alertText } = useAppContext();

  return (
    <div
      className={`${
        alertType === "danger" ? "bg-red-100" : "bg-green-100"
      } p-2 ${
        alertType === "danger" ? "text-red-500" : "text-green-500"
      } text-center mb-4 rounded-md`}
    >
      {alertText}
    </div>
  );
}
