//https://vegibit.com/rendering-a-list-with-react/
import React, { Component } from "react";
import axios from 'axios';
import update from 'immutability-helper';
import { Column } from 'simple-flexbox';


var averagescore = 3000;

export default class ScoreList extends Component {
  state = {
    listitems: [
      {
        _id: 0,
        name: "Placeholder",
        rating: 3000,
        img: "",
        tag: ""
      },
    ],
    totalvotes: [
      {
        _id: 0,
        verif: "totalvotes",
        votes: 1
      }
    ]
  };


  componentDidMount() {
    axios.get("http://157.245.128.87:7000/rankings")
      .then(res => {
        var people = res.data;
        this.setState({ people });
        this.setState({listitems: update(this.state.listitems, {$set: this.state.people})  });

        for (var i = 0; i < this.state.listitems.length; i++) {
          if (this.state.listitems[i].rating < averagescore) {
            this.setState(prevState => {
              let listitems = this.state.listitems;
              listitems[i].average = "Below Average";
              listitems[i].color = "badge badge-danger badge-pill";
              return { listitems };
            })
          }
          else if (this.state.listitems[i].rating > averagescore) {
            this.setState(prevState => {
              let listitems = this.state.listitems;
              listitems[i].average = "Above Average";
              listitems[i].color = "badge badge-success badge-pill";
              return { listitems };
            })
          }
          else {
            this.setState(prevState => {
              let listitems = this.state.listitems;
              listitems[i].average = "Average";
              listitems[i].color = "badge badge-secondary badge-pill";
              return { listitems };
            })

          }
        }

      })

      axios.get("http://157.245.128.87:7000/rankings/vote")
      .then(res => {
        var votes = res.data;
        this.setState({ votes });
        this.setState({totalvotes: update(this.state.totalvotes, {$set: this.state.votes})  });
      })

}



  render() {


    return (
      <React.Fragment>
        <Column vertical = "center">
          <h1 style={{marginLeft: 40}}>Rankings</h1>
          <div style={{marginTop: 10, marginLeft: 40, marginRight: 40}} className="list-group-item d-flex justify-content-between align-items-center">{this.state.totalvotes.map(voteitem => (
            <div key = {voteitem._id}>
            Total Votes: {voteitem.votes}
            </div>
          ))}</div>
        </Column>
        <ul style={{marginTop: 20, marginLeft: 40, marginRight: 40}} className="list-group">
          {this.state.listitems.sort((a,b)=>b.rating - a.rating).map((listitem, index) => (
            <li key={listitem._id} className="list-group-item d-flex justify-content-between align-items-center">
              <span className="badge badge-secondary badge-pill">{index + 1}</span>
              {listitem.name}
              <span className={listitem.color}>{listitem.average}</span>
              <span className="badge badge-primary badge-pill">{(listitem.rating).toFixed(0)}</span>
            </li>
          ))}
        </ul>
      </React.Fragment>

    );
  }
}
