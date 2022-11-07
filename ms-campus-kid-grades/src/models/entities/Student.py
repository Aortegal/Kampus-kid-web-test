import sys
sys.dont_write_bytecode = True

class Students():

    def __init__(self, id, name=None, email=None, faculty=None, career=None) -> None:
        self.id = id
        self.name = name
        self.email = email
        self.faculty = faculty
        self.career = career
        
    def to_JSON(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'faculty': self.faculty,
            'career': self.career,
        }