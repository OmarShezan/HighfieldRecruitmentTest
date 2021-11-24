import React, { Component } from 'react';

export class ColourFrequency extends Component {
  static displayName = ColourFrequency.name;

  constructor(props) {
    super(props);
    this.state = {colourfrequency:[], loading: true };
  }

  componentDidMount() {
      this.FetchData();
    }


  static renderColourfrequency(colourfrequencys) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Colour</th>
                        <th>Frequency</th>
                    </tr>
                </thead>
                <tbody>
                    {colourfrequencys.map(colourfrequency =>
                        <tr key={colourfrequency.Key}>
                            <td>{colourfrequency.Key}</td>
                            <td>{colourfrequency.Value}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
        : ColourFrequency.renderColourfrequency(this.state.colourfrequency);


    return (
      <div>
            <h1 id="tabelLabel" >{ this.props.displayName }</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }
    async FetchData() {
        const response = await fetch('api/UserData/ColourFrequency');
        const data = await response.json();
        console.log(data);
        this.setState({ colourfrequency: data, loading: false });
    }
}
