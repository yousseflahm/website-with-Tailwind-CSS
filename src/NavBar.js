

function NavBar() {
  return (
    <div>
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <img className="h-24" src="/logo1.png" alt="Logo" />
        <div className="md:flex lg:flex hidden justify-between text-slate-900">
        <a href="#section-one" className="mr-10 text-sm mt-2 text-red-500 font-bold">Home</a>
        <a href="#projects" className="mr-10 text-sm mt-2 hover:text-red-500 font-bold">Projects</a>
        <a href="#about" className="mr-10 text-sm mt-2 hover:text-red-500 font-bold">About</a>
        <a href="#contact" className="mr-10 text-sm mt-2 hover:text-red-500 font-bold">Contact</a>
        </div>
        <div className="flex justify-between">
          <h4 className="md:block lg:block mr-3 hidden bg-blue-500 px-4 py-2 hover:bg-red-500 text-white rounded-3xl">
            Sign Up
          </h4>
          <h4 className="md:block lg:block mr-3 hidden bg-blue-500 px-4 py-2 hover:bg-red-500 text-white rounded-3xl">
            Login
          </h4>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
