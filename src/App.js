import "./styles.css";
import { useState } from "react";
export default function App() {
  var fruitEmojis = {
    "🍇": "Grapes",
    "🍉": "Watermelon",
    "🥭": "Mango",
    "🍆": "Eggplant",
    "🍍": "Pineapple",
    "🍌": "Banana",
    "🍒": "Cherries",
    "🥦": "Broccoli",
    "🍓": "Strawberry",
    "🍑": "Peach",
    "🥑": "Avocado"
  };
  var emojisWeKnow = Object.keys(fruitEmojis);
  var [meaning, setMeaning] = useState("");
  function emojiOnClick(emoji) {
    var meaning = fruitEmojis[emoji];
    setMeaning(meaning);
  }
  function emojiInputHandler(event) {
    var userInp = event.target.value;
    var meaning = fruitEmojis[userInp];
    if (meaning === undefined) {
      meaning = "We don't have this emoji in our database 😔";
    }
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <nav className="navigation">
        <h1 style={{ color: "var(--primary-color)" }}>
          Fruit Emoji Interpreter
        </h1>
      </nav>
      <div className="main-div">
        <h2 className="h2-question">Do you know your emojis?</h2>
        <input className="inputTextBox" onChange={emojiInputHandler}></input>
        <div className="meaning">{meaning}</div>
        <h2 style={{ fontSize: "2rem" }}>
          <span style={{ color: "var(--primary-color)" }}>emojis</span> we know
        </h2>
        <div>
          {emojisWeKnow.map((emoji) => {
            return (
              <span
                className="fruitsList"
                onClick={() => emojiOnClick(emoji)}
                key={emoji}
              >
                {emoji}
              </span>
            );
          })}
        </div>
      </div>
      <footer>
        <div className="footer-socials">My Socials</div>
        <ul className="lists">
          <li className="list-inline">
            <a href="https://github.com/RakshithBhat03" className="links">
              Github
            </a>
          </li>
          <li className="list-inline">
            <a
              href="https://www.linkedin.com/in/rakshithbhat/"
              className="links"
            >
              Linkedin
            </a>
          </li>
          <li className="list-inline">
            <a href="https://twitter.com/RakshithBhat1" className="links">
              Twitter
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
