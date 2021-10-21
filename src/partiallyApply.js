export const partiallyApply = (Component, partialProps) => {
    return props => {
        return <Component {...partialProps} {...props} />
    }
}

// Button is a stateless component
export const Button = ({ color, text, children, ...props }) => <button style = {{
    padding: 10,
    color: '#fff',
    backgroundColor: color
}} className="btn btn-sm">{children}</button>;

export const DangerBtn = partiallyApply(Button, { color: 'orange' });
export const SuccessBtn = partiallyApply(Button, { color: 'green' });
