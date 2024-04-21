import React from "react";
import SyncLoader from "react-spinners/SyncLoader";

const Loader: React.FC = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <SyncLoader color="#36d7b7" />
    </div>
  );
};

export default Loader;
