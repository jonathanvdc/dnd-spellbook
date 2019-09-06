import React, { Component } from "react";
import { Spell, getSpellThumbnailUrl } from "./spell";
import { Link } from "react-router-dom";
import ReactHover from "react-hover";
import './SpellLink.css';
import SpellCard from "./SpellCard";

/**
 * A reference to a spell, formatted as an image.
 */
class SpellLink extends Component<{spell: Spell}, {}> {
    render() {
        const hoverOptions = {
            followCursor: false,
            shiftX: 20,
            shiftY: 0
        };
        let spellLink = `/spell/${this.props.spell.name}`;
        return <ReactHover
            options={hoverOptions}>
            <ReactHover.Trigger type='trigger'>
                <Link className="SpellLink" to={spellLink}>
                    <img src={getSpellThumbnailUrl(this.props.spell)} alt={this.props.spell.name + " thumbnail"} />
                    <div>{this.props.spell.name}</div>
                </Link>
            </ReactHover.Trigger>
            <ReactHover.Hover type='hover'>
                <div className="ExtraSpellBox">
                    <Link className="ExtraSpellLink" to={spellLink}>
                        <SpellCard spell={this.props.spell} />
                    </Link>
                </div>
            </ReactHover.Hover>
            </ReactHover>;
    }
}

export default SpellLink;
