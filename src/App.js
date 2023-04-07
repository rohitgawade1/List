import "./App.css";
import Card from "./Components/Card/Card";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const data = [
    {
      name: "Dictionary Application",
      source_code: "https://github.com/rohitgawade1/web/tree/main/Dictionary",
      hosted_link: "https://rohitgawade1.github.io/web/Dictionary/",
    },
    {
      name: "Emoji Search",
      source_code:
        "https://github.com/rohitgawade1/web/tree/main/Emoji%20Search",
      hosted_link: "https://rohitgawade1.github.io/web/Emoji%20Search/",
    },
    {
      name: "Github Finder",
      source_code:
        "https://github.com/rohitgawade1/web/tree/main/GitHub%20Finder",
      hosted_link: "https://rohitgawade1.github.io/web/GitHub%20Finder/",
    },
    {
      name: "Leaderboard",
      source_code: "https://github.com/rohitgawade1/web/tree/main/Leaderboard",
      hosted_link: "https://rohitgawade1.github.io/web/Leaderboard/",
    },
    {
      name: "Random Quote Generator",
      source_code:
        "https://github.com/rohitgawade1/web/tree/main/Random%20Quote%20generator",
      hosted_link:
        "https://rohitgawade1.github.io/web/Random%20Quote%20generator/",
    },
    {
      name: "Solar System",
      source_code:
        "https://github.com/rohitgawade1/web/tree/main/Solar%20System",
      hosted_link: "https://rohitgawade1.github.io/web/Solar%20System/",
    },
    {
      name: "Tip Calculator",
      source_code:
        "https://github.com/rohitgawade1/web/tree/main/Tip-Calculator",
      hosted_link: "https://rohitgawade1.github.io/web/Tip-Calculator/",
    },
    {
      name: "Whether Application",
      source_code:
        "https://github.com/rohitgawade1/web/tree/main/Whether%20Application",
      hosted_link: "https://rohitgawade1.github.io/web/Whether%20Application/",
    },
    {
      name: "World Country List",
      source_code:
        "https://github.com/rohitgawade1/web/tree/main/world-country-list",
      hosted_link: "https://rohitgawade1.github.io/web/world-country-list/",
    },
  ];
  return (
    <div className="App">
      <Navbar />
      <div className="cards-container">
        {data.map((each) => {
          return <Card each={each} />;
        })}
      </div>
    </div>
  );
}

export default App;
