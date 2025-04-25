from pydantic import BaseModel, Field


class AddNoteRequest(BaseModel):
    title: str = Field(min_length=1)
    content: str = Field(min_length=1)