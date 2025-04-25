import typing
from typing import List, Optional
import  uuid
from datetime import datetime
from src.backend.model.abstract_response import AbstractResponse
from src.backend.model.note_request import AddNoteRequest
from src.backend.model.note_response import AddNoteResponse

from src.backend.data.entities.note import Note

class NoteService:

    def __init__(self):
        self.notes: dict[str, Note] = {}
    
    async def create_note(self, note_id: str ,user_id: str, title: str, content:str) -> Note:
        note = Note(
            id=note_id,
            user_id=user_id,
            title=title,
            content=content,
            created_at=datetime.now()
            )
        self.notes[note.id] = note
        return note
    
    async def delete_note(self, note_id: str) -> AbstractResponse:
        if note_id not in self.notes:
            return AbstractResponse(
                message="Note not found",
                status_code=404
            )
        self.notes.pop(note_id)
        return AbstractResponse(
                message="Note deleted successfully"
            )
    
    async def get_note_by_id(self, note_id:str) -> Optional[Note]:
        return self.notes.get(note_id)
    
    async def get_notes(self) -> List[Note]:
        return list(self.notes.values())
    
    async def update_note(self, note_id: str, request_title: str, request_content: str) -> AbstractResponse:
        note = self.notes.get(note_id)
        if not note:
            return AbstractResponse(
                message = "Note not found",
                status_code = 404
            )
        note.title = request_title
        note.content = request_content

        return AbstractResponse(
                message = "Note updated successfully"
            )