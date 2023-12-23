import React from "react";
import Link from "next/link";
const Cancel = () => {
  return (
    <>
      {" "}
      <div className="flex min-h-screen flex-col items-center justify-between p-24 text-4xl">
        Order Canceled
        <Link
          href={"/"}
          className="bg-blue-500 px-8 py-4 rounded-lg hover:bg-blue-700 transition"
        >
          Back Home
        </Link>
      </div>
    </>
  );
};

export default Cancel;
