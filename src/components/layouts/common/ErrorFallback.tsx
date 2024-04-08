import React from "react";

type ErrorFallbackProps = {
  error?: any;
  resetErrorBoundary?: () => void;
};

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error }) => {
  console.log("ERROR MESSAGE", error);

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error?.message}</pre>
    </div>
  );
};

export default ErrorFallback;
