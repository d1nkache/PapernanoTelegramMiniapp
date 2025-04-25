import pydantic
from pydantic import BaseModel
from datetime import datetime

class Note(BaseModel):
    id: str
    user_id: str
    title: str
    content: str
    created_at: datetime = datetime.now()