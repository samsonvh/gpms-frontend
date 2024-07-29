import { Button } from "@/components/ui/button";
import React from "react";

const UploadButton = ({
  fileInputRef,
}: {
  fileInputRef: React.MutableRefObject<HTMLInputElement | null>;
}) => {
  return (
    <Button
      type="button"
      className="w-full"
      onClick={() => fileInputRef.current?.click()}
    >
      Upload
    </Button>
  );
};

export default UploadButton;
