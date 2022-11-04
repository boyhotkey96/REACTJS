import { useState } from 'react'
import PropTypes from 'prop-types'

TodoForm.propTypes = {
    onHandleTodoForm: PropTypes.func,
}

TodoForm.defaultProps = {
    onHandleTodoForm: null,
}

function TodoForm(props) {
    const { onHandleTodoForm } = props

    const [value, setValue] = useState('')

    const handleOnChange = (e) => {
        // console.log(e.target.value)
        setValue(e.target.value)
    }

    const handleOnSubmit = (e) => {
        // prevent reload browser
        e.preventDefault()
        if (!onHandleTodoForm) return;

        const formValues = {
            title: value
        }
        onHandleTodoForm(formValues)

        // Reset form
        setValue('')
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input value={value} onChange={handleOnChange} />
        </form>
    )
}

export default TodoForm