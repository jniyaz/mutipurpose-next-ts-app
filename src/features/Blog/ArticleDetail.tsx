import Link from "next/link";
import { dateHumanize } from "@/utils/date";

const Article = ({ post }: { post: any }) => {
  return (
    <div className="px-6 my-6 sm:px-8 md:px-12 py-6 sm:py-8 bg-white border-2 border-gray-200 sm:rounded-lg w-9/12 md:w-full mx-auto">
      <div className="mb-4">
        <p
          className="mt-2 text-gray-600 text-base sm:text-lg md:text-normal"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        ></p>
      </div>

      <div className="text-sm text-gray-500 inline-flex items-center">
        <a href="#">
          <img
            className="w-8 h-8 rounded-full inline-block mr-2"
            src="https://avatars0.githubusercontent.com/u/8238734?s=460&u=4fb91c2850a8e1e7aeb7c2c7a7c7c27f97230823&v=4"
            alt="Asian Girl Avatar"
          />{" "}
          Niyaz |
        </a>
        <a href="#" className="ml-1 hover:underline text-xs font-light">
          {dateHumanize(post.modified)}
        </a>
      </div>

      <div className="py-4">
        <Link href={`/blog`}>
          <button className="text-gray-500 bg-blue-500 py-4">Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Article;
