import typing
from typing import List

from src.backend.controller.routes import Routes

from src.backend.service.note_service import NoteService

from src.backend.model.note_request import AddNoteRequest
from src.backend.model.abstract_response import AbstractResponse
from src.backend.model.note_response import AddNoteResponse

from fastapi import APIRouter, Depends

router = APIRouter(prefix = Routes.NOTE_CONTROLLER_PATH)

@router.post("/add-note", response_model = AddNoteResponse)
async def create_note(request: AddNoteRequest, service: NoteService = Depends(NoteService)) -> AddNoteResponse:
        note = await service.create_note(
                note_id=str,
                user_id="current_user_id",
                title=request.title,
                content=request.content
        )
        return note

@router.get("/get-note/{note_id}", response_model=AddNoteResponse)
async def get_note(note_id: str, service: NoteService = Depends(NoteService)) -> AddNoteResponse:
        note = await service.get_note_by_id(note_id)
        return note

@router.get("/get-notes", response_model=List[AddNoteResponse])
async def get_notes(service: NoteService = Depends(NoteService)) -> List[AddNoteResponse]:
        return await service.get_notes

@router.delete("/delete-note/{note_id}")
async def delete_note(note_id: str, service: NoteService = Depends(NoteService)):
        await service.delete_note
        return {"message": "Note deleted"}

@router.patch("/update-note/{note_id}", response_model=AddNoteResponse)
async def update_note(note_id: str, request: AddNoteRequest, service: NoteService = Depends(NoteService)) -> AddNoteResponse:
        note = await service.update_note(note_id=note_id, request_title=request.title, request_content=request.content)
        return note
