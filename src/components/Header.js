import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header>
            <h1>{ title }</h1>
            <Button control={` ${showAdd ? "btn-danger" : "btn-success"}`} text={` ${showAdd ? "Close" : "Add"}`} onClick={onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

export default Header
