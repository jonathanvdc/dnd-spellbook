import React, { Component } from "react";
import { Spell, SpellLevel } from "./spell";
import "./Spellbook.css";
import "./hr.css";
import SpellLink from "./SpellLink";

const sortedLevels: SpellLevel[] = ["cantrip", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function sortBy<T>(list: T[], getKey: (val: T) => any): T[] {
    return list.sort((a, b) => {
        let x = getKey(a);
        let y = getKey(b);
        return +(x > y) - +(y > x);
    });
}

/**
 * A component that displays a sequence of spells.
 */
class Spellbook extends Component<{ spells: Spell[] }, any> {
    render() {
        let elems = [];
        for (let { level, spells } of this.spellsByLevel()) {
            let levelName = level === "cantrip" ? "Cantrips" : `Level ${level} spells`;
            elems.push(<div><hr/>{levelName}<hr/></div>);
            elems.push(<div className="SpellList">
                    {sortBy(spells, s => s.name).map(spell => <div className="SpellListItem"><SpellLink spell={spell}/></div>)}
                </div>);
        }
        return <div className="SpellbookPanel">{elems}</div>;
    }

    private spellsByLevel() {
        let bins = new Map<string, Spell[]>();
        for (let spell of this.props.spells) {
            let bin = bins.get(spell.level);
            if (!bin) {
                bin = [];
                bins.set(spell.level, bin);
            }
            bin.push(spell);
        }

        let levelSpellPairs: { level: string, spells: Spell[] }[] = [];
        for (let level of sortedLevels) {
            let spells = bins.get(level);
            if (spells) {
                levelSpellPairs.push({ level, spells });
            }
        }
        return levelSpellPairs;
    }
}

export default Spellbook;
