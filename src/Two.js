import React, { Component } from 'react';

import data from './events.json';

class Two extends Component {
        render () {
                return (
                        <div>
                                {
                                        data.map(function(people) {
                                                // assuming if you want people with
                                                // id=1 only on page 1
                                                if (people.id === 2) {
                                                        return (
                                                                <ul>
                  <li>Name: {people.name}</li>
                  <li>Relationship: {people.relationship}</li>
                  <li>country: {people.country}</li>
                  <li>city: {people.city}</li>
                  <li>Date: {people.date}</li>
                  <li>Time: {people.time}</li>
                </ul>
                                                        )
                                                }
                                        })
                                }
                        </div>
                )
        }
}

export default Two;


