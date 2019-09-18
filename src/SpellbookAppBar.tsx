import { Component } from "react";
import React from "react";
import SpellSearchBox from "./SpellSearchBox";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Spell } from "./model/spell";
import { isMobile } from "react-device-detect";
import "./SpellbookAppBar.css";

class SpellbookAppBar extends Component<{ spells: Spell[] }, { isSearching: boolean }> {
    constructor(props: { spells: Spell[] }) {
        super(props);
        this.state = {
            isSearching: false
        };
    }

    toggleSearching(isSearching: boolean) {
        if (this.state.isSearching !== isSearching) {
            this.setState({ isSearching });
        }
    }

    createClasses(baseName: string): string {
        let suffix = this.state.isSearching ? "searching" : "notsearching";
        return `${baseName} ${baseName}-${suffix}`;
    }

    render() {
        return <AppBar position="sticky">
                <Toolbar variant={isMobile ? "regular" : "dense"}>
                    <Link to="/" className={this.createClasses("AppTitle")}><Typography variant="h6">Spellbook</Typography></Link>
                    <span className={this.createClasses("AppBarSeparator")} />
                    <div className={this.createClasses("AppBarSearchBox")}>
                    <SpellSearchBox
                        spells={this.props.spells}
                        onFocus={() => this.toggleSearching(true)}
                        onBlur={() => this.toggleSearching(false)} />
                    </div>
                </Toolbar>
            </AppBar>;
    }
}

export default SpellbookAppBar;
