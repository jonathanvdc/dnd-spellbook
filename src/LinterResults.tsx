import React, { PureComponent } from "react";
import { Spell } from "./model/spell";
import { lint } from "./model/spell-linter";
import { Link } from "react-router-dom";
import { createSpellUrl } from "./SpellLink";
import "./LinterResults.css";

/**
 * A component that displays linter results for spells.
 */
class LinterResults extends PureComponent<{ spells: Spell[] }> {
    render() {
        let diagnostics = lint(this.props.spells);
        let errorList = diagnostics.length === 0
            ? "Nothing to report. Have a great day!"
            : <ul className="LinterDiagnosticList">
                {diagnostics.map(d => <li><Link to={createSpellUrl(d.source)}>{d.source.name}</Link>: <b>{d.severity}:</b> {d.message}</li>)}
            </ul>;
        return <div>
            <h1>Linter results</h1>
            {errorList}
        </div>;
    }
}

export default LinterResults;
