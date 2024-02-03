import { useRouter } from "next/router";
import { usePost } from "@/hooks/Blog/usePost";
import PageTitle from "@/components/Main/PageTitle";
import Article from "@/features/Blog/ArticleDetail";
import EmptyCard from "@/components/Skeletons/HorzCard";

const BlogArticle = () => {
  const { query }: any = useRouter();
  const { isLoading, post } = usePost(query.id);

  return (
    <section className="py-8 animation-fade animation-delay relative">
      <div className="container mx-auto px-0 sm:px-5">
        {isLoading ? <EmptyCard /> : ""}
        {post && (
          <>
            <PageTitle title={post.title.rendered} />
            <Article post={post} />
          </>
        )}
      </div>
    </section>
  );
};

export default BlogArticle;
