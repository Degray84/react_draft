// @ts-check

/* eslint-disable react/static-property-placement */

import React from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

import ThemeContext from './contexts';

class ThemeSwitcher extends React.Component {
    // BEGIN (write your solution here)
    static contextType = ThemeContext;

    render() {
        const { context } = this
        const { themes, setTheme } = context;

        return (
            <ButtonGroup className="mb-2">
                {themes.map((theme) => (
                    <ToggleButton
                        key={theme.name}
                        id={theme.id}
                        type="checkbox"
                        variant="primary"
                        value={theme.id}
                        onChange={(e) => setTheme(e.currentTarget.value)}
                    >
                        {theme.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>

        )
    }
    // END
}

export default ThemeSwitcher;
