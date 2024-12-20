import { Link } from "react-router-dom";

const NavList = () => (
    <div className="flex-row">
        <Link to="/projects"><p className="text-2xl hover:text-sky-800 cursor-pointer">Projects</p></Link>
        <Link to="/blog"><p className="text-2xl hover:text-sky-800 cursor-pointer">Blog</p></Link>
        <Link to="/contact"><p className="text-2xl hover:text-sky-800 cursor-pointer">Contact</p></Link>
  </div>
);

const Name = () => (
    <div className="flex-col cursor-default">
      <p className="text-9xl">Clayton</p>
      <p className="text-6xl">Wasmund</p>
    </div>
);

const Grid = () => (
  <div className="grid grid-cols-6 grid-rows-6 gap-4 min-h-screen max-h-screen">
    <div className="col-start-1 row-start-1 md:col-start-2 md:row-start-2 xl:col-start-3 xl:row-start-3">
      <Name />
    </div>
    <div className="col-start-6 row-start-5 md:col-start-4 md:row-start-4 lg:col-start-5 2xl:col-start-4">
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