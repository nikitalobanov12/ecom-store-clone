import React from "react";
import Link from "next/link";
const Success = () => {
  return (
    <>
      {" "}
      <div className="flex min-h-screen flex-col items-center justify-between p-24 text-4xl">
        Order Completed
        <Link href={"/"} className="bg-blue-500 px-8 py-4 rounded-lg hover:bg-blue-700 transition">Back Home</Link>
      </div>
    </>
  );
};

export default Success;
