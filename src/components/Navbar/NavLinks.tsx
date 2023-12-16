import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
  return (
    <>
      <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#about">
        About
      </HashLink>
      <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#services">
        Services
      </HashLink>
      <HashLink
        smooth
        className="text-white bg-red-900 hover:bg-black inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl"
        to="/get-demo"
      >
        Join Us
      </HashLink>
    </>
  );
};

export default NavLinks;
