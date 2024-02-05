import { describe, it, expect, vi, beforeAll } from "vitest";
import { renderHook } from "@testing-library/react-hooks";
import { usePosts } from "@/hooks/Blog/usePosts";

describe(
  "usePosts",
  () => {
    /** */
    it("should fetch articles", async () => {
      const { result, waitForValueToChange, waitFor } = renderHook(() =>
        usePosts()
      );
      await waitForValueToChange(() => result.current.posts);
      // await waitFor(
      //   () => {
      //     expect(result.current.posts[0]).toBeCalled();
      //     // console.log(result.current.posts[0])
      //   },
      //   { timeout: 8000 }
      // );
    }, 10000);
  },
  {
    timeout: 30000,
  }
);
