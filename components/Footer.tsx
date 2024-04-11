import Link from "next/link";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const company = [
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Jobs",
      url: "/jobs",
    },
    {
      name: "For the Record",
      url: "/fortherecord",
    },
  ];

  const communities = [
    {
      name: "For Artists",
      url: "/",
    },
    {
      name: "Developers",
      url: "/",
    },
    {
      name: "Advertising",
      url: "/",
    },
    {
      name: "Investors",
      url: "/",
    },
    {
      name: "Vendors",
      url: "/",
    },
  ];

  const usefulLinks = [
    {
      name: "Support",
      url: "/",
    },
    {
      name: "Free Mobile App",
      url: "/",
    },
  ];

  const spotifyPlans = [
    {
      name: "Premium Individual",
      url: "/",
    },
    {
      name: "Premium Duo",
      url: "/",
    },
    {
      name: "Premium Family",
      url: "/",
    },
    {
      name: "Premium Student",
      url: "/",
    },
    {
      name: "Premium Free",
      url: "/",
    },
  ];

  const socials = [
    {
      id: 1,
      icon: <FaInstagram />,
      url: "/",
    },
    {
      id: 2,
      icon: <FaTwitter />,
      url: "/",
    },
    {
      id: 3,
      icon: <FaFacebook />,
      url: "/",
    },
  ];

  return (
    <footer className="text-sm px-6 mt-10">
      <div className="flex justify-between border-b pb-10 mb-10 border-neutral-700">
        <div className="flex gap-[6rem]">
          <div>
            <h1 className="font-bold mb-1">Company</h1>
            <div className="flex flex-col gap-1 font-medium">
              {company.map((company) => (
                <Link
                  key={company.name}
                  href={company.url}
                  className="text-neutral-400 hover:underline hover:text-neutral-100 w-fit"
                >
                  {company.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h1 className="font-bold mb-1">Communities</h1>
            <div className="flex flex-col gap-1 font-medium">
              {communities.map((community) => (
                <Link
                  key={community.name}
                  href={community.url}
                  className="text-neutral-400 hover:underline hover:text-neutral-100 w-fit"
                >
                  {community.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h1 className="font-bold mb-1">Useful links</h1>
            <div className="flex flex-col gap-1 font-medium">
              {usefulLinks.map((links) => (
                <Link
                  key={links.name}
                  href={links.url}
                  className="text-neutral-400 hover:underline hover:text-neutral-100 w-fit"
                >
                  {links.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h1 className="font-bold mb-1">Spotify Plans</h1>
            <div className="flex flex-col gap-1 font-medium">
              {spotifyPlans.map((plans) => (
                <Link
                  key={plans.name}
                  href={plans.url}
                  className="text-neutral-400 hover:underline hover:text-neutral-100 w-fit"
                >
                  {plans.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          {socials.map((social) => (
            <Link
              key={social.id}
              href={social.url}
              className="text-lg h-10 w-10 rounded-full flex items-center justify-center bg-neutral-800 hover:bg-neutral-700 transition"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <p className="text-neutral-400 font-medium text-xs">
          © 2024 Spotify AB
        </p>
      </div>
    </footer>
  );
}
