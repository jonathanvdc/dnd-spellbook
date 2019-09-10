import React, { Component } from "react";
import { Spell, spellsByLevel, spellsBySchool } from "./model/spell";
import { isFirefox } from "react-device-detect";
import "./Spellbook.css";
import "./hr.css";
import SpellLink from "./SpellLink";
import LazyLoad from "react-lazyload";

/**
 * A component that displays a sequence of spells.
 */
class Spellbook extends Component<{ spells: Spell[] }, any> {
    render() {
        let headerClass = "SpellSchoolHeader Sideways" + (isFirefox ? "Firefox" : "Other");
        let elems = [];
        for (let { level, spells: levelSpells } of spellsByLevel(this.props.spells)) {
            let levelName = level === "cantrip" ? "Cantrips" : `Level ${level} spells`;
            elems.push(<div className="LevelHeader">{levelName}</div>);

            let spellListItems: JSX.Element[] = [];
            for (let { school, spells } of spellsBySchool(levelSpells)) {
                let first = true;
                for (let spell of spells) {
                    let item = <div className="SpellListItem">
                        <LazyLoad key={spell.name} height={80} once><SpellLink spell={spell}/></LazyLoad>
                    </div>;
                    if (first) {
                        // Include header in a spell list item, so that the header
                        // won't get placed alone at the end of a line.
                        spellListItems.push(<div className="FirstSpellListItem">
                            <div className={headerClass}>{school}</div>
                            {item}
                        </div>);
                        first = false;
                    } else {
                        spellListItems.push(item);
                    }
                }
            }
            elems.push(<div className="SpellList">{spellListItems}</div>);
        }
        return <div className="SpellbookPanel">{elems}</div>;
    }
}

export default Spellbook;
