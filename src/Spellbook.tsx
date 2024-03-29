import React, { PureComponent } from "react";
import { Spell, spellsByLevel, spellsBySchool } from "./model/spell";
import { isFirefox } from "react-device-detect";
import "./Spellbook.css";
import "./hr.css";
import SpellLink, { SpellLinkPlaceholder } from "./SpellLink";
import LazyLoad from "react-lazyload";
import { Typography } from "@material-ui/core";

/**
 * A component that displays a sequence of spells.
 */
class Spellbook extends PureComponent<{ spells: Spell[] }> {
    render() {
        let headerClass = "SpellSchoolHeader Sideways" + (isFirefox ? "Firefox" : "Other");
        let elems = [];
        for (let { level, spells: levelSpells } of spellsByLevel(this.props.spells)) {
            let levelName = level === "cantrip" ? "Cantrips" : `Level ${level} spells`;
            elems.push(<Typography variant="h6" className="LevelHeader">{levelName}</Typography>);

            let spellListItems: JSX.Element[] = [];
            for (let { school, spells } of spellsBySchool(levelSpells)) {
                let first = true;
                for (let spell of spells) {
                    let item = <div key={spell.name} className="SpellListItem">
                        <LazyLoad once placeholder={<SpellLinkPlaceholder spell={spell}/>}><SpellLink spell={spell}/></LazyLoad>
                    </div>;
                    if (first) {
                        // Include header in a spell list item, so that the header
                        // won't get placed alone at the end of a line.
                        spellListItems.push(<div key={spell.name + '-first'} className="FirstSpellListItem">
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
