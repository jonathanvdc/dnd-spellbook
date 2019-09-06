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

    toggleClass(key: Class, value: boolean[]) {
        let newClasses = this.state.classes.filter(x => x !== key);
        if (value.includes(true)) {
            newClasses.push(key);
        }
        this.updateClasses(newClasses);
    }

    getFilteredSpells(): Spell[] {
        return this.props.spells.filter(val =>
            this.state.classes.length === 0
            || val.classes.some(c => this.state.classes.includes(c)));
    }

    render() {
        let usefulClasses = allClasses
            .filter(c => this.props.spells.some(s => s.classes.includes(c)));
        return <div>
            {usefulClasses.map(c =>
                <ToggleButtonGroup type="checkbox" value={[this.state.classes.includes(c)]} onChange={(vals: any) => this.toggleClass(c, vals)}>
                    <ToggleButton value={true}>{c}</ToggleButton>
                </ToggleButtonGroup>)}
            <Spellbook spells={this.getFilteredSpells()}/>
        </div>;
    }
}

export default FilterableSpellbook;
