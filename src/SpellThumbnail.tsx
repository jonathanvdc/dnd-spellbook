import React, { PureComponent } from "react";
import { Spell, getSpellThumbnailUrl } from "./model/spell";
import './SpellThumbnail.css';

/**
 * A thumbnail for a spell.
 */
class SpellThumbnail extends PureComponent<{spell: Spell, showImage?: boolean, className?: string }> {
    render() {
        let bgClassName = `SpellThumbnailBackground SpellThumbnailBackground-${this.props.spell.school}`;
        if (this.props.className) {
            bgClassName += " " + this.props.className;
        }
        if (this.props.showImage === undefined || this.props.showImage) {
            return <div className={bgClassName}>
                    <img className="SpellThumbnail" src={getSpellThumbnailUrl(this.props.spell)} alt="" />
                </div>;
        } else {
            return <div className={bgClassName} />;
        }
    }
}

export default SpellThumbnail;
