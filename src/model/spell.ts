export type Class =
    "barbarian" | "bard" | "cleric"
    | "druid" | "fighter" | "monk"
    | "paladin" | "ranger" | "rogue"
    | "sorcerer" | "warlock" | "wizard";

export const allClasses: Class[] = [
    "barbarian", "bard", "cleric",
    "druid", "fighter", "monk",
    "paladin", "ranger", "rogue",
    "sorcerer", "warlock", "wizard"
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
        return `images/schools/${spell.school}.svg`;
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
 * A code that specifies a particular license.
 */
export type LicenseCode = 'CC-BY-3.0' | 'CC0-1.0';

/**
 * Gets a license's name based on its code.
 * @param code A license code.
 */
export function getLicenseName(code: LicenseCode): string {
    switch (code) {
        case 'CC-BY-3.0':
            return 'Creative Commons Attribution 3.0 Unported';
        case 'CC0-1.0':
            return 'Creative Commons CC0 1.0 Universal';
    }
}

/**
 * Gets a URL to a license's text based on its code.
 * @param code A license code.
 */
export function getLicenseUrl(code: LicenseCode): string {
    switch (code) {
        case 'CC-BY-3.0':
            return 'https://creativecommons.org/licenses/by/3.0/legalcode';
        case 'CC0-1.0':
            return 'https://creativecommons.org/publicdomain/zero/1.0/legalcode';
    }
}

/**
 * A description of a thumbnail's source.
 */
export type ThumbnailSource = {
    /**
     * The thumbnail's title: its name or file name.
     */
    title?: string;

    /**
     * A URL to the thumbnail's original site.
     */
    url?: string;

    /**
     * The license under which the thumbnail is licensed.
     */
    license: LicenseCode;

    /**
     * The name of the thumbnail's author.
     */
    author: string;

    /**
     * The author's website, if any.
     */
    author_website?: string;
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
     * An optional URL to the spell's thumbnail.
     */
    thumbnail_url?: string;

    /**
     * An optional list of 
     */
    thumbnail_source?: ThumbnailSource[];

    /**
     * An optional accent color for the spell.
     */
    accent_color?: string;

    /**
     * The document in which the spell was originally described.
     */
    source?: SpellSource;
};

/**
 * Gets an identifier for a spell that is safe for use in a URL.
 * @param spell The spell to get an identifier for.
 */
export function getSpellId(spell: Spell): string {
    let name = spell.name;
    const whitelist = /[0-9a-zA-Z]/;
    let enc = '';
    let dash = false;
    for (let c of name.toLowerCase()) {
        if (whitelist.test(c)) {
            enc += c;
            dash = false;
        } else if (!dash) {
            enc += '-';
            dash = true;
        }
    }
    return enc;
}

function getOrinalSuffix(i: number) {
    let last = i % 10;
    if (last === 1) {
        return 'st';
    } else if (last === 2) {
        return 'nd';
    } else if (last === 3) {
        return 'rd';
    } else {
        return 'th';
    }
}

export function getSpellType(spell: Spell) {
    let result: string;
    if (spell.level === "cantrip") {
        result = `${spell.school} cantrip`;
    } else {
        result = `${spell.level}${getOrinalSuffix(parseInt(spell.level))}-level ${spell.school}`;
    }
    if (spell.ritual) {
        result += " (ritual)";
    }
    return result;
}
