import React from 'react'
import Draggable from 'react-draggable'
import { deleteNote } from '../service/Api'
import './styles/NoteStyle.css'



class Note extends React.Component {


  getRandomColor () {
    var letters = '0123456789ABCDEF'
    var color = '#'
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  handleDelete = () => {
    
    deleteNote(this.props.id)
  }



  render () {
    const { note } = this.props
    return (
      note
        ? (
          <Draggable>
            <div className='note' style={{ backgroundColor: this.getRandomColor() }}>
              <button onClick={() => this.handleDelete(note.id)} style={{ width: 20, marginLeft: '80%', borderRadius: 10,padding: 4, fontWeight: 'bold' }}>
                X
              </button>
              <span className='title'>
                <h2>{note.title}</h2>
              </span>
              <div className='separator' />
              <span className='description'>
                {note.description}
              </span>
            </div>
          </Draggable>
        )
        : 'NO DATA'
    )
  }
}

export default Note
