export function NotesList({ notes }: {
  notes: Array<{ id: string, text: string }>,  
}) {
  return (
    <>
    <button>Add Note</button>
    <ul>
      {notes.map(note => (
        <li key={note.id}>{note.text}</li>
      ))}
    </ul>

    </>
  )
}