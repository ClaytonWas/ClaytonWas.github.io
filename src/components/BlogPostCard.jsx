import { Link } from "react-router-dom";

const Post = ({id, title, tag, description, picture}) => (
    <div className="bg-gray-300 max-w-screen-md p-2 mb-10 w-2/3 rounded-2xl group border-4 border-gray-700 md:border-2 hover:border-gray-500">
        <Link to={`/blog/${id}`} className="flex">
            <div className={`break-words m-1 ${picture ? "w-3/4" : "w-full"}`}>
                <p className="text-2xl font-medium group-hover:text-sky-800">{title}</p>
                {tag && (
                    <div className="flex flex-row items-center">
                        <svg className="ml-2 fill-black" height="12" width="12" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                            <path d="M506.513,311.066L253.87,58.423c-2.024-2.026-4.486-3.559-7.195-4.483L140.15,17.593 c-6.758-2.305-14.242-0.568-19.294,4.483L84.709,58.222L31.977,5.491c-7.314-7.315-19.176-7.315-26.49,0 c-7.315,7.315-7.315,19.175,0,26.49l52.732,52.731l-36.14,36.141c-5.051,5.05-6.79,12.534-4.483,19.294L53.943,246.67 c0.924,2.71,2.458,5.172,4.483,7.197L311.071,506.51c7.314,7.315,19.175,7.315,26.49,0l168.954-168.954 C513.83,330.241,513.83,318.382,506.513,311.066z M227.241,227.238c-21.817,21.819-57.132,21.82-78.952,0 c-21.768-21.768-21.768-57.185,0.001-78.953c21.817-21.819,57.132-21.82,78.953,0C249.009,170.053,249.009,205.47,227.241,227.238 z"/>
                        </svg>
                        <p className="text-xs font-medium ml-1">{tag}</p>
                    </div>
                )}
                <p className="text-l mt-1 mb-1 ml-1">{description}</p>
            </div>
            {picture && (
                <div className="w-full h-32 flex justify-end md:h-auto md:w-1/4 mt-4 md:mt-0">
                    <img src={picture} alt="Project Image" className="object-cover h-full md:h-full rounded-xl border-4 border-gray-700 md:border-2 group-hover:border-gray-500" />
                </div>
            )}
        </Link>
    </div>
);

export default Post;