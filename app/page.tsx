import Link from "next/link";

export default function Home() {
  return (
   <section>
    <h1 className="text-7xl font-extrabold text-center mt-10">Welcome</h1>
    <nav className="fixed left-[50%] top-8 flex w-fit -translate-x-[50%] items-center gap-6 rounded-lg border-[1px] border-neutral-700 bg-neutral-900 p-2 text-sm text-neutral-500"><svg width="24" height="auto" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2 fill-neutral-50"><path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" stop-color="#000000"></path><path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" stop-color="#000000"></path></svg>
    <Link href='/test'>Test</Link></nav>
   </section>
  );
}
