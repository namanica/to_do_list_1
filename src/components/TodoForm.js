import React, {useState} from 'react'

export const TodoForm = () => {
  const [value, setValue] = useState("")
  const handleSubmit = e => {
    e.preventDefault();
    console.log(value);
  }
  return (
    <form
    className='TodoForm'
    onSubmit={handleSubmit}>
      <input
      type='text'
      className='todo-input'
      placeholder='What are we gonna do today?'
      onChange={(e) => setValue(e.target.value)}/>
      <button
      type='submit'
      className='todo-button'>Add task</button>
    </form>
  )
}
