import React, { Component } from 'react'
import axios from 'axios'

export default class CreateVisitkort extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            surname: '',
            telephone: '',
            email: '',
            image: ''
        }

        this.onChangeVisitkortName = this.onChangeVisitkortName.bind(this)
        this.onChangeVisitkortSurname = this.onChangeVisitkortSurname.bind(this)
        this.onChangeVisitkortTelephone = this.onChangeVisitkortTelephone.bind(this)
        this.onChangeVisitkortEmail = this.onChangeVisitkortEmail.bind(this)
        this.onChangeVisitkortImage = this.onChangeVisitkortImage.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChangeVisitkortName(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeVisitkortSurname(e) {
        this.setState({
            surname: e.target.value
        })
    }

    onChangeVisitkortTelephone(e) {
        this.setState({
            telephone: e.target.value
        })
    }

    onChangeVisitkortEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onChangeVisitkortImage(e) {
        this.setState({
            image: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()

        console.log(`Form submitted: `)
        console.log(`Visitkort name: ${this.state.name}`)
        console.log(`Visitkort surname: ${this.state.surname}`)
        console.log(`Visitkort telephone: ${this.state.telephone}`)
        console.log(`Visitkort email: ${this.state.email}`)
        console.log(`Visitkort image: ${this.state.image}`)

        const newVisitkort = {
            name: this.state.name,
            surname: this.state.surname,
            telephone: this.state.telephone,
            email: this.state.email,
            image: this.state.image
        }

        axios.post('http://localhost:8080/visitkort/create', newVisitkort)
            .then(res => console.log(res.data))

        this.setState({
            name: '',
            surname: '',
            telephone: '',
            email: '',
            image: ''
        })
    }
    
    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Create New Visitkort</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeVisitkortName}
                        />
                    </div>
                    <div className="form-group">
                        <label>surname: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.surname}
                            onChange={this.onChangeVisitkortSurname}
                        />
                    </div>
                    <div className="form-group">
                        <label>Telephone: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.telephone}
                            onChange={this.onChangeVisitkortTelephone}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeVisitkortEmail}
                        />
                    </div>
                    <div className="form-group">
                        <label>Image: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.image}
                            onChange={this.onChangeVisitkortImage}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Visitkort" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
