import React, { Component } from "react";
import { Spell, getSpellThumbnailUrl } from "./spell";
import { Link } from "react-router-dom";
import './SpellLink.css';

/**
 * A reference to a spell, formatted as an image.
 */
class SpellLink extends Component<{spell: Spell}, {}> {
    render() {
        return <Link className="SpellLink" to={`/spell/${this.props.spell.name}`}>
            <img src={getSpellThumbnailUrl(this.props.spell)} alt={this.props.spell.name + " thumbnail"} />
            <div>{this.props.spell.name}</div>
        </Link>;
    }
}

export default SpellLink;
