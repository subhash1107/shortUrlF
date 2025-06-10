import { useState } from "react";
import ShortUrlShow from "./ShortUrlShow";
import { createShortUrl } from "../api/shortUrl.api";
import { useSelector } from "react-redux";

const UrlForm = () => {
  const [url, setUrl] = useState('');
  const [customUrl, setCustomUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const {isAuthenticated} = useSelector(store=>store.authReducer) 

  const submitHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const data = await createShortUrl(url,customUrl)
      setShortUrl(data);
      setUrl("");
      setCustomUrl('');
      setIsCopied(false);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={(e) => submitHandler(e)}>
      <div className="">
        <label
          className="block font-medium text-sm text-gray-600"
          htmlFor="url"
        >
          Enter Your URL
        </label>
        <input
          type="url"
          required
          id="url"
          placeholder="https://example.com"
          className="w-full px-4 py-2 border border-gray-300 mb-4"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        {isAuthenticated&&(<><label
          className="block font-medium text-sm text-gray-600"
          htmlFor="customUrl"
        >
          Enter Your Custom URL
        </label>
        <input
          type="text"
          id="customUrl"
          placeholder="example"
          className="w-full px-4 py-2 border border-gray-300"
          value={customUrl}
          onChange={(e) => setCustomUrl(e.target.value)}
        /></>)}
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white w-full rounded-md py-2 px-4 hover:cursor-pointer"
      >
        {loading ? "Loading..." : "Shorten URL"}
      </button>
      {error && <p className="text-red-600">{error}</p>}
      {shortUrl && (
        <ShortUrlShow
          shortUrl={shortUrl}
          isCopied={isCopied}
          setIsCopied={setIsCopied}
        />
      )}
    </form>
  );
};

export default UrlForm;
