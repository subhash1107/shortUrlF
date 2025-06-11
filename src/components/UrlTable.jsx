const UrlTable = ({ urls, isCopiedId, handleCopy }) => {
  return (
    <div className="bg-white rounded-lg shadow-md mt-6 w-full">
      <div className="p-4 bg-blue-50 border-b border-blue-100 rounded-t-lg">
        <h2 className="text-lg font-semibold text-blue-800 text-center">
          Your Shortened URLs
        </h2>
        <p className="text-sm text-blue-600 text-center mt-1">
          Manage your shortened links
        </p>
      </div>

      <div className="overflow-x-auto h-48">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs tracking-wide">
            <tr>
              <th className="px-4 py-2">Original</th>
              <th className="px-4 py-2">Short</th>
              <th className="px-4 py-2">Clicks</th>
              <th className="px-4 py-2 text-center">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {[...urls.urls]?.reverse().map((url) => (
              <tr key={url._id} className="hover:bg-gray-50">
                <td className="px-4 py-3 max-w-[120px] truncate text-gray-800">
                  {url.fullUrl}
                </td>

                <td className="px-4 py-3 text-blue-600">
                  <a
                    href={`http://localhost:5000/${url.shortUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline break-all"
                  >
                    {`localhost:5000/${url.shortUrl}`}
                  </a>
                </td>

                <td className="px-4 py-3 text-gray-700">
                  <span className="inline-block bg-gray-100 px-2 py-0.5 rounded text-xs">
                    {url.clicks} {url.clicks === 1 ? "click" : "clicks"}
                  </span>
                </td>

                <td className="px-4 py-3 text-center">
                  <button
                    onClick={() =>
                      handleCopy(`http://localhost:5000${url.shortUrl}`, url._id)
                    }
                    className="flex items-center justify-center gap-1 px-3 py-1.5 border border-gray-300 rounded text-xs text-gray-700 hover:bg-gray-100 transition"
                  >
                    {isCopiedId === url._id ? (
                      <>
                        <svg
                          className="w-4 h-4 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Copied
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8 16h8m-4-4h4m1-5a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h5l2 2h5z"
                          />
                        </svg>
                        Copy URL
                      </>
                    )}
                  </button>
                </td>
              </tr>
            ))}

            {urls?.urls?.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-500">
                  No URLs found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UrlTable;
