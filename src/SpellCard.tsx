import React, { Component } from "react";
import { Spell, getSpellThumbnailUrl } from "./model/spell";
import ReactMarkdown from "react-markdown";
import "./SpellCard.css";
import "./hr.css";

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

    private static formatDescription(description: string): JSX.Element {
        let updatedDesc = description.replace(/\\n/g, "\n");
        return <ReactMarkdown className="SpellDescription" source={updatedDesc} />;
    }

    /**
     * Creates a textual description of the spell.
     */
    createDescription(): JSX.Element {
        let baseDesc = SpellCard.formatDescription(this.props.spell.description);
        if (this.props.spell.higher_levels) {
            return <div>
                {baseDesc}
                <hr/>
                {SpellCard.formatDescription(this.props.spell.higher_levels)}
            </div>;
        } else {
            return baseDesc;
        }
    }

    render() {
        let thumbnailUrl = getSpellThumbnailUrl(this.props.spell);
        return <div className="SpellCardPanel">
            <img className="SpellThumbnail" src={thumbnailUrl} alt={this.props.spell.name + " thumbnail"} />
            <div className="SpellType">{this.props.spell.type}</div>
            <div className="SpellName">{this.props.spell.name}</div>
            <hr/>
            {this.createPropertiesGrid()}
            <hr/>
            {this.createDescription()}
            <hr/>
            {this.createFootnotes()}
        </div>;
    }
}

export default SpellCard;
