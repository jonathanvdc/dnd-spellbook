import React, { Component, lazy, Suspense } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import './App.css';
import { Spell, getSpellId } from './model/spell';
import SpellCard from './SpellCard';
import FilterableSpellbook from './FilterableSpellbook';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import SpellbookAppBar from './SpellbookAppBar';
import { currentSeasons } from './model/season';

const LinterResults = lazy(() => import('./LinterResults'));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: pink,
  },
});

class App extends Component<{}, { allSpells: Spell[] }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      allSpells: []
    };
  }

  componentDidMount() {
    // Fetch spell database.
    fetch("data/spells.json")
    .then(response => response.json())
    .then(json => {
      this.setState({
        allSpells: json
      });
    });
  }

  getMainClass(): string {
    return ["App", ...currentSeasons].join(" ");
  }

  render() {
    return <HashRouter>
        <div className={this.getMainClass()}>
          <MuiThemeProvider theme={theme}>
            <SpellbookAppBar spells={this.state.allSpells} />
            <div className="App-body">
              <Suspense fallback={<div>Loading...</div>}>
                <Route exact={true} path="/" render={routeProps => <FilterableSpellbook key="spellbook" spells={this.state.allSpells}/>} />
                <Route path="/spell/:spellId" render={routeProps => <SpellRoute {...routeProps} allSpells={this.state.allSpells}/>} />
                <Route path="/linter" render={routeProps => <LinterRoute {...routeProps} allSpells={this.state.allSpells}/>} />
              </Suspense>
            </div>
          </MuiThemeProvider>
        </div>
      </HashRouter>;
  }
}

class SpellRoute extends Component<{ match: any, allSpells: Spell[] }, any> {
  render() {
    if (this.props.allSpells.length === 0) {
      return <div></div>;
    }
    let spell = this.props.allSpells.find(val => getSpellId(val) === this.props.match.params.spellId);
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

class LinterRoute extends Component<{ match: any, allSpells: Spell[] }, any> {
  render() {
    if (this.props.allSpells.length === 0) {
      return <div></div>;
    }
    return <LinterResults spells={this.props.allSpells} />;
  }
}

export default App;
