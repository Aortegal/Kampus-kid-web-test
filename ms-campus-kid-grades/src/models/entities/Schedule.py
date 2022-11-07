import sys
sys.dont_write_bytecode = True

class Schedules():

    def __init__(self, id, weekDay=None, startHour=None, endHour=None) -> None:
        self.id = id
        self.weekDay = weekDay
        self.startHour = startHour
        self.endHour = endHour
        
    def to_JSON(self):
        return {
            'id': self.id,
            'weekDay': self.weekDay,
            'startHour' : self.startHour,
            'endHour' : self.endHour           
        }