import { Container, NotesContainer } from "./styles";
import { useState } from "react";
import CustomHeader from "../components/Header";
import Cards from "../components/Card";
import AddNoteButton from "../components/AddNoteButton";
import NewNoteModal from "../components/NewNoteModal";
import SectionNotas from "../components/SectionNotas";
import SectionFixed from "../components/SectionFixed";
import EmptyNotes from "../components/EmptyNotes";
import { Text } from "../components/NoteForm/styles";

export default function Main() {
  const [isNewNoteModalVisible, setIsNewNoteModalVisible] = useState(false);
  const [notes, setNotes] = useState([{title: 'chama', id: '2'}]);

  function handleCreateNote(note) {
    if (notes.length > 0) {
      const newNotes = [...notes];
      newNotes.unshift(note);
      setNotes(newNotes);
    } else {
      notes.push(note);
    }

    setIsNewNoteModalVisible(false);
  }

  return (
    <Container>
      <CustomHeader />
      <SectionFixed>
        <NotesContainer>
          <Cards notes={notes} />
        </NotesContainer>
      </SectionFixed>
      <SectionNotas />
      <AddNoteButton onPress={() => setIsNewNoteModalVisible(true)} />
      <NewNoteModal
        visible={isNewNoteModalVisible}
        onClose={() => setIsNewNoteModalVisible(false)}
        onSave={handleCreateNote}
      />
    </Container>
  );
}
