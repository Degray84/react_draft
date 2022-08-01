// @ts-check

import React from 'react';
import Editor from '@toast-ui/editor';

// BEGIN (write your solution here)
export default class MarkdownEditor extends React.Component {
    constructor(props) {
        super(props);
        this.editor = React.createRef();
    }

    componentDidMount() {
        const editor = new Editor({
            el: this.editor.current,
            hideModeSwitch: true,
        });

        editor.addHook('change', () => {
            const content = editor.getMarkdown();
            this.props.onContentChange(content)
        });
    }

    render() {
        return (
            <div ref={this.editor}></div>
        )

    }
}
// END
