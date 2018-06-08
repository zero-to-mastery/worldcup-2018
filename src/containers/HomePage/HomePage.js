import _ from 'lodash';
import React from 'react';
import { withRouter } from 'react-router';
import './homepage.css';

class HomePage extends React.Component {
  state = {
    groups: {},
    teams: [],
    knockout: {}
  };

  getUpcomingMatchDetails(groups) {
    let groupnames = [];
    let matchDates = [];
    let upcomingMatchDate = '';
    let upcomingMatchGroup = {};
    let knockoutMatches = [];

    for (let value of Object.values(groups)) {
      groupnames.push({groupname:value.name, matches:value.matches});
    }

    // get all groups match dates
    if(groupnames.length){
      groupnames.map(group => {
        return group.matches.map(match => {
          return matchDates.push(match.date);
        })
      })
    }
    
    // get knockout match dates
    if((!_.isEmpty(this.state.knockout))) {
      for (let value of Object.values(this.state.knockout)) {
        knockoutMatches.push(value.matches);
      }
      knockoutMatches.map(knockoutMatch => {
        return knockoutMatch.map(match => {
          return matchDates.push(match.date);
        })
      });
    }

    // get upcoming match date
    if(matchDates.length) {
      matchDates.sort(function(a,b){
        return new Date(a) - new Date(b);
      });
      matchDates.some((date, i) => {
        if(new Date() < new Date(date)) {
          upcomingMatchDate = date;
          return true;
        }
        return false;
      })
    }

    // get upcoming match group
    if(groupnames.length){
      groupnames.map(group => {
        return group.matches.map(match => {
          if(match.date === upcomingMatchDate) {
            upcomingMatchGroup = match;
          }
          return upcomingMatchGroup;
        })
      })
    }
    return _.isEmpty(upcomingMatchGroup) ? null : upcomingMatchGroup;
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json')
      .then(res => res.json())
      .then(data => {
          this.setState({groups: data.groups, teams: data.teams, knockout: data.knockout})
      })
  } 
  render() {
    const {groups, teams, knockout} = this.state;
    let matchDetails = this.getUpcomingMatchDetails(groups);
    let nextMatchDate = '';

    if(!_.isEmpty(matchDetails)) {
      nextMatchDate = new Date(matchDetails.date).toString();
    } else {
      _.values(knockout).map(knockout => {
        if(knockout.name==='Final') matchDetails = knockout.matches[0];
        return matchDetails;
      });
    }

    let home_team, away_team;
    if(!_.isEmpty(matchDetails) && matchDetails.type !== 'winner') {
      home_team = teams.filter(team => team.id===matchDetails.home_team);
      away_team = teams.filter(team => team.id===matchDetails.away_team);
    }
    else {
      _.values(knockout).some(knockout => {
        if(knockout.name==='Semi-finals'){
          home_team = knockout.matches[0];
        }
        return home_team;
      })
      home_team = teams.filter(team => team.id===home_team.winner);
      
      _.values(knockout).some(knockout => {
        if(knockout.name==='Semi-finals'){
          away_team = knockout.matches[1];
        }
        return away_team;
      })
      away_team = teams.filter(team => team.id===away_team.winner);
    }
        
    return (
      <div>
        {
          !_.isEmpty(matchDetails) && matchDetails.type !== 'winner'
            ?  (
              <div id='match_details'>
                <div id='next_match'>
                  <span> Next Match - {nextMatchDate} </span>
                </div>
                <div id='team_details'>
                  <div className='homepage_flag'>
                    <img className='flag_img_sm' src={home_team[0].flag} alt='' />
                  </div>
                  <div className='title'>
                    <span id='home_team'>{home_team[0].name} </span>
                  </div>
                  <div id='vs'>
                    <span> VS </span>
                  </div>
                  <div className='title'>
                    <span id='away_team'> {away_team[0].name} </span>
                  </div>
                  <div className='homepage_flag'>
                    <img className='flag_img_sm' src={away_team[0].flag} alt='' />
                  </div>
                </div>
              </div>
            )
            : (
              !_.isEmpty(matchDetails) 
                ? (
                  <div id='match_details'>
                    <div id='next_match'>
                      <span> FIFA World Cup 2018 Winner - {matchDetails.winner} </span>
                    </div>
                    <div id='team_details'>
                      <div className='homepage_flag'>
                        <img className='flag_img_sm' src={home_team[0].flag} alt='' />
                      </div>
                      <div className='title'>
                        <span id='home_team'>{home_team[0].name} </span>
                      </div>
                      <div id='vs'>
                        <span> VS </span>
                      </div>
                      <div className='title'>
                        <span id='away_team'> {away_team[0].name} </span>
                      </div>
                      <div className='homepage_flag'>
                        <img className='flag_img_sm' src={away_team[0].flag} alt='' />
                      </div>
                    </div>
                  </div>
                )
              : null
            )
        }
      </div>
    );
  }
}

export default withRouter(HomePage);
