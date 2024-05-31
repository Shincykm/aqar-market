import Link from "next/link"

const NotFound = () => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen px-4">
        <h2 className="text-2xl ">Sorry the page you are looking is not found</h2>
        <Link href="/" className="underline text-primary-green">Return to Home</Link>
    </div>
  )
}

export default NotFound