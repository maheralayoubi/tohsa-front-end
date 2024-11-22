import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-[calc(100vh-80px)] bg-slate-200 gap-5'>
      <h2 className='text-2xl'>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className='bg-slate-700 p-2 rounded text-white' href="/">Return Home</Link>
    </div>
  )
}