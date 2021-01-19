import './Button.scss'

const Button = ({children, style}) => {
    return (
        <div className="button" style={style}>
            <a href="/">{children}</a>
        </div>
    )
}

export default Button;