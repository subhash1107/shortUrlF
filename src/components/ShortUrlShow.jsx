
import { FaCopy } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const ShortUrlShow = ({ shortUrl, isCopied,setIsCopied }) => {

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setIsCopied(true);
  };
  return (
    <div className="mt-6">
      <h1 className="text-lg font-semibold mb-2">Your Shorten URL:</h1>
      <div className="flex items-center">
        <input
          type="text"
          readOnly
          value={shortUrl}
          className="border border-gray-300 bg-white rounded-l-md flex-1 p-2"
        />
        <button
          type="button"
          className={`${
            isCopied
              ? "bg-green-100 border-green-200"
              : "bg-gray-200 border-gray-200 hover:bg-gray-300"
          } px-4 py-3 border rounded-r-md`}
          onClick={handleCopy}
        >
          {isCopied ? <TiTick /> : <FaCopy />}
        </button>
      </div>
    </div>
  );
};

export default ShortUrlShow;
