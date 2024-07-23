import { render, screen } from "@testing-library/react";
import About from "./About"; // Adjust path as necessary
import "@testing-library/jest-dom/extend-expect";

describe("About Component", () => {
  // Test for rendering the About title
  test("renders about section title", () => {
    render(<About />);
    const titleElement = screen.getByText(/about/i);
    expect(titleElement).toBeInTheDocument();
  });

  // Test for rendering the introductory paragraph
  test("renders introductory paragraph", () => {
    render(<About />);
    const paragraphElement = screen.getByText(
      /We help companies build dynamic teams/i
    );
    expect(paragraphElement).toBeInTheDocument();
  });

  // Test for rendering the directors section
  test("renders directors section", () => {
    render(<About />);
    const directorsHeader = screen.getByText(/meet the directors/i);
    expect(directorsHeader).toBeInTheDocument();

    // Check if the correct number of DirectorCard components are rendered
    const directorCards = screen.getAllByRole("img"); // Assuming director cards have img element
    expect(directorCards.length).toBe(6); // Check if there are 6 directors
  });

  // Test for existence of a ContactBanner
  test("renders ContactBanner", () => {
    render(<About />);
    const contactBannerElement = screen.getByText(/Contact/); // Adjust text to match what ContactBanner might display
    expect(contactBannerElement).toBeInTheDocument();
  });

  // Test for rendering client logos
  test("renders client logos", () => {
    render(<About />);
    const clientLogos = screen.getAllByRole("img"); // Assuming client logos are also images
    expect(clientLogos.length).toBeGreaterThan(0); // Ensure that at least one logo is rendered
  });
});
