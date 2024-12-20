import { Link } from "react-router-dom";

const Project = ({title, description, picture, html_link}) => (
    <div className="bg-gray-300 w-full p-2 mb-10 rounded-2xl group border-gray-700 border-4 md:w-2/3 md:border-2 lg:w-1/2 2xl:w-1/3 hover:border-gray-500">
        <Link to={html_link} className="flex flex-col md:flex-row justify-end">
            <div className="break-words w-full md:w-3/4 m-1">
                <p className="text-2xl font-medium group-hover:text-sky-800">{title}</p>
                <p className="text-l mt-2 mb-0 ml-1 md:mb-1">{description}</p>
            </div>
            <div className="w-full h-32 flex justify-end md:h-auto md:w-1/4 mt-4 md:mt-0">
                <img src={picture} alt="Project Image" className="object-cover h-full md:h-full rounded-xl border-4 border-gray-700 md:border-2 group-hover:border-gray-500" />
            </div>
        </Link>
    </div>
);

export default Project;