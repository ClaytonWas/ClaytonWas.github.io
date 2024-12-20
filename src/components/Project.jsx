import { Link } from "react-router-dom";

const Project = ({title, description, picture, html_link}) => (
    <div className="bg-gray-300 max-w-screen-md p-2 mb-10 w-2/3 rounded-2xl group border-2 border-gray-700 hover:border-gray-500">
        <Link to={html_link} className="flex flex-col md:flex-row">
            <div className="break-words w-full md:w-3/4 m-1">
                <p className="text-2xl font-medium group-hover:text-sky-800">{title}</p>
                <p className="text-l mt-2 mb-0 ml-1 md:mb-1">{description}</p>
            </div>
            <div className="w-full md:w-1/4 mt-4 md:mt-0">
                <img src={picture} alt="Project Image" className="object-cover h-full md:h-full rounded-xl border-2 border-gray-700 group-hover:border-gray-500" />
            </div>
        </Link>
    </div>
);

export default Project;