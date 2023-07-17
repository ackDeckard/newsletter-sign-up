import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="lg:hidden">
        <Image
          src="/illustration-sign-up-mobile.svg"
          alt=""
          width={0}
          height={0}
        ></Image>
      </div>
      <div className="sm:hidden md:hidden lg:block">
        <Image
          src="/illustration-sign-up-desktop.svg"
          alt=""
          width={0}
          height={0}
          className="w-full"
        ></Image>
      </div>
    </main>
  );
}
