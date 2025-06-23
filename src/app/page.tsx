import Image from "next/image";

export default function Home() {
  return (
    <div>
      <nav className="px-4 sm:px-8 py-2">
        <ul className="flex -center items-center  gap-8 text-sm sm:text-base font-medium">
          <li>
            <a
              className="flex hover:underline hover:underline-offset-4 "
              href="/about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="hover:underline hover:underline-offset-4"
              href="/about"
            >
              add to card
            </a>
          </li>
          <li>
            <a
              className="hover:underline hover:underline-offset-4"
              href="/about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="hover:underline hover:underline-offset-4"
              href="/contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="grid items-left    gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <div className="text-2xl sm:text-6xl font-bold text-center sm:text-left ">
            Bhook Lagi hai?
          </div>
          <div className="list-inside font-extrabold text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
           Order now
          </div>

        </main>
      </div>
    </div>
  );
}
