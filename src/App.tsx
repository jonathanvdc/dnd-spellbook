import React from 'react';
import './App.css';
import { Spell } from './spell';
import SpellCard from './SpellCard';

const exampleSpell: Spell = {
  "casting_time": "1 action",
  "classes": [
      "druid",
      "ranger"
  ],
  "components": {
      "material": true,
      "materials_needed": [
          "ashes from a burned leaf of mistletoe and a sprig of spruce"
      ],
      "raw": "V, S, M (ashes from a burned leaf of mistletoe and a sprig of spruce)",
      "somatic": true,
      "verbal": true
  },
  "description": "A veil of shadows and silence radiates from you, masking you and your companions from detection. For the duration, each creature you choose within 30 feet of you (including you) has a +10 bonus to Dexterity (Stealth) checks and can\u2019t be tracked except by magical means. A creature that receives this bonus leaves behind no tracks or other traces of its passage.",
  "duration": "Concentration, up to 1 hour",
  "level": "2",
  "name": "Pass Without Trace",
  "range": "Self",
  "ritual": false,
  "school": "abjuration",
  "tags": [
      "druid",
      "ranger",
      "level2"
  ],
  "type": "2nd-level abjuration"
};

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <SpellCard spell={exampleSpell} />
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
