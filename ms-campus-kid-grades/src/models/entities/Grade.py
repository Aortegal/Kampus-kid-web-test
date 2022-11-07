import sys
sys.dont_write_bytecode = True
class Grades():

    def __init__(self, id, enrollment=None, description=None, grade=None, percentage=None) -> None:
        self.id = id
        self.enrollment = enrollment
        self.description = description
        self.grade = grade
        self.percentage = percentage
        
    def to_JSON(self):
        return {
            'id': self.id,
            'enrollment': self.enrollment,
            'description': self.description,
            'grade': self.grade,
            'percentage': self.percentage
        }