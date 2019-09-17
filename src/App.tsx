import React, { Component, lazy, Suspense } from 'react';
import { Route, HashRouter, Link } from 'react-router-dom';
import './App.css';
import { Spell, getSpellId } from './model/spell';
import SpellCard from './SpellCard';
import FilterableSpellbook from './FilterableSpellbook';
import { History } from 'history';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import SpellSearchBox from './SpellSearchBox';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import { isMobile } from 'react-device-detect';

const LinterResults = lazy(() => import('./LinterResults'));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: pink,
  },
});

class App extends Component<{}, { allSpells: Spell[], isSearching: boolean }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      allSpells: [],
      isSearching: false
    };
  }

  toggleSearching(isSearching: boolean) {
    if (this.state.isSearching !== isSearching) {
      this.setState({ isSearching });
    }
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

  render() {
    let sepClassName = "AppBarSeparator";
    let searchClassName = "AppBarSearchBox";
    if (this.state.isSearching) {
      sepClassName += "-searching";
      searchClassName += "-searching";
    }
    return <HashRouter>
        <div className="App">
          <MuiThemeProvider theme={theme}>
            <AppBar position="static">
              <Toolbar variant={isMobile ? "regular" : "dense"}>
                <Link to="/" className="AppTitle"><Typography variant="h6">Spellbook</Typography></Link>
                <span className={sepClassName} />
                <div className={searchClassName}>
                  <SpellSearchBox
                    spells={this.state.allSpells}
                    onFocus={() => this.toggleSearching(true)}
                    onBlur={() => this.toggleSearching(false)} />
                </div>
              </Toolbar>
            </AppBar>
          </MuiThemeProvider>
          <div className="App-body">
            <Suspense fallback={<div>Loading...</div>}>
              <Route exact={true} path="/" render={routeProps => <MainScreenRouter {...routeProps} allSpells={this.state.allSpells}/>} />
              <Route path="/spell/:spellId" render={routeProps => <SpellRoute {...routeProps} allSpells={this.state.allSpells}/>} />
              <Route path="/linter" render={routeProps => <LinterRoute {...routeProps} allSpells={this.state.allSpells}/>} />
            </Suspense>
          </div>
        </div>
      </HashRouter>;
  }
}

class MainScreenRouter extends Component<{ match: any, history: History, allSpells: Spell[] }> {
  render() {
    return <FilterableSpellbook key="spellbook" spells={this.props.allSpells}/>;
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
