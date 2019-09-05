import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Spell } from './spell';
import SpellCard from './SpellCard';

const placeholderSpell: Spell = {
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

let allSpells = [placeholderSpell];

class App extends Component<{}, Spell[]> {
  constructor(props: {}) {
    super(props);
    this.state = allSpells;
  }

  componentDidMount() {
    // Fetch spell database from third-party GitHub repository.
    fetch("https://raw.githubusercontent.com/iconsheets/iconsheets.github.io/master/Database/SpellDatabase.json")
    .then(response => response.json())
    .then(json => {
      allSpells = json;
      this.setState(json);
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Route exact={true} path="/" render={() => <div>Hi!</div>} />
            <Route path="/spell/:spellName" component={SpellRoute} />
          </header>
        </div>
      </Router>
    );
  }
}

class SpellRoute extends Component<{ match: any }, any> {
  render() {
    let spell = allSpells.find((val => val.name === this.props.match.params.spellName));
    if (spell) {
      return <SpellCard spell={spell} />;
    } else {
      return <div><h1>Error 404</h1>Spell '{this.props.match.params.spellName}' not found.</div>;
    }
  }
}

export default App;
