import Link from "next/link";
import { dateHumanize } from "@/utils/date";
import PageTitle from "@/components/Main/PageTitle";

const Article = ({ post }: { post: any }) => {
  return (
    <div className="px-6 bg-gray-200 border-2 border-gray-700">
      <div>
        <Link href={`blog/${post.id}`}>
          <PageTitle title={post.title.rendered} />
        </Link>
        <p
          className="my-2 text-gray-600 text-base sm:text-lg md:text-normal"
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
        ></p>
      </div>
      <div className="text-sm text-gray-500 flex justify-between items-center py-8">
        <div className="flex items-center">
          <span>Niyaz | {dateHumanize(post.modified)}</span>
        </div>
        <Link href={`blog/${post.id}`}>
          <button className="rounded-full text-gray-700">Read more &rarr;</button>
        </Link>
      </div>
      <hr />
    </div>
  );
};

export default Article;
