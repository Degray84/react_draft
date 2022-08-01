// @ts-check

import React from 'react';

// BEGIN (write your solution here)
export default class Autocomplete extends React.Component {
    constructor(props) {
        super(props)
        this.state = { country: '', countries: [] }
    }

    handleChange = async (e) => {
        const country = e.target.value
        this.setState({ country })
        const { data: countries } = { data: ['Alabama', "Zhodino"] }
        this.setState({ countries })
    }

    render() {
        const { country, countries } = this.state
        return (
            <div>
                <form>
                    <input type="text" className="form-control" placeholder="Enter Country" value={country} onChange={this.handleChange} />
                </form>
                <ul>
                    {countries.map(item => <li key={item}>{item}</li>)}
                </ul>
            </div>
        )
    }
}
// END
