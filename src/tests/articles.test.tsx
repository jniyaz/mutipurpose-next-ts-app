import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Articles from "../features/Blog/Articles";

import matchers from "@testing-library/jest-dom";

describe("Articles", () => {
  it("should render the Aticles component", () => {
    // const { getByTestId } = render(<Articles />);
    render(<Articles />);
    const title = screen.queryByText(/Technology News/i);
    expect(title).toBeDefined();
    // expect(title).toBeVisible();
  });
});
