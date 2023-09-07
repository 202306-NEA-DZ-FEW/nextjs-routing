import Link from "next/link";

const Navbar = () => {
  return (
    <ul className="mb-10">
      <li>
        <Link href="/">
          <span className="text-blue-500">Home Page</span>
        </Link>
      </li>
      <li>
        <Link href="/posts">
          <span className="text-blue-500">All posts</span>
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
