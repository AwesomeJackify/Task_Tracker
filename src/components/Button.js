const Button = ({ control, text, onClick }) => {
    return (<button type="button" onClick={onClick} className={`btn ${control}`}>
        { text }
    </button>)
}

export default Button
