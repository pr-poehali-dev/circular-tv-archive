
import { Link } from 'react-router-dom'

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Добро пожаловать!</h1>
      <div className="flex flex-col gap-4">
        <Link 
          to="/circular" 
          className="py-2 px-4 bg-[#9b87f5] text-white rounded-md hover:bg-[#7E69AB] transition-colors"
        >
          Телеканал Циркуляр
        </Link>
      </div>
    </div>
  )
}
