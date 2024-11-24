import Image from 'next/image'

export default function NotFound() {
  return (
    <section className='flex flex-col items-center justify-center w-full min-h-[400px] h-[calc(100vh-80px)] gap-5 space-y-5'>
      <div className='relative w-[311px] h-[126px] lg:w-[374.48px] lg:h-[151px]'>
        <Image src={"/images/404.png"} alt="404" fill />
      </div>
      <h2 className=' text-[16px] lg:text-[32px] font-bold'>Opps!</h2>
      <p className='text-[12px] lg:text-[20px] font-normal text-[#484848]'>We couldn’t find the page address for you</p>
    </section>
  )
}
