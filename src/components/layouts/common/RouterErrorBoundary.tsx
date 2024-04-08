import { useRouteError } from "react-router-dom";

export default function RouterErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  return <div>Dang!</div>;
}
