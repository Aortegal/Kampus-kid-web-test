import sys
sys.dont_write_bytecode = True

from database.db import get_connection
from .entities.Subject_Period import Subject_Periods

class subject_periodModel():
    
    @classmethod
    def get_subject_periods(self):
        try:
            connection = get_connection()
            sps = []
            
            with connection.cursor() as cursor:
                cursor.execute('SELECT * FROM "Subject_Periods"')
                resultset = cursor.fetchall()
                
                for row in resultset:
                    sp = Subject_Periods(row[0], row[1], row[2]) 
                    sps.append(sp.to_JSON())
                    
            connection.close()
            return sps
        except Exception as ex:
            raise Exception(ex)
    
    @classmethod
    def get_subject_period(self, id):
        try:
            connection = get_connection()
            
            with connection.cursor() as cursor:
                cursor.execute('SELECT * FROM "Subject_Periods" WHERE id = %s', (id,))
                row= cursor.fetchone()
                
                sp = None
                if row != None:
                    sp = Subject_Periods(row[0], row[1], row[2]) 
                    sp = sp.to_JSON()
                    
            connection.close()
            return sp
        except Exception as ex:
            raise Exception(ex)
        
    
    @classmethod
    def add_subject_period(self, sp):
        try:
            connection = get_connection()
            
            with connection.cursor() as cursor:
                cursor.execute('INSERT INTO "Subject_Periods" (id, period, subject) VALUES (%s, %s, %s)', (sp.id, sp.period, sp.subject))
                affected_rows= cursor.rowcount
                connection.commit()
                    
            connection.close()
            return affected_rows
        except Exception as ex:
            raise Exception(ex)
        
    
    @classmethod
    def update_subject_period(self, sp):
        try:
            connection = get_connection()
            
            with connection.cursor() as cursor:
                cursor.execute('''UPDATE "Subject_Periods" SET period= %s, subject= %s
                                WHERE id = %s''', (sp.period, sp.subject, sp.id))
                affected_rows= cursor.rowcount
                connection.commit()
                    
            connection.close()
            return affected_rows
        except Exception as ex:
            raise Exception(ex)
        
    
    @classmethod
    def delete_subject_period(self, sp):
        try:
            connection = get_connection()
            
            with connection.cursor() as cursor:
                cursor.execute('DELETE FROM "Subject_Periods" WHERE id = %s', (sp.id,))
                affected_rows= cursor.rowcount
                connection.commit()
                    
            connection.close()
            return affected_rows
        except Exception as ex:
            raise Exception(ex)