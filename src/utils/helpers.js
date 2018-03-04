const onFieldChange = () => {
    return (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
}

export default { onFieldChange }