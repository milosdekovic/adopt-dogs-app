import { Alert } from "@mantine/core";

interface ErrorComponentProps {
  message: string;
}

const ErrorComponent = ({ message }: ErrorComponentProps) => {
  return (
    <Alert className="text-center" color="red">
      {message}
    </Alert>
  );
};

export default ErrorComponent;
