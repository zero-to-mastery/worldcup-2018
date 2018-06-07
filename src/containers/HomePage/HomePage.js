import _ from 'lodash';
import React from 'react';
import { withRouter } from 'react-router';
import './homepage.css';

class HomePage extends React.Component {
  state = {
    groups: {},
    teams: []
  };

  getUpcomingMatchDetails(groups) {
    let groupnames = [];
    let matchDates = [];
    let upcomingMatchDate = '';
    let upcomingMatchGroup = {};

    for (let value of Object.values(groups)) {
      groupnames.push({groupname:value.name, matches:value.matches});
    }

    // get all match dates
    if(groupnames.length){
      groupnames.map(group => {
        return group.matches.map(match => {
          return matchDates.push(match.date);
        })
      })
    }
    
    // TODO: Add knockout matches dates too in the matchDates array

    // get upcoming match date
    if(matchDates.length) {
      matchDates.sort(function(a,b){
        return new Date(a) - new Date(b);
      });
      matchDates = matchDates.some((date, i) => {
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
          return {}
        })
      })
    }
    return upcomingMatchGroup;
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json')
      .then(res => res.json())
      .then(data => {
          this.setState({groups: data.groups, teams: data.teams})
      })
  } 
  render() {
    const {groups, teams} = this.state;
    const matchDetails = this.getUpcomingMatchDetails(groups);
    
    let nextMatchDate = '';
    if(!_.isEmpty(matchDetails)) {
      nextMatchDate = new Date(matchDetails.date).toString();
    }
    
    const home_team = teams.filter(team => team.id===matchDetails.home_team);
    const away_team = teams.filter(team => team.id===matchDetails.away_team);
  
    return (
      <div>
        {
          home_team.length
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
            : null
        }
      </div>
    );
  }
}

export default withRouter(HomePage);
