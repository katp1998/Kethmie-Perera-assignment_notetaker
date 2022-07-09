import {useState} from 'react'
import { useDispatch} from 'react-redux'
import { createNote } from '../features/notes/noteSlice'

function NoteForm() {
  const [formData, setFormData] = useState({title : '', text: " "})

  const dispatch = useDispatch()

  const {title, text} = formData

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createNote({ title, text}))
    setTitle('')
    setText('')
  }
  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Title</label>
          <input
            type='text'
            name='title'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Save
          </button>
        </div>
      </form>
    </section>
  )
}

export default NoteForm