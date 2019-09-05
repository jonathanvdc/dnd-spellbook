import React, { Component } from "react";
import { Spell } from "./spell";
import "./SpellCard.css";

type Props = {
    spell: Spell;
};

class SpellCard extends Component<Props, {}> {
    render() {
        let imageUrlPrefix = "https://raw.githubusercontent.com/iconsheets/iconsheets.github.io/master/Images/";
        let imageUrl = imageUrlPrefix + this.props.spell.name + ".png";
        console.log(imageUrl);
        return <div className="SpellCardPanel">
            <img className="SpellThumbnail" src={imageUrl} alt={this.props.spell.name + " icon"} />
            <div className="SpellType">{this.props.spell.type}</div>
            <div className="SpellName">{this.props.spell.name}</div>
            <hr/>
            <div className="SpellPropertiesGrid">
                <div className="SpellPropertyItem">
                    <div className="SpellPropertyItemName">Casting time</div>
                    <div>{this.props.spell.casting_time}</div>
                </div>
                <div className="SpellPropertyItem">
                    <div className="SpellPropertyItemName">Range</div>
                    <div>{this.props.spell.range}</div>
                </div>
                <div className="SpellPropertyItem">
                    <div className="SpellPropertyItemName">Components</div>
                    <div>{this.props.spell.components.raw}</div>
                </div>
                <div className="SpellPropertyItem">
                    <div className="SpellPropertyItemName">Duration</div>
                    <div>{this.props.spell.duration}</div>
                </div>
            </div>
            <hr/>
            <p className="SpellDescription">{this.props.spell.description}</p>
        </div>;
    }
}

export default SpellCard;
