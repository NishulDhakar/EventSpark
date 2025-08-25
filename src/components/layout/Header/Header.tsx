import { Button } from "../../common/Button";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 ">
      
      <div> <span></span> <span className="text-3xl font-bold">EventSpark</span></div>
      <div>
        <ul className=" text-xl flex gap-8">
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
          <Button variant="outline">
            Login
          </Button>
        </a>

        <a href="/register">
            <Button variant="outline">
              Register
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Header;
