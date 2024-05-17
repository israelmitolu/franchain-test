import Logo from "../../public/icons/Franchain logo.svg";
import RightCaret from "../../public/icons/Right Caret.svg";

const SignUp = () => {
  return (
    <nav className="nav-height flex items-center justify-between absolute top-0 left-0 h-full w-full z-[1]">
      <a href="/">
        <img src={Logo} alt="Franchain logo" className="w-auto h-12" />
      </a>
      <div className="flex-center gap-4 cursor-pointer group">
        <span>Log in</span>
        <img
          src={RightCaret}
          alt=""
          className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
        />
      </div>
    </nav>
  );
};

export default SignUp;
