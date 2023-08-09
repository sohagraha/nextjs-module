import { useRouter } from "next/router";
import React from "react";

const ErrorPage = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 2000);
  return (
    <div>
      <img
        style={{
          width: "100%",
          height: "100vh",
        }}
        src="https://blog.thomasnet.com/hs-fs/hubfs/shutterstock_774749455.jpg?width=600&name=shutterstock_774749455.jpg"
        alt=""
      />
    </div>
  );
};

export default ErrorPage;
