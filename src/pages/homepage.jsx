import { Link } from "react-router-dom";

const NavList = () => (
    <div className="flex-row m-2">
        <Link to="/projects"><p className="text-5xl md:text-3xl hover:text-sky-800 cursor-pointer">Projects</p></Link>
        <Link to="/blog"><p className="text-5xl md:text-3xl hover:text-sky-800 cursor-pointer">Blog</p></Link>
        <Link to="/contact"><p className="text-5xl md:text-3xl hover:text-sky-800 cursor-pointer">Contact</p></Link>
  </div>
);

const Name = () => (
    <div className="flex-col cursor-default m-2 text-center absolute left-0 top-0 md:left-1/4 md:top-1/4 md:text-start md:justify-end md:items-end">
      <p className="text-6xl md:text-9xl">Clayton</p>
      <p className="text-5xl md:text-6xl md:ml-2">Wasmund</p>
    </div>
);

const Grid = () => (
  <div className="h-screen">
    <div className="flex">
      <Name />
    </div>
    <div className="flex justify-end items-end absolute bottom-0 right-0 md:bottom-1/4 md:right-1/4">
      <NavList />
    </div>
  </div>
);

const Homepage = () => (
    <div className="bg-gray-200">
      <Grid></Grid>
    </div>
);

export default Homepage;