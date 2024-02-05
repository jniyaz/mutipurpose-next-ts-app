import Link from "next/link";
import { dateHumanize } from "@/utils/date";
import { ArticleType } from "@/types/Article";

const Article = ({ post }: { post: ArticleType }) => {
  return (
    <div className="px-6 my-6 sm:px-8 md:px-12 py-6 sm:py-8 bg-white border-2 border-gray-200 sm:rounded-lg w-9/12 md:w-full mx-auto">
      <div className="mb-4">
        <p
          className="mt-2 text-gray-600 text-base sm:text-lg md:text-normal"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        ></p>
      </div>

      <div className="text-sm text-gray-500 inline-flex items-center py-4">
        Niyaz | {dateHumanize(post.modified)}
      </div>

      <div className="py-4">
        <Link href={`/blog`}>
          <button className="text-gray-500 bg-blue-500">&larr; Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Article;
