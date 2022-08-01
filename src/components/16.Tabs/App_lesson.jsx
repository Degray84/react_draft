// @ts-check

import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import Home from './Home.jsx';
import Profile from './Profile.jsx';
import ThemeSwitcher from './ThemeSwitcher.jsx';
import ThemeContext from './contexts';

const themes = [
    {
        id: 1,
        name: 'White',
        className: 'light',
    },
    {
        id: 2,
        name: 'Black',
        className: 'dark',
    },
    {
        id: 3,
        name: 'Blue',
        className: 'dark-blue',
    },
];

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { theme: themes[0] }
    }

    changeChecked = (value) => {
        const theme = themes.find(({ id }) => +id === +value)
        this.setState({ theme })
    }

    // BEGIN (write your solution here)
    render() {
        return (
            <ThemeContext.Provider value={{ themes, theme: this.state.theme, setTheme: this.changeChecked }}>
                <ThemeSwitcher />

                <Tabs>
                    <Tab eventKey="home" title="home">
                        <Home />
                    </Tab>
                    <Tab eventKey="profile" title="profile">
                        <Profile />
                    </Tab>
                </Tabs>
            </ThemeContext.Provider>

        )
    }
    // END
}

export default App;
