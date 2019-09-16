import React, { PureComponent } from "react";
import { Spell, getSpellThumbnailUrl, getLicenseName, getLicenseUrl } from "./model/spell";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import "./SpellCard.css";
import "./hr.css";

type Props = {
    spell: Spell;
    hide_links?: boolean;
    hide_footer?: boolean;
};

const html_whitelist = [
    'b', 'i', 'strong', 'br', 'p', 'span', 'div'
];

function is_in_html_whitelist(value: string): boolean {
    value = value.trim();
    if (value.startsWith('<')) {
        for (let item of html_whitelist) {
            if (value === `<${item}>` || value === `</${item}>` || value === `<${item}/>`) {
                return true;
            }
        }
    }
    return false;
}

/**
 * A card that describes a spell.
 */
class SpellCard extends PureComponent<Props> {
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

    createFactFootnote(key: string, value: any) {
        return <div className="SpellFootnote"><span className="SpellPropertyItemName">{key}:</span> {value}</div>;
    }

    /**
     * Creates an "additional facts" sheet, which is essentially a collection
     * of footnotes.
     */
    createFootnotes(): JSX.Element[] {
        let elems: JSX.Element[] = [];
        let mats = this.props.spell.components.materials_needed;
        if (mats && mats.length > 0) {
            elems.push(this.createFactFootnote("Materials", mats.join("; ")));
        }
        elems.push(this.createFactFootnote("Classes", this.props.spell.classes.join(", ")));
        return elems;
    }

    private renderLink(props: { href: string, title: string, children: any[] }) {
        if (this.props.hide_links) {
            return <span>{props.children}</span>;
        } else {
            return <Link to={props.href}>{props.children}</Link>;
        }
    }

    private allowNode(node: any): boolean {
        if (node.type === "html") {
            return is_in_html_whitelist(node.value);
        } else {
            return true;
        }
    }

    private formatDescription(description: string): JSX.Element {
        let updatedDesc = description.replace(/\\n/g, "\n");
        let renderers = {
            link: this.renderLink.bind(this)
        };
        return <ReactMarkdown
            className="SpellDescription"
            source={updatedDesc}
            renderers={renderers}
            allowNode={this.allowNode.bind(this)}
            escapeHtml={false}
            unwrapDisallowed={true} />;
    }

    /**
     * Creates a textual description of the spell.
     */
    createDescription(): JSX.Element {
        let baseDesc = this.formatDescription(this.props.spell.description);
        if (this.props.spell.higher_levels) {
            return <div>
                {baseDesc}
                <hr/>
                {this.formatDescription(this.props.spell.higher_levels)}
            </div>;
        } else {
            return baseDesc;
        }
    }

    createSourceCitation(): JSX.Element[] {
        let src = this.props.spell.source;
        if (src) {
            let pageAttribution = src.pages
                ? ", p. " + src.pages
                : "";

            return [
                this.createFactFootnote("Source", <span><i>{src.document}</i>{pageAttribution}.</span>)
            ];
        } else {
            return [];
        }
    }

    createExternalLink(text: string, url?: string): JSX.Element | string {
        if (!url || url.length === 0 || this.props.hide_links) {
            return text;
        } else {
            return <a href={url}>{text}</a>;
        }
    }

    createFooter(): (JSX.Element | string)[] {
        let sources = this.props.spell.thumbnail_source;
        if (!sources || sources.length === 0 || this.props.hide_footer) {
            return [];
        } else {
            // TODO: cite all sources.
            let firstSource = sources[0];
            return [
                "Thumbnail: '",
                this.createExternalLink(firstSource.title, firstSource.url),
                "' by ",
                this.createExternalLink(firstSource.author, firstSource.author_website),
                ", licensed under ",
                this.createExternalLink(getLicenseName(firstSource.license), getLicenseUrl(firstSource.license)),
                "."
            ];
        }
    }

    render() {
        let thumbnailUrl = getSpellThumbnailUrl(this.props.spell);
        let thumbnailSource = this.createFooter();
        return <div className="SpellCardPanel">
            <div className="SpellCardDescription">
                <img className="SpellCardThumbnail" src={thumbnailUrl} alt={this.props.spell.name + " thumbnail"} />
                <div className="SpellType">{this.props.spell.type}</div>
                <div className="SpellName">{this.props.spell.name}</div>
                <hr/>
                {this.createPropertiesGrid()}
                <hr/>
                {this.createDescription()}
                <hr/>
                {this.createFootnotes()}
                {this.createSourceCitation()}
            </div>
            <div className="SpellCardFooter">
                {thumbnailSource.length > 0 ? <hr/> : []}
                {this.createFooter()}
            </div>
        </div>;
    }
}

export default SpellCard;
