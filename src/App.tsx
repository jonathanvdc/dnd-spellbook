import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import './App.css';
import { Spell } from './model/spell';
import SpellCard from './SpellCard';
import FilterableSpellbook from './FilterableSpellbook';
import { predefinedSpells } from './model/spellDatabase';

let allSpells: Spell[] = predefinedSpells;

class App extends Component<{}, Spell[]> {
  constructor(props: {}) {
    super(props);
    this.state = allSpells;
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
    return <div>
      <h1>Spellbook</h1>
      <FilterableSpellbook spells={allSpells}/>
    </div>;
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
