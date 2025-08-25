const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <div>Logo</div>
      <div>
        <ul className=" text-xl flex gap-8">
          <li>Home</li>
          <li>Home</li>
          <a href="/contact">
            <li>Contact</li>
          </a>
          <a href="/about">
            <li>About</li>
          </a>
        </ul>
      </div>
      <div className="flex gap-4">
        <a href="/login">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Login
          </button>
        </a>

        <a href="/register">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Register
          </button>
        </a>
      </div>
    </div>
  );
};

export default Header;
