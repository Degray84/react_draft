import React from 'react';

// BEGIN (write your solution here)
export default class MyForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            complete: false,
            email: '',
            password: '',
            address: '',
            city: '',
            country: '',
            acceptRules: false
        }
    }

    handleForm = (e) => {
        e.preventDefault()
        this.setState(() => ({ complete: true }))
    }

    back = (e) => {
        e.preventDefault()
        this.setState(() => ({ complete: false }))
    }

    emailChange = (e) => {
        e.preventDefault()
        this.setState({ email: e.target.value });
    };

    passwordChange = (e) => {
        e.preventDefault()
        this.setState({ password: e.target.value });
    };

    addressChange = (e) => {
        e.preventDefault()
        this.setState({ address: e.target.value });
    };

    cityChange = (e) => {
        e.preventDefault()
        this.setState({ city: e.target.value });
    };

    countryChange = (e) => {
        console.dir(e.target)
        console.log(e.target.value)
        e.preventDefault()
        this.setState({ country: e.target.value });
    };

    acceptChange = (e) => {
        this.setState({ acceptRules: e.target.checked });
    };


    render() {
        const { complete } = this.state;
        const { email, password, address, city, country, acceptRules } = this.state
        const form = (
            <form name="myForm">
                <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="col-form-label">Email</label>
                    <input type="email" name="email" className="form-control" id="email" placeholder="Email" value={email} onChange={this.emailChange} />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="password" className="col-form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="password" placeholder="Password" value={password} onChange={this.passwordChange} />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="address" className="col-form-label">Address</label>
                    <textarea type="text" className="form-control" name="address" id="address" placeholder="1234 Main St" value={address} onChange={this.addressChange}></textarea>
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="city" className="col-form-label">City</label>
                    <input type="text" className="form-control" name="city" id="city" value={city} onChange={this.cityChange} />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="country" className="col-form-label" >Country</label>
                    <select id="country" name="country" className="form-control" value={country} onChange={this.countryChange}>
                        <option>Choose</option>
                        <option value="argentina">Argentina</option>
                        <option value="russia">Russia</option>
                        <option value="china">China</option>
                    </select>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="rules">
                            <input id="rules" type="checkbox" name="acceptRules" className="form-check-input" checked={acceptRules} onChange={this.acceptChange} />
                            Accept Rules
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleForm}>Sign in</button>
            </form>
        );

        const sortA = (a, b) => {
            if (a[0] < b[0]) {
                return -1;
            }
            if (a[0] > b[0]) {
                return 1;
            }
            return 0;
        }

        const rows = Object.entries({ email, password, address, city, country, acceptRules }).sort(sortA).map(([key, value]) => {
            return (
                <tr key={key}>
                    <td>{key}</td>
                    <td>{String(value)}</td>
                </tr>
            )
        })

        const table = (
            <div>
                <button type="button" className="btn btn-primary" onClick={this.back}>Back</button>
                <table className="table">
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        )
        return complete ? table : form
    }
}
// END
