export function PropTypes(expectedType) {
    return (props, propName, componentName = 'ANONYMOUS', location, propFullName) => {
        if (props.hasOwnProperty(propName)) {
            const actualType = typeof props[propName];
            if (actualType !== expectedType) {
                const msg = `Invalid ${location} '${propFullName}' of type '${actualType}' supplied to '${componentName}', expected '${expectedType}'.`;
                return new Error(msg);
            }
        }
        return null;
    }
}
