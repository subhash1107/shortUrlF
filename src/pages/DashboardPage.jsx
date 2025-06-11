import UrlForm from '../components/UrlForm'
import ShowUrls from '../components/ShowUrls'

const DashboardPage = () => {
  return (
    <div className="min-h-screen  justify-center items-center flex flex-col">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h1 className="mb-6 text-center font-bold text-2xl">URL Shortner</h1>
        <UrlForm />
        <ShowUrls/>
      </div>
    </div>
  )
}

export default DashboardPage