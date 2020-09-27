import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class VisitkortList extends Component {

    constructor(props) {
        super(props)

        this.state = { visitkort: [] }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/visitkort')
            .then(response => {
            this.setState({ visitkort: response.data })
            })
            .catch(function (error) {
            console.log(error)
        })
    }
    
    render() {
        return (
            <div>
                <p>List of all Visitkort</p>
            </div>
        )
    }
}
