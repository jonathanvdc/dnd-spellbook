export type Class =
    "barbarian" | "bard" | "cleric"
    | "druid" | "fighter" | "monk"
    | "paladin" | "ranger" | "rogue"
    | "warlock" | "sorcerer" | "wizard";

/**
 * The components required to cast a spell.
 */
export type SpellComponents = {
    /**
     * Tells if the spell has any material components.
     */
    material: boolean;
    /**
     * A list of materials needed to cast the spell.
     */
    materials_needed?: string[];
    /**
     * A raw description of a spell's components, formatted
     * as a string.
     */
    raw: string;
    /**
     * Tells if a spell has a somatic component.
     */
    somatic: boolean;
    /**
     * Tells if a spell has a verbal component.
     */
    verbal: boolean;
};

export type SpellLevel = "cantrip" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

export type School = "abjuration" | "conjuration" | "divination" | "enchantment"
    | "evocation" | "illusion" | "necromancy" | "transmutation";

/**
 * Gets a URL to a particular spell's thumbnail.
 * @param spell The spell to find a thumbnail for.
 */
export function getSpellThumbnailUrl(spell: Spell): string {
    const imageUrlPrefix = "https://raw.githubusercontent.com/iconsheets/iconsheets.github.io/master/Images/";
    return imageUrlPrefix + spell.name + ".png";
}

/**
 * A description of a spell.
 */
export type Spell = {
    /**
     * The amount of time it takes to cast the spell.
     */
    casting_time: string;

    /**
     * A list of all classes that can cast the spell.
     */
    classes: Class[];

    /**
     * The spell's components.
     */
    components: SpellComponents;

    /**
     * A description of the spell's effect.
     */
    description: string;

    /**
     * A description of the spell's duration.
     */
    duration: string;

    /**
     * The spell's level.
     */
    level: SpellLevel;

    /**
     * The spell's name.
     */
    name: string;

    /**
     * The spell's range.
     */
    range: string;

    /**
     * Tells if the spell can be cast as a ritual.
     */
    ritual: boolean;

    /**
     * The school of magic to which the spell belongs.
     */
    school: School;

    /**
     * A list of tags.
     */
    tags: string[];

    /**
     * The spell's type.
     */
    type: string;
};
