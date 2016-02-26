import React from 'react';
import SimplePage from '../components/SimplePage'

const home = [
  {
    "col": 12,
    "title": "React-MDL-Kickstart",
    "className": "TextCard",
    "body": [
      "Hello World",
      
    ],
    "buttons": [
      {
        "text": "Link 1",
        "link": ["a"]
      },
      {
        "text": "Link 2",
        "link": ["b"]
      }
    ]
  }
]
const Home = () => SimplePage(home);


export default Home;
