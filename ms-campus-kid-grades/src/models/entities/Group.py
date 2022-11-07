import sys
sys.dont_write_bytecode = True

class Groups():

    def __init__(self, id, schedule=None, teacher=None, period=None, code=None) -> None:
        self.id = id
        self.schedule = schedule
        self.teacher = teacher
        self.period = period
        self.code = code
        
    def to_JSON(self):
        return {
            'id': self.id,
            'schedule': self.schedule,
            'teacher': self.teacher,
            'period': self.period,
            'code': self.code
        }