import sys
sys.dont_write_bytecode = True

from database.db import get_connection
from .entities.Schedule import Schedules

class scheduleModel():
    
    @classmethod
    def get_schedules(self):
        try:
            connection = get_connection()
            shs = []
            
            with connection.cursor() as cursor:
                cursor.execute('SELECT * FROM "Schedules"')
                resultset = cursor.fetchall()
                
                for row in resultset:
                    sh = Schedules(row[0], row[1], row[2], row[3]) 
                    shs.append(sh.to_JSON())
                    
            connection.close()
            return shs
        except Exception as ex:
            raise Exception(ex)
    
    @classmethod
    def get_schedule(self, id):
        try:
            connection = get_connection()
            
            with connection.cursor() as cursor:
                cursor.execute('SELECT * FROM "Schedules" WHERE id = %s', (id,))
                row= cursor.fetchone()
                
                sh = None
                if row != None:
                    sh = Schedules(row[0], row[1], row[2], row[3]) 
                    sh = sh.to_JSON()
                    
            connection.close()
            return sh
        except Exception as ex:
            raise Exception(ex)
        
    
    @classmethod
    def add_schedule(self, sh):
        try:
            connection = get_connection()
            
            with connection.cursor() as cursor:
                cursor.execute('INSERT INTO "Schedules" (id, "weekDay", "startHour", "endHour") VALUES (%s, %s, %s, %s)', (sh.id, sh.weekDay, sh.startHour, sh.endHour))
                affected_rows= cursor.rowcount
                connection.commit()
                    
            connection.close()
            return affected_rows
        except Exception as ex:
            raise Exception(ex)
        
    
    @classmethod
    def ushate_schedule(self, sh):
        try:
            connection = get_connection()
            
            with connection.cursor() as cursor:
                cursor.execute('''UPDATE "Schedules" SET "weekDay"= %s, "startHour"= %s, "endHour"= %s
                                WHERE id = %s''', (sh.weekDay, sh.startHour, sh.endHour, sh.id))
                affected_rows= cursor.rowcount
                connection.commit()
                    
            connection.close()
            return affected_rows
        except Exception as ex:
            raise Exception(ex)
        
    
    @classmethod
    def delete_schedule(self, sh):
        try:
            connection = get_connection()
            
            with connection.cursor() as cursor:
                cursor.execute('DELETE FROM "Schedules" WHERE id = %s', (sh.id,))
                affected_rows= cursor.rowcount
                connection.commit()
                    
            connection.close()
            return affected_rows
        except Exception as ex:
            raise Exception(ex)