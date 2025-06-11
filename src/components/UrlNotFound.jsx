

const UrlNotFound = () => {
  return (
          <div className="text-center text-gray-500 my-6 p-6 bg-gray-50 rounded-lg shadow-sm">
        <svg
          className="w-12 h-12 mx-auto text-gray-400 mb-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.414-1.414m2.828-2.828a4 4 0 005.656-5.656l-4-4a4 4 0 00-5.656 5.656"
          />
        </svg>
        <p className="text-lg font-semibold">No URLs found!</p>
        <p className="mt-1 text-sm text-gray-400">
          You haven't created any short URL yet.
        </p>
      </div>
  )
}

export default UrlNotFound