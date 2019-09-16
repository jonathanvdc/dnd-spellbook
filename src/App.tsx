import React, { Component, lazy, Suspense } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import ReactSearchBox from 'react-search-box';
import './App.css';
import { Spell, getSpellId } from './model/spell';
import SpellCard from './SpellCard';
import FilterableSpellbook from './FilterableSpellbook';
import { History } from 'history';
import SpellThumbnail from './SpellThumbnail';
const LinterResults = lazy(() => import('./LinterResults'))

let allSpells: Spell[] = [];

class App extends Component<{}, Spell[]> {
  constructor(props: {}) {
    super(props);
    this.state = allSpells;
  }

  componentDidMount() {
    // Fetch spell database.
    fetch("data/spells.json")
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
            <Suspense fallback={<div>Loading...</div>}>
              <Route exact={true} path="/" component={MainScreenRouter} />
              <Route path="/spell/:spellId" component={SpellRoute} />
              <Route path="/linter" component={LinterRoute} />
            </Suspense>
          </header>
        </div>
      </HashRouter>
    );
  }
}

type SearchItem = {
  key: string;
  value: JSX.Element;
  spell: Spell;
};

class MainScreenRouter extends Component<{ match: any, history: History }, { isSearching: boolean }> {
  constructor(props: { match: any, history: History }) {
    super(props);

    this.state = {
      isSearching: false
    };
  }

  onSearchChange(query: string): void {
    let searchingNow = query.length > 0;
    if (searchingNow !== this.state.isSearching) {
      this.setState({
        ...this.state,
        isSearching: searchingNow
      });
    }
  }

  onSearchSelect(obj: SearchItem): void {
    this.props.history.push(`/spell/${getSpellId(obj.spell)}`);
  }

  render() {
    let searchData: SearchItem[] = [];
    for (let spell of allSpells) {
      searchData.push({
        key: spell.name,
        value: <div className="SearchItem">
          <SpellThumbnail className="SearchItemThumbnail" spell={spell} />
          <span className="SearchItemName">{spell.name}</span>
          <span className="SearchItemType">{spell.type}</span>
        </div>,
        spell: spell
      });
    }
    let searchBox = <ReactSearchBox
      placeholder="Search spells"
      data={searchData}
      fuseConfigs={{keys: ['key']}}
      onChange={this.onSearchChange.bind(this)}
      onSelect={this.onSearchSelect.bind(this)} />;

    return <div>
      <div key="appBar" className={this.state.isSearching ? "AppBar AppBar-searching" : "AppBar"}>
        <h1 className="AppTitle">Spellbook</h1>
        {allSpells.length > 0 ? searchBox : []}
      </div>
      <FilterableSpellbook key="spellbook" spells={allSpells}/>
    </div>;
  }
}

class SpellRoute extends Component<{ match: any }, any> {
  render() {
    if (allSpells.length === 0) {
      return <div></div>;
    }
    let spell = allSpells.find(val => getSpellId(val) === this.props.match.params.spellId);
    if (spell) {
      return <div className="SpellCardBox"><SpellCard spell={spell} /></div>;
    } else {
      let thumbStyle = {width: "30px", height: "30px"};
      return <div>
        <img style={{...thumbStyle, transform: "scaleX(-1)"}} src="images/classes/wizard.svg" alt="" />
        <img style={thumbStyle} src="images/classes/warlock.svg" alt="" />
        <img style={thumbStyle} src="images/classes/wizard.svg" alt="" />
        <h1>Error 404</h1>
        Spell with ID '{this.props.match.params.spellId}' not found.
      </div>;
    }
  }
}

class LinterRoute extends Component<{ match: any }, any> {
  render() {
    if (allSpells.length === 0) {
      return <div></div>;
    }
    return <LinterResults spells={allSpells} />;
  }
}

export default App;
