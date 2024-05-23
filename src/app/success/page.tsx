"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function Hello() {
  const router = useRouter();

  return (
    <div
      key="1"
      className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900"
    >
      Call successfully submitted!
      <button
        className="m-10 text-gray-500"
        onClick={() => router.push("/tips")}
      >
        {" "}
        next page
      </button>
    </div>
  );
}
