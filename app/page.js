import Image from 'next/image';
import logo from '../public/hslogo.png';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="hero-container min-h-screen p-6 flex flex-col">
        <header className="flex justify-between items-center mb-10">
          <Link href="/">
            <Image src={logo} alt="Logo" width={50} height={50} />
          </Link>
          <Link href='/resume'>
            <h1 className="text-2xl font-semibold">Resume</h1>
          </Link>
        </header>
        <main className="flex flex-col lg:flex-row justify-around items-center">
          <section className="text-center lg:text-left mb-6 lg:mb-0">
            <h1 className="text-6xl font-serif mb-4">Holly Samagaio</h1>
            <p className="text-xl font-light">Dedicated Social Worker and Navy Veteran</p>
          </section>
          <aside className="text-lg font-sans">
            <h2 className="font-medium mb-2">Bachelors of Social Work</h2>
            <h2 className="font-medium mb-2">Navy Veteran</h2>
            <h2 className="font-medium">Community Engagement Enthusiast</h2>
          </aside>
        </main>
        <footer className="mt-10 text-center">
          <p className="text-xl">Contact: hollysamagaio@yahoo.com</p>
        </footer>
      </div>
    </>
  );
}