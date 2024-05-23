import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsInstagram,
  BsGithub,
  BsDribbble,
  BsLinkedin,
  BsTwitterX,
} from "react-icons/bs";
export default function FooterCom() {
  return (
    <Footer container className="rounded-none border border-stone-600">
      <div className="w-full max-w-7xl mx-auto">
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <div className="">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 rounded-s-lg bg-gradient-to-r from-zinc-800 via-stone-500">
                Story
              </span>
              Speaks
            </Link>
          </div>

          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              target="_blank"
              href="https://yogeshprakhar.netlify.app/"
              icon={BsDribbble}
            />
            <Footer.Icon
              target="_blank"
              href="https://www.linkedin.com/in/yogeshprakhar/"
              icon={BsLinkedin}
            />
            <Footer.Icon
              target="_blank"
              href="https://github.com/yogeshprakhar"
              icon={BsGithub}
            />
            <Footer.Icon
              target="_blank"
              href="https://www.instagram.com/yogeshprakhar/"
              icon={BsInstagram}
            />
            <Footer.Icon
              target="_blank"
              href="https://x.com/PrakharYogesh"
              icon={BsTwitterX}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
