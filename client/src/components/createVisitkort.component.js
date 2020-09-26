import React, { Component } from 'react'

export default class CreateVisitkort extends Component {

    constructor(props) {
        super(props)

        this.state = {
            visitkort_name: '',
            visitkort_surname: '',
            visitkort_telephone: '',
            visitkort_email: '',
            visitkort_image: ''
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
            visitkort_name: e.target.value
        })
    }

    onChangeVisitkortSurname(e) {
        this.setState({
            visitkort_surname: e.target.value
        })
    }

    onChangeVisitkortTelephone(e) {
        this.setState({
            visitkort_telephone: e.target.value
        })
    }

    onChangeVisitkortEmail(e) {
        this.setState({
            visitkort_email: e.target.value
        })
    }

    onChangeVisitkortImage(e) {
        this.setState({
            visitkort_image: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()

        console.log('Form submitted: ')
        console.log('Visitkort name: ${this.state.visitkort_name}')
        console.log('Visitkort surname: ${this.state.visitkort_surname}')
        console.log('Visitkort telephone: ${this.state.visitkort_telephone}')
        console.log('Visitkort email: ${this.state.visitkort_email}')
        console.log('Visitkort image: ${this.state.visitkort_image}')

        this.setState({
            visitkort_name: '',
            visitkort_surname: '',
            visitkort_telephone: '',
            visitkort_email: '',
            visitkort_image: ''
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
                            value={this.state.visitkort_name}
                            onChange={this.onChangeVisitkortName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Surname: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.visitkort_surname}
                            onChange={this.onChangeVisitkortSurname}
                        />
                    </div>
                    <div className="form-group">
                        <label>Telephone: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.visitkort_telephone}
                            onChange={this.onChangeVisitkortTelephone}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.visitkort_email}
                            onChange={this.onChangeVisitkortEmail}
                        />
                    </div>
                    <div className="form-group">
                        <label>Image: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.visitkort_image}
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
