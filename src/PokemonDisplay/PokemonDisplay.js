import React from 'react';
import {connect} from 'react-redux';
import { STATS } from  '../model/Pokemon';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import AppBar from 'material-ui/AppBar';

class PokemonDisplay extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.currentPokemon) {
            const pokemon = this.props.currentPokemon;
            return (
                <div>
                    <AppBar
                        title={pokemon.NAME}
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        showMenuIconButton={false}
                    />
                    <Table>
                        <TableHeader
                            displaySelectAll={false}
                            adjustForCheckbox={false}
                        >
                            <TableRow>
                                <TableHeaderColumn>Stat</TableHeaderColumn>
                                <TableHeaderColumn>Base Value</TableHeaderColumn>
                                <TableHeaderColumn>PMD Value</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody
                            displayRowCheckbox={false}
                        >
                            {pokemon.getStatTableRow(STATS.HP)}
                            {pokemon.getStatTableRow(STATS.PATK)}
                            {pokemon.getStatTableRow(STATS.PDEF)}
                            {pokemon.getStatTableRow(STATS.SATK)}
                            {pokemon.getStatTableRow(STATS.SDEF)}
                            {pokemon.getStatTableRow(STATS.SPD)}
                        </TableBody>
                    </Table>
                </div>
            );
        }
        else {
            return null;
        }
    }
}

function mapStateToProps(state) {
    return {
        currentPokemon: state.pokemon
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDisplay);