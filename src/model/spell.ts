export type Class =
    "barbarian" | "bard" | "cleric"
    | "druid" | "fighter" | "monk"
    | "paladin" | "ranger" | "rogue"
    | "warlock" | "sorcerer" | "wizard";

export const allClasses: Class[] = [
    "barbarian", "bard", "cleric",
    "druid", "fighter", "monk",
    "paladin", "ranger", "rogue",
    "warlock", "sorcerer", "wizard"
];

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
    if (spell.thumbnail_url) {
        return spell.thumbnail_url;
    } else {
        // If we don't have a thumbnail for the spell, then we'll
        // just create a URL that points to the school's thumbnail.
        return `https://www.dndbeyond.com/Content/1-0-547-0/Skins/Waterdeep/images/spell-schools/35/${spell.school}.png`;
    }
}

const sortedLevels: SpellLevel[] = ["cantrip", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const sortedSchools: School[] = [
    "abjuration", "conjuration", "divination", "enchantment",
    "evocation", "illusion", "necromancy", "transmutation"
];

function sortBy<T>(list: T[], getKey: (val: T) => any): T[] {
    return list.sort((a, b) => {
        let x = getKey(a);
        let y = getKey(b);
        return +(x > y) - +(y > x);
    });
}

function groupBy<T, TKey>(
    list: T[],
    sortedGroups: TKey[],
    getKey: (val: T) => TKey):
    { key: TKey, values: T[] }[] {

    let bins = new Map<TKey, T[]>();
    for (let value of list) {
        let key = getKey(value);
        let bin = bins.get(key);
        if (!bin) {
            bin = [];
            bins.set(key, bin);
        }
        bin.push(value);
    }

    let levelSpellPairs: { key: TKey, values: T[] }[] = [];
    for (let key of sortedGroups) {
        let values = bins.get(key);
        if (values) {
            levelSpellPairs.push({ key, values });
        }
    }
    return levelSpellPairs;
}

/**
 * Groups a list of spells by level.
 * @param spells A list of spells to group.
 */
export function spellsByLevel(spells: Spell[]): { level: SpellLevel, spells: Spell[] }[] {
    return groupBy(sortBy(spells, s => s.name), sortedLevels, s => s.level)
        .map(({ key, values }) => ({ level: key, spells: values }));
}

/**
 * Groups a list of spells by school.
 * @param spells A list of spells to group.
 */
export function spellsBySchool(spells: Spell[]): { school: School, spells: Spell[] }[] {
    return groupBy(sortBy(spells, s => s.name), sortedSchools, s => s.school)
        .map(({ key, values }) => ({ school: key, spells: values }));
}

/**
 * A description of a spell's source.
 */
export type SpellSource = {
    /**
     * The document in which the spell was originally described.
     */
    document: string;

    /**
     * The pages in the document that describe the spell.
     */
    pages?: string;
};

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
     * An optional description of what the spell does at higher levels.
     */
    higher_levels?: string;

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

    /**
     * An optional URL to the spell's thumbnail.
     */
    thumbnail_url?: string;

    /**
     * The document in which the spell was originally described.
     */
    source?: SpellSource;
};
