const UrlTable = ({ urls, isCopiedId, handleCopy }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 bg-blue-50 border-b border-blue-100">
        <h2 className="text-xl font-semibold text-blue-800">
          Your Shortened URLs
        </h2>
        <p className="text-sm text-blue-600 mt-1">
          Manage all your shortened links
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Original URL
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Short URL
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Clicks
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {urls?.urls?.map((url) => (
              <tr key={url._id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">
                  {url.fullUrl}
                </td>
                <td className="px-6 py-4 text-sm text-blue-600">
                  <a
                    href={`http://localhost:5000${url.shortUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {`http://localhost:5000${url.shortUrl}`}
                  </a>
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-gray-100 rounded">
                    {url.clicks} {url.clicks === 1 ? "click" : "clicks"}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <button
                    onClick={() =>
                      handleCopy(`http://localhost:5000${url.shortUrl}`, url._id)
                    }
                    className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition"
                  >
                    <span className="mr-2">
                      {isCopiedId === url._id ? (
                        // Checkmark icon
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
                      ) : (
                        // Copy icon
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
                      )}
                    </span>
                    {isCopiedId === url._id ? "Copied" : "Copy URL"}
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
