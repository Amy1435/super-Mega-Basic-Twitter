"use client";
import Link from "next/link";
const Nav = () => {
  return (
    <nav className="w-full flex justify-between items-center">
      <div>
        <Link href="/">
          <h1 className="font-outfit font-semibold text-lg uppercase text-white md:text-xl">Megatwitter</h1>
        </Link>
      </div>
      <ul className="flex gap-3 text-white text-base font-outfit-100 md:text-lg md:gap-5">
        <li>
          <Link href="/tweets">
            <p>Tweets</p>
          </Link>
        </li>
        <li>
          <Link href="/create-tweet">
            <>Create Tweet</>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
