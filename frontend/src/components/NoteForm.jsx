import {useState} from 'react'
import { useDispatch} from 'react-redux'
import { createNote } from '../features/notes/noteSlice'

function NoteForm() {
  const [formData, setFormData] = useState({title : '', text: " "})

  const dispatch = useDispatch()

  const {title, text} = formData

  const onChange = e =>{
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
  }))}

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {title, text}

    dispatch(createNote({userData}))
    setFormData('')
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
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='textarea'>Text</label>
          <input
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={onChange}
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