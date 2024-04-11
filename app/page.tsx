import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import {artists, albums, radios} from '../data/data'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaPlay } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-neutral-900 rounded-lg overflow-scroll pb-20">
      <div className="sticky top-0 bg-opacity-90 z-10 flex justify-between items-center bg-neutral-950 rounded-lg px-4 py-2">
        <div className="flex gap-2">
          <button
            title="left"
            className="bg-neutral-800 flex items-center justify-center rounded-full p-2 cursor-not-allowed"
          >
            <MdKeyboardArrowLeft />
          </button>
          <button
            title="left"
            className="bg-neutral-800 flex items-center justify-center rounded-full p-2 cursor-not-allowed"
          >
            <MdKeyboardArrowRight />
          </button>
        </div>
        <div className="flex gap-4">
          <button className="text-sm font-bold text-neutral-400 hover:text-white">
            Sign Up
          </button>
          <button className="text-sm font-bold bg-white text-black px-8 rounded-3xl py-3 hover:scale-105">
            Log in
          </button>
        </div>
      </div>

      <section className="p-6 flex flex-col gap-4">
        <div>
          <div className="flex items-center justify-between ">
            <h1 className="font-bold text-lg">Popular Artists</h1>
            <button className="text-neutral-400 font-medium text-sm hover:underline">
              Show All
            </button>
          </div>
          <div className="flex items-center mt-1 flex-wrap">
            {artists.map((artist) => (
              <Link
                key={artist.name}
                href={artist.url}
                className="hover:bg-neutral-800 transition p-4 rounded-lg group"
              >
                <div className={`relative h-[130px] w-[130px]`}>
                  <Image
                    src={artist.imgSrc}
                    fill
                    alt={artist.name}
                    className="rounded-full object-cover"
                  />
                  <span className="group-hover:opacity-100 transition duration-500 group-hover:-translate-y-4 opacity-0 absolute -bottom-4 right-2 rounded-full p-4 bg-green-400 text-black"><FaPlay /></span>
                </div>
                <h2 className="text-sm font-bold text-neutral-300 mt-2">
                  {artist.name}
                </h2>
                <p className="text-neutral-500 text-xs font-medium">Artist</p>
              </Link>
            ))}
          </div>
        </div>
        
        {/* albums section */}
        <div>
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-lg">Popular albums</h1>
            <button className="text-neutral-400 font-medium text-sm hover:underline">
              Show All
            </button>
          </div>
          <div className="flex items-center">
            {albums.map((album) => (
              <Link
                key={album.name}
                href={album.url}
                className="hover:bg-neutral-800 transition p-4 rounded-lg group"
              >
                <div className={`relative h-[130px] w-[130px]`}>
                  <Image
                    src={album.imgSrc}
                    fill
                    alt={album.name}
                    className="rounded object-cover"
                  />
                  <span className="group-hover:opacity-100 transition duration-500 group-hover:-translate-y-4 opacity-0 absolute -bottom-1 right-2 rounded-full p-4 bg-green-400 text-black"><FaPlay /></span>
                </div>
                <h2 className="text-sm font-bold text-neutral-300 mt-2">
                  {album.name}
                </h2>
                <p className="text-neutral-500 text-xs font-medium">{album.artist}</p>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between ">
            <h1 className="font-bold text-lg">Popular Radio</h1>
            <button className="text-neutral-400 font-medium text-sm hover:underline">
              Show All
            </button>
          </div>
          <div className="flex items-center">
            {radios.map((radio) => (
              <Link
                key={radio.name}
                href={radio.url}
                className="hover:bg-neutral-800 transition p-4 rounded-lg group"
              >
                <div className={`relative h-[130px] w-[130px]`}>
                  <Image
                    src={radio.imgSrc}
                    fill
                    alt={radio.name}
                    className="rounded object-cover"
                  />
                  <span className="group-hover:opacity-100 transition duration-500 group-hover:-translate-y-4 opacity-0 absolute -bottom-1 right-2 rounded-full p-4 bg-green-400 text-black"><FaPlay /></span>
                </div>
                <h2 className="text-sm font-bold text-neutral-300 mt-2">
                  {radio.name}
                </h2>
                <p className="text-neutral-500 text-xs font-medium">Artist</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}
