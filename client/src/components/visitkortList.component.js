import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import _ from 'lodash'

// const Visitkort = props => (
//     <tr>
//         <td>{props.visitkort.name}</td>
//         <td>{props.visitkort.surname}</td>
//         <td>{props.visitkort.telephone}</td>
//         <td>{props.visitkort.email}</td>
//         <td>{props.visitkort.image}</td>
//         <Link to={"/edit/"+props.visitkort._id}>Edit</Link>
//     </tr>
// )

export default class VisitkortList extends Component {

    constructor(props) {
        super(props)

        this.state = { visitkorts: [] }

        this.renderVisitkort = this.renderVisitkort.bind(this)
    }

    componentDidMount() {
        axios.get('http://localhost:8080/visitkort')
            .then(response => {
                console.log(response)
            this.setState({ visitkorts: response.data })
            })
            .catch(function (error) {
            console.log(error)
        })
    }

    // visitkortList() {
    //     return this.state.visitkorts.map(function (currentVisitkort, i) {
    //         return <Visitkort visitkort={currentVisitkort} key={i} />
    //     })
    // }

    render() {
        console.log(this.state.visitkorts)
        return (
            <div>
            <h3>List of Visitkort</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Telephone</th>
                            <th>Email</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderVisitkort()}
                    </tbody>
                </table>
            </div>
        )
    }

    renderVisitkort() {
        console.log(this.state.visitkorts)
        return _.map(this.state.visitkorts, visitkort => {
            return (
                <tr>
            <td className="list-group-item" key={visitkort.name}>
           {visitkort.name}
                    </td>
                    </tr>
            )
        })
    }
}
