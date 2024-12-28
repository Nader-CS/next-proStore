"use client";

import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import { Button } from "../ui/button";

const NotFoundUrl = ({ title, message, buttonMessage }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src={"/images/logo.svg"}
        width={48}
        height={48}
        alt={`${APP_NAME} logo`}
        priority
      />
      <div className="p-6 w-1/3 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-destructive">{message}</p>
        <Button
          variant="outline"
          className="mt-4 ml-2"
          onClick={() => (window.location.href = "/")}
        >
          {buttonMessage}
        </Button>
      </div>
    </div>
  );
};
export default NotFoundUrl;
