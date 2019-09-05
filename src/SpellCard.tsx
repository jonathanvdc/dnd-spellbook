import React, { Component } from "react";
import { Spell } from "./spell";
import "./SpellCard.css";

type Props = {
    spell: Spell;
};

/**
 * A card that describes a spell.
 */
class SpellCard extends Component<Props, {}> {
    /**
     * Create a "quick stats" grid to include in the card.
     */
    createPropertiesGrid() {
        let components = [];
        if (this.props.spell.components.verbal) {
            components.push("V");
        }
        if (this.props.spell.components.somatic) {
            components.push("S");
        }
        if (this.props.spell.components.material) {
            components.push("M");
        }
        return <div className="SpellPropertiesGrid">
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
                <div>{components.join(", ")}</div>
            </div>
            <div className="SpellPropertyItem">
                <div className="SpellPropertyItemName">Duration</div>
                <div>{this.props.spell.duration}</div>
            </div>
        </div>;
    }

    createFactFootnote(key: string, value: string) {
        return <div className="SpellFootnote"><span className="SpellPropertyItemName">{key}:</span> {value}</div>;
    }

    /**
     * Creates an "additional facts" sheet, which is essentially a collection
     * of footnotes.
     */
    createFootnotes(): JSX.Element[] {
        let elems: JSX.Element[] = [];
        if (this.props.spell.components.materials_needed) {
            elems.push(this.createFactFootnote("Materials", this.props.spell.components.materials_needed.join("; ")));
        }
        elems.push(this.createFactFootnote("Classes", this.props.spell.classes.join(", ")));
        return elems;
    }

    render() {
        let imageUrlPrefix = "https://raw.githubusercontent.com/iconsheets/iconsheets.github.io/master/Images/";
        let imageUrl = imageUrlPrefix + this.props.spell.name + ".png";
        return <div className="SpellCardPanel">
            <img className="SpellThumbnail" src={imageUrl} alt={this.props.spell.name + " icon"} />
            <div className="SpellType">{this.props.spell.type + (this.props.spell.ritual ? " (ritual)" : "")}</div>
            <div className="SpellName">{this.props.spell.name}</div>
            <hr/>
            {this.createPropertiesGrid()}
            <hr/>
            <p className="SpellDescription">{this.props.spell.description}</p>
            <hr/>
            {this.createFootnotes()}
        </div>;
    }
}

export default SpellCard;
