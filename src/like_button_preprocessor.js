/* Run JSX Preprocessor

1. Run npm init -y
2. Run npm install babel-cli@6 babel-preset-react-app@3
3. Create a folder called src.
4. Run npx babel --watch src --out-dir . --presets react-app/prod */

class LikeButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = { liked: false }
    }

    render() {
        if (this.state.liked)
            return 'You liked this.'

        return (
            <button onClick={() => this.setState({ liked: true })}>
                Like
            </button>
        )
    }
}

let domContainer = document.querySelector('#like_button_container')
ReactDOM.render(<LikeButton />, domContainer)