import React, {Component} from 'react';
import {withRouter} from 'react-router';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        width: 300,
        display: "inline-block",
        margin: 40,
        textAlign: "center"
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        padding: 20
    },
    typographyH2: {
        fontSize: "2em",
        fontWeight: 900
    },
    typographyH5: {
        fontSize: ".5em",
        fontWeight: 500
    }
};

class Fixtures extends React.Component {
    state = {
        groups: {}
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json')
            .then(res => res.json())
            .then(data => {
                this.setState({groups: data.groups})
                console.log(this.state)
            })
    }

    render() {
        const {groups} = this.state;
        const {classes} = this.props;
        const groupnames = [];
        const matches = []
        for (let value of Object.values(groups)) {
            // console.log(value.name)
            // console.log(value.matches)
            groupnames.push(value.name);
            matches.push(value.matches)
            console.log(matches)
        }


        return (
            groupnames.map((groupname, i) => (
                <Card key={i} className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <Typography className={classes.typographyH2} gutterBottom variant="headline" component="h2">
                            {groupname}
                        </Typography>
                        {matches.map((match, i) => (
                            <p key={i}>{match.name}</p>
                        ))}
                    </CardContent>
                </Card>
            ))
        );
    }
}

Fixtures.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Fixtures);
