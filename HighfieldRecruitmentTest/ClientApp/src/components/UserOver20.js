import React, { Component } from 'react';

export class UserOver20 extends Component {
  static displayName = UserOver20.name;

  constructor(props) {
    super(props);
    this.state = { UsersOver20:[], loading: true };
  }

  componentDidMount() {
      this.FetchDate();
    }


  static renderUsersOver20(Users) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Colour</th>
                        <th>Frequency</th>
                    </tr>
                </thead>
                <tbody>
                    {Users.map(User =>
                        <tr key={User.Key}>
                            <td>{User.Key}</td>
                            <td>{User.Value}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
        : UserOver20.renderUsersOver20(this.state. UsersOver20);


    return (
      <div>
            <h1 id="tabelLabel" >{this.props.displayName}</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  //async populateWeatherData() {
  //  const response = await fetch('api/Test');
  //  const data = await response.json();
  //  this.setState({ forecasts: data, loading: false });
  //  }

    async FetchDate() {
        const response = await fetch('api/UserData/Over20s');
        const data = await response.json();
        console.log(data);
        this.setState({ UsersOver20: data, loading: false });
    }
}
