import sys
sys.dont_write_bytecode = True

class Periods():

    def __init__(self, id, name=None) -> None:
        self.id = id
        self.name = name
        
    def to_JSON(self):
        return {
            'id': self.id,
            'name': self.name,
        }