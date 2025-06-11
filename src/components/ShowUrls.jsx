import { useQuery } from "@tanstack/react-query";
import { getAllUserUrls } from "../api/user.api";
import { useState } from "react";
import UrlTable from "./UrlTable";
import UrlNotFound from "./UrlNotFound";

const ShowUrls = () => {
  const {
    data: urls,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["userUrls"],
    queryFn: getAllUserUrls,
    refetchInterval: 30000,
    staleTime: 0,
  });
  const [isCopiedId, setIsCopiedId] = useState(null);
  const handleCopy = (url, id) => {
    navigator.clipboard.writeText(url);
    setIsCopiedId(id);
    setTimeout(() => {
      setIsCopiedId(null);
    }, 2000);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center my-8">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 text-blue-500" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-8">
        Error loading your URLs: {error.message}
      </div>
    );
  }

  if (!urls.urls || urls.urls.length === 0) {
    return <UrlNotFound />;
  }
  return (
    <UrlTable handleCopy={handleCopy} isCopiedId={isCopiedId} urls={urls} />
  );
};

export default ShowUrls;
