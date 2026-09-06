type NavbarProps = {
  name: string;
};

export default function Navbar({ name }: NavbarProps) {
  return (
<nav className="fixed top-0 left-0 w-full z-50 bg-white-900/90 backdrop-blur-sm ">
    <div className="max-w-3xl mx-auto flex items-center justify-between px-4 py-3  text-slate-100 ">

     <h1 className="text-lg font-semibold text-white-900">{name}</h1>

      <div className="flex gap-6 text-sm text-white-900/70">

        <a href="#about" className="hover:text-plum transition-colors">
          About
        </a>
                <a href="#projects" className="hover:text-plum transition-colors">
          Projects
        </a>
                <a href="#education" className="hover:text-plum transition-colors">
        Education
        </a>
        <a href="#contact" className="hover:text-plum transition-colors">
          Contact
        </a>
      </div></div>
    </nav>

  );
}
