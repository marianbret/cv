import React, { Component } from 'react'
import ProgressBar from './ProgressBar';

export default class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "Javascript", xp:1.5},
            {id: 2, value: "Typescript", xp:2},
            {id: 3, value: "CSS", xp: 0.5},
            {id: 4, value: "Back-end", xp: 2}
        ],
        frameworks: [
            {id: 1, value: "NestJS", xp: 2},
            {id: 2, value: "ReactJs", xp: 0.5},
            {id: 3, value: "Flutter", xp: 0.5},
            {id: 4, value: "PostgreSQL", xp: 2},
            {id: 5, value: "mongoDB", xp: 1}
        ]
    }

    render() {
        let {languages, frameworks} = this.state;

        return (
            <div className="languagesFrameworks">
               <ProgressBar
                languages={languages}
                className="languagesDisplay"
                title="languages"
               />
               <ProgressBar
                languages={frameworks}
                title="frameworks & bibliothèques"
                className="frameworksDisplay"
               />
            </div>
        )
    }
}
