import React, { Component } from "react";
import { Spell, Class, allClasses } from "./spell";
import Spellbook from "./Spellbook";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";

type Props = { spells: Spell[] };
type State = {
    classes: Class[]
};

class FilterableSpellbook extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            classes: []
        };
    }

    updateClasses(values: Class[]) {
        this.setState({
            ...this.state,
            classes: values
        });
    }

    getFilteredSpells(): Spell[] {
        return this.props.spells.filter(val =>
            this.state.classes.length === 0
            || val.classes.some(c => this.state.classes.includes(c)));
    }

    render() {
        return <div>
            <ToggleButtonGroup type="checkbox" value={this.state.classes} onChange={this.updateClasses.bind(this)}>
                {allClasses
                    .filter(c => this.props.spells.some(s => s.classes.includes(c)))
                    .map(c => <ToggleButton value={c}>{c}</ToggleButton>)}
            </ToggleButtonGroup>
            <Spellbook spells={this.getFilteredSpells()}/>
        </div>;
    }
}

export default FilterableSpellbook;
