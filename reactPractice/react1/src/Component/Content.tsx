function Content() {
  const technology = "react";
  if (technology)
    return (
      <p>
        <b>Welcome to {technology} tutorials</b>
      </p>
    );
  return (
    <p>
      <b>Welcome to the new tutorial</b>
    </p>
  );
}

export default Content;
