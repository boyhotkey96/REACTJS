import { useState } from "react";
import { useRef } from "react";

function InputSearch(props) {
  const inputRef = useRef(null)
  const [searchTerm, setSearchTerm] = useState('')
  const { onSubmit } = props

  const handleChangeForm = (e) => {
    setSearchTerm(e.target.value)

    if (!onSubmit) return;

    // Clear timeout pre when input onchange
    if (inputRef.current) {
      clearTimeout(inputRef.current)
    }

    // Using Debounce
    inputRef.current = setTimeout(() => {
      const values = {
        searchTerm: e.target.value,
      }
      onSubmit(values)
    }, 500)
  }

  return (
    <input type='text' ref={inputRef} value={searchTerm} onChange={handleChangeForm} />
  )
}

export default InputSearch