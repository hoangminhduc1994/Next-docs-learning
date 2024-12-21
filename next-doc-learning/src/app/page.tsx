import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      click{" "}
      <Link href="/documents/123">
        <span className="text-blue-500 underline">&nbsp;here&nbsp;</span>
      </Link>{" "}
      to go to documents
    </div>
  );
};

export default Home;
