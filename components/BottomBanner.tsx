export default function BottomBanner() {
  return (
    <section className="flex flex-col md:flex-row gap-4 justify-between items-center bg-gradient-to-r from-pink-600 to-blue-400 px-6 py-2 fixed w-screen bottom-0 text-white font-medium text-sm border-t-black">
      <div>
        <p className="font-bold text-xs">Preview of Spotify</p>
        <p>
          Sign up to get unlimited songs and podcasts with occasional ads. No
          credit card needed.
        </p>
      </div>
      <button className="bg-white py-3 px-8 font-bold text-black rounded-3xl hover:scale-105">Sign un free</button>
    </section>
  );
}
