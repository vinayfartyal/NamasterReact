const heading_1 = React.createElement(
    "h1",
    {
      id: "heading_1",
    },
    "Heading 1"
  );
  const heading_2 = React.createElement(
    "h2",
    {
      id: "Heading 2",
    },
    "Heading 2"
  );
  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [heading_1, heading_2]
  );

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(container);