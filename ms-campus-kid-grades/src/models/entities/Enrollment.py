import sys
sys.dont_write_bytecode = True

class Enrollments():

    def __init__(self, id, group=None, student=None) -> None:
        self.id = id
        self.group = group
        self.student = student
        
    def to_JSON(self):
        return {
            'id': self.id,
            'group': self.group,
            'student': self.student
        }