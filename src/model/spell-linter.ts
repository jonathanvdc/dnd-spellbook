import { Spell } from "./spell";

/**
 * A description of a diagnostic's severity.
 */
export type Severity = "error" | "warning";

/**
 * A diagnostic: a message produced by a linter.
 */
export type Diagnostic<T> = {
    /**
     * The diagnostic's severity.
     */
    severity: Severity;
    /**
     * The diagnostic's message.
     */
    message: string;
    /**
     * The value that gave rise to the diagnostic.
     */
    source: T;
};

type Check<T> = (source: T) => Diagnostic<T>[];

/**
 * Takes a sequence of spells and applies a number of checks to
 * ensure that the spells are well-formed. Results are returned
 * as a list of diagnostics.
 * @param spells A sequence of spells to process.
 */
export function lint(spells: Spell[]): Diagnostic<Spell>[] {
    let results: Diagnostic<Spell>[] = [];
    for (let spell of spells) {
        for (let check of checks) {
            results.push(...check(spell));
        }
    }
    return results;
}

/**
 * An enumeration of all checks available to the linter.
 */
const checks: Check<Spell>[] = [
    materialsAreConsistent,
    higherLevelsNotInDescription
];

/**
 * Checks that a spell's materials description is consistent.
 * @param spell A spell to check.
 */
function materialsAreConsistent(spell: Spell): Diagnostic<Spell>[] {
    let hasMatsDesc = spell.components.materials_needed && spell.components.materials_needed.length > 0;
    if (spell.components.material && !hasMatsDesc) {
        return [
            {
                severity: "error",
                message: "spell states that it requires materials but does not list any in its 'materials_needed' property.",
                source: spell
            }
        ];
    } else if (!spell.components.material && hasMatsDesc) {
        return [
            {
                severity: "error",
                message: "spell states that it does not require materials but lists materials in its 'materials_needed' property.",
                source: spell
            }
        ];
    } else {
        return [];
    }
}

/**
 * Checks that the 'higher levels' description does not appear in the normal
 * description.
 * @param spell A spell to check.
 */
function higherLevelsNotInDescription(spell: Spell): Diagnostic<Spell>[] {
    let results: Diagnostic<Spell>[] = [];
    if (spell.higher_levels) {
        if (spell.description.includes(spell.higher_levels)) {
            results.push({
                severity: "warning",
                message: "spell includes 'higher_levels' description in its normal description.",
                source: spell
            });
        }
    }
    let lowerDesc = spell.description.toLowerCase();
    for (let term of ["at higher levels", "higher-level slot"]) {
        if (lowerDesc.includes(term)) {
            results.push({
                severity: "warning",
                message: `spell mentions '${term}' in its description. Should this be part of the 'higher_levels' field?`,
                source: spell
            });
        }
    }
    return results;
}
