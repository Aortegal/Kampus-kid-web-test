import sys
sys.dont_write_bytecode = True

class Subject_Periods():

    def __init__(self, id, period=None,  subject=None) -> None:
        self.id = id
        self.period = period
        self.subject = subject
        
    def to_JSON(self):
        return {
            'id': self.id,
            'period' : self.period,
            'subject': self.subject
        }