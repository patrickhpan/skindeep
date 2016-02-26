import React from 'react';
import SimplePage from '../components/SimplePage'

const home = [
  {
    "col": 12,
    "title": "Hey, I'm Patrick.",
    "className": "TextCard FaceCard",
    "body": [
      "I’m a full-stack software developer and pianist. I’m passionate about web development, artificial intelligence, especially as inspired by the human brain, and music.",
      "Currently, I’m a sophomore at Harvard, studying Computer Science on the Mind-Brain-Behavior track. I’m also joint-enrolled at the New England Conservatory, where I study piano performance."
    ],
    "buttons": [
      {
        "text": "Portfolio",
        "link": ["portfolio"]
      },
      {
        "text": "More about me",
        "link": ["about"]
      }
    ]
  }
]
const Home = () => SimplePage(home);


export default Home;
