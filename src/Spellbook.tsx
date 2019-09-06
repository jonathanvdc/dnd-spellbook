import React, { Component } from "react";
import { Spell, spellsByLevel, spellsBySchool } from "./spell";
import "./Spellbook.css";
import "./hr.css";
import SpellLink from "./SpellLink";

/**
 * A component that displays a sequence of spells.
 */
class Spellbook extends Component<{ spells: Spell[] }, any> {
    render() {
        let elems = [];
        for (let { level, spells: levelSpells } of spellsByLevel(this.props.spells)) {
            let levelName = level === "cantrip" ? "Cantrips" : `Level ${level} spells`;
            elems.push(<div className="LevelHeader">{levelName}</div>);

            let spellListItems: JSX.Element[] = [];
            for (let { school, spells } of spellsBySchool(levelSpells)) {
                spellListItems.push(<div className="SpellSchoolHeader">{school}</div>);
                spellListItems.push(...spells.map(spell => <div className="SpellListItem"><SpellLink spell={spell}/></div>));
            }
            elems.push(<div className="SpellList">{spellListItems}</div>);
        }
        return <div className="SpellbookPanel">{elems}</div>;
    }
}

export default Spellbook;
