const size = {
  mobile: "600px",
  tablet: "900px",
  laptop: "1200px",
  desktop: "1536px",
};

const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};

export { size, device };
