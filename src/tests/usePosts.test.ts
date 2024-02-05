import { describe, it, expect, vi, beforeAll } from "vitest";
import { renderHook } from "@testing-library/react-hooks";
import { usePosts } from "@/hooks/Blog/usePosts";
// import Articles from "@/features/Blog/Articles";

describe(
  "usePosts",
  () => {
    /** */
    it("should fetch articles", async () => {
      const { result, waitForValueToChange, waitFor } = renderHook(() =>
        usePosts()
      );
      await waitForValueToChange(() => result.current.posts);
      console.log(result.current.posts[0]);
      await waitFor(() => {
        expect(result.current.posts[0]).toEqual([{ id: 1251 }]);
      });
    });
  },
  {
    timeout: 30000,
  }
);
