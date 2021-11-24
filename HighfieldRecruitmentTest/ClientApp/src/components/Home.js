import React, { Component } from 'react';
import { UserOver20 } from './UserOver20';
import { ColourFrequency } from './ColourFrequency';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (

            <div>
                <h1>Omar Shezan</h1>
                <p>Highfield Recruitment Test</p>
                <ColourFrequency displayName="Colour Frequency" name="ColourFrequency" />
                <UserOver20 displayName="Users over 20 years old" name="over20s"/>
            </div>
        );
    }
}
