import Link from "next/link";
import { FaSpotify, FaHome, FaSearch } from "react-icons/fa";
import { RiHome2Fill } from "react-icons/ri";
import { IoAdd } from "react-icons/io5";
import { BiLibrary } from "react-icons/bi";
import { MdLanguage } from "react-icons/md";

export default function Sidebar() {
  const links = [
    {
      name: "Legal",
      url: "/",
    },
    {
      name: "Safety & Privacy Center",
      url: "/",
    },
    {
      name: "Privacy Policy",
      url: "/",
    },
    {
      name: "Cookies",
      url: "/",
    },
    {
      name: "About Ads",
      url: "/",
    },
    {
      name: "Accessibility",
      url: "/",
    },
  ];

  return (
    <aside className="h-screen min-w-[19rem] max-w-[20rem]">
      <div className="bg-neutral-900 rounded-lg px-6 py-4 flex flex-col gap-4">
        <Link href={"/"} className="flex gap-2 items-center font-bold text-sm">
          <span className="text-xl">
            <FaSpotify />
          </span>
          Spotify
        </Link>
        <Link
          href={"/"}
          className="flex gap-4 items-center text-white font-bold hover:text-white transition"
        >
          {" "}
          <span className="text-xl">
            <RiHome2Fill />
          </span>{" "}
          Home
        </Link>
        <Link
          href={"/"}
          className="flex gap-4 items-center font-medium text-neutral-300 hover:text-white transition"
        >
          {" "}
          <span className="text-xl">
            <FaSearch />
          </span>{" "}
          Search
        </Link>
      </div>

      <div className="bg-neutral-900 rounded-lg px-2 flex flex-col gap-4 mt-1 text-sm pb-10">
        <div className="flex items-center justify-between px-6 py-4">
          <h1 className="font-semibold hover:text-white transition cursor-pointer flex items-center gap-2 text-neutral-400">
            <span className="text-xl">
              <BiLibrary />
            </span>
            Your Library
          </h1>
          <button
            title="Create playlist or folder"
            className="hover:bg-neutral-800 text-lg text-neutral-400 hover:scale-110 transition p-1 rounded-full hover:text-white"
          >
            <IoAdd />
          </button>
        </div>
        <div className="bg-neutral-800 p-3 rounded-lg">
          <h2 className="font-bold mb-2">Create you first playlist</h2>
          <p className="text-xs font-medium">It&apos;s easy we will help you</p>
          <button className="bg-white px-4 py-2 rounded-2xl text-black font-bold text-xs mt-4 hover:scale-105 transition">
            Create playlist
          </button>
        </div>
        <div className="bg-neutral-800 p-3 rounded-lg">
          <h2 className="font-bold mb-2">Let&apos;s find some podcasts to follow</h2>
          <p className="text-xs font-medium">
            We&apos;ll keep you updated on new episodes
          </p>
          <button className="bg-white px-4 py-2 rounded-2xl text-black font-bold text-xs mt-4 hover:scale-105 transition">
            Browse podcasts
          </button>
        </div>

        <div className="font-medium px-6 mt-10">
          <div className="flex flex-wrap gap-3 mb-2">
            {links.map((link) => (
              <Link key={link.name} href={link.url} className="text-neutral-400 text-[10px]">
                {link.name}
              </Link>
            ))}
          </div>
          <Link
            href="/"
            className="text-xs text-neutral-400 hover:underline hover:text-white"
          >
            Cookies
          </Link>
        </div>
        <button className="text-start mx-6 px-4 border border-neutral-400 hover:border-white hover:scale-105 py-1 w-fit rounded-3xl flex items-center gap-1 font-semibold mt-4">
          <span className="text-xl">
            <MdLanguage />
          </span>
          English
        </button>
      </div>
    </aside>
  );
}
