import Button from './Button'

const Header = ({ title, onAdd }) => {
    return (
        <header>
            <h1>{ title }</h1>
            <Button control="btn-light" text="Add" onClick={onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

export default Header
