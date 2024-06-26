import { usePosts } from "@/hooks/Blog/usePosts";
import Article from "@/features/Blog/Article";
import PageTitle from "@/components/Main/PageTitle";
import EmptyCard from "@/components/Skeletons/HorzCard";
import { ArticleType } from "@/types/Article";

const Articles = () => {
  const { isLoading, posts }: { isLoading: any; posts: ArticleType[] } =
    usePosts();

  return (
    <section
      className="py-8 animation-fade animation-delay relative"
      data-testid="article-list"
    >
      <div className="container mx-auto px-0 sm:px-5">
        <PageTitle title={"Technology News"} />
        {isLoading ? <EmptyCard /> : ""}
        {posts &&
          posts.map((post: ArticleType) => (
            <Article key={post.id} post={post} />
          ))}
        {posts && !posts ? (
          <div className=" mt-4 mb-4 px-6 sm:px-8 md:px-12 py-6 sm:py-8 border border-gray-200 sm:rounded-lg sm:shadow w-9/12 md:w-full mx-auto">
            <p className="mt-2 text-gray-600 text-base sm:text-lg md:text-normal">
              No articles found.
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default Articles;
