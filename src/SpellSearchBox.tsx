import React, { PureComponent } from "react";
import { Spell, getSpellType, getSpellId } from "./model/spell";
import SpellThumbnail from "./SpellThumbnail";
import Autosuggest, { SuggestionsFetchRequestedParams, ChangeEvent, RenderSuggestionParams, SuggestionSelectedEventData, BlurEvent } from "react-autosuggest";
import { withRouter, RouteComponentProps } from "react-router";
import { Paper, MenuItem } from "@material-ui/core";
import Fuse from "fuse.js";
import "./SpellSearchBox.css";

type Props = RouteComponentProps<any> & {
    spells: Spell[];
    onFocus?: (event: React.FocusEvent<any>) => void;
    onBlur?: (event: React.FocusEvent<any>, params?: BlurEvent<Spell>) => void;
}

class SpellSearchBox extends PureComponent<Props, { query: string, suggestions: Spell[] }> {
    constructor(props: Props) {
        super(props);

        this.state = {
            suggestions: [],
            query: ""
        };
    }

    onSuggestionsClearRequested() {
        this.setState({
            suggestions: []
        });
    }

    onSuggestionsFetchRequested(request: SuggestionsFetchRequestedParams, fuse: Fuse<Spell>): void {
        this.setState({
            suggestions: fuse.search(request.value).slice(0, 10)
        });
    }

    onSuggestionSelected(
        _event: React.FormEvent<any>,
        data: SuggestionSelectedEventData<Spell>): void {

        this.props.history.push(`/spell/${getSpellId(data.suggestion)}`);
    }

    onQueryChange(_event: React.FormEvent<any>, params: ChangeEvent): void {
        this.setState({
            query: params.newValue
        });
    }

    renderSuggestion(spell: Spell, { isHighlighted }: RenderSuggestionParams) {
        return <MenuItem selected={isHighlighted} component="div">
            <SpellThumbnail className="SearchItemThumbnail" spell={spell} />
            <span className="SearchItemName">{spell.name}</span>
            <span className="SearchItemType">{getSpellType(spell)}</span>
        </MenuItem>;
    }

    render() {
        if (this.props.spells.length === 0) {
            return [];
        }

        const options = {
            shouldSort: true,
            threshold: 0.6,
            location: 0,
            distance: 100,
            maxPatternLength: 32,
            minMatchCharLength: 1,
            keys: ["name"]
        };

        const fuse = new Fuse(this.props.spells, options);

        const inputProps = {
            placeholder: "Search spells...",
            value: this.state.query,
            onChange: this.onQueryChange.bind(this),
            onFocus: this.props.onFocus,
            onBlur: this.props.onBlur
        };
        return <Autosuggest
            suggestions={this.state.suggestions}
            onSuggestionsFetchRequested={request => this.onSuggestionsFetchRequested(request, fuse)}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested.bind(this)}
            onSuggestionSelected={this.onSuggestionSelected.bind(this)}
            inputProps={inputProps}
            getSuggestionValue={suggestion => suggestion.name}
            renderSuggestion={this.renderSuggestion}
            renderSuggestionsContainer={options => (
                <Paper {...options.containerProps} square>
                    {options.children}
                </Paper>
            )}
            />;
    }
}

export default withRouter(SpellSearchBox);
