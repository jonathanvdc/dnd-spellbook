import React, { PureComponent } from "react";
import { Spell, getSpellThumbnailUrl } from "./model/spell";
import './SpellThumbnail.css';

/**
 * A thumbnail for a spell.
 */
class SpellThumbnail extends PureComponent<{spell: Spell, showImage?: boolean, className?: string }> {
    render() {
        let className = `SpellThumbnail SpellThumbnail-${this.props.spell.school}`;
        if (this.props.className) {
            className += " " + this.props.className;
        }
        if (this.props.showImage === undefined || this.props.showImage) {
            return <img className={className} src={getSpellThumbnailUrl(this.props.spell)} alt="" />;
        } else {
            return <div className={className} />;
        }
    }
}

export default SpellThumbnail;
