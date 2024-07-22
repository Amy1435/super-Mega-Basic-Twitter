import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <section className=" w-full min-h-[90vh] flex items-center justify-center p-8">
      <div className="w-full h-full flex flex-col-reverse gap-8 items-center justify-center p-8 sm:p-10 md:gap-20 lg:flex-row lg:gap-20">
        <div className="flex flex-col gap-5 lg:w-2/5">
          <div className="flex flex-col gap-4 md:gap-5">
            <h1 className="font-outfit font-semibold text-4xl capitalize text-white sm:font-bold sm:text-4xl md:text-6xl lg:text-7xl">
              Benvenuto nel mondo dei tweets
            </h1>
            <p className="text-white font-roboto-100 md:text-lg lg:text-xl">
              Dai un'occhiata ai tweet più recenti, scopri nuovi punti di vista e lascia un like ai post che ti
              colpiscono di più.
            </p>
          </div>

          <div className="flex gap-2 text-white font-outfit text-sm tracking-[0.12em] sm:flex-row md:text-base md:gap-4 lg:text-lg">
            <Link href="/tweets">
              <p className="bg-green uppercase p-2 rounded-lg bg-babyblue md:p-4">Vedi Tweets</p>
            </Link>
            <Link href="/create-tweet">
              <p className="border uppercase p-2 rounded-lg md:p-4">Crea tweet</p>
            </Link>
          </div>
        </div>

        <figure>
          <Image src="/assets/twitter-logo.png" width={350} height={350} alt="tweeterlogo" />
        </figure>
      </div>
    </section>
  );
};

export default Home;
