import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Image 
        src="https://res.cloudinary.com/dgxomkis0/image/upload/v1692650025/stizer_spuria_web_r_12_t4rhqe.jpg"
        width={1200}
        height={800}
        alt="Interior architectural photo"
        />
      </div>
    </main>
  )
}
