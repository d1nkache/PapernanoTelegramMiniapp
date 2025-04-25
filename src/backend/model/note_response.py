from pydantic import BaseModel
from datetime import datetime


class AddNoteResponse(BaseModel):
    id: int
    title: str
    content: str
    created_at: datetime = datetime.now()