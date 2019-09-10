import React, { Component } from "react";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import ReactHover from "react-hover";
import Tilt from "react-tilt";
import { Spell, getSpellThumbnailUrl, getSpellId } from "./model/spell";
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
        let spellLink = `/spell/${getSpellId(this.props.spell)}`;
        let className = `SpellLinkThumbnail SpellLinkThumbnail-${this.props.spell.school}`;
        let linkImage = <Link className="SpellLink" to={spellLink}>
                <img className={className} src={getSpellThumbnailUrl(this.props.spell)} alt={this.props.spell.name + " thumbnail"} />
                <div>{this.props.spell.name}</div>
            </Link>;
        if (isMobile) {
            return <Tilt>{linkImage}</Tilt>;
        } else {
            return <ReactHover options={hoverOptions}>
                    <ReactHover.Trigger type='trigger'>
                        {linkImage}
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
}

export default SpellLink;
