import { Spinner } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <Spinner label="Loading..." />
    </div>
  );
}
