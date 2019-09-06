import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import './App.css';
import { Spell } from './spell';
import SpellCard from './SpellCard';
import Spellbook from './Spellbook';

let allSpells: Spell[] = [];

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
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <Route exact={true} path="/" component={MainScreenRouter} />
            <Route path="/spell/:spellName" component={SpellRoute} />
          </header>
        </div>
      </HashRouter>
    );
  }
}

class MainScreenRouter extends Component<{ match: any }, any> {
  render() {
    return <Spellbook spells={allSpells}/>;
  }
}

class SpellRoute extends Component<{ match: any }, any> {
  render() {
    if (allSpells.length === 0) {
      return <div></div>;
    }
    let spell = allSpells.find((val => val.name === this.props.match.params.spellName));
    if (spell) {
      return <div className="SpellCardBox"><SpellCard spell={spell} /></div>;
    } else {
      return <div><h1>Error 404</h1>Spell '{this.props.match.params.spellName}' not found.</div>;
    }
  }
}

export default App;
