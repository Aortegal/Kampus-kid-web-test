import sys
sys.dont_write_bytecode = True

from database.db import get_connection
from .entities.Enrollment import Enrollments

class enrollmentModel():
    
    @classmethod
    def get_enrollments(self):
        try:
            connection = get_connection()
            enrs = []
            
            with connection.cursor() as cursor:
                cursor.execute('SELECT * FROM "Enrollments"')
                resultset = cursor.fetchall()
                
                for row in resultset:
                    enr = Enrollments(row[0], row[1], row[2]) 
                    enrs.append(enr.to_JSON())
                    
            connection.close()
            return enrs
        except Exception as ex:
            raise Exception(ex)
    
    @classmethod
    def get_enrollment(self, id):
        try:
            connection = get_connection()
            
            with connection.cursor() as cursor:
                cursor.execute('SELECT * FROM "Enrollments" WHERE id = %s', (id,))
                row= cursor.fetchone()
                
                enr = None
                if row != None:
                    enr = Enrollments(row[0], row[1], row[2]) 
                    enr = enr.to_JSON()
                    
            connection.close()
            return enr
        except Exception as ex:
            raise Exception(ex)
        
    
    @classmethod
    def add_enrollment(self, enr):
        try:
            connection = get_connection()
            
            with connection.cursor() as cursor:
                cursor.execute('INSERT INTO "Enrollments" (id, group, student) VALUES (%s, %s, %s)', (enr.id, enr.group, enr.student))
                affected_rows= cursor.rowcount
                connection.commit()
                    
            connection.close()
            return affected_rows
        except Exception as ex:
            raise Exception(ex)
        
    
    @classmethod
    def update_enrollment(self, enr):
        try:
            connection = get_connection()
            
            with connection.cursor() as cursor:
                cursor.execute('''UPDATE "Enrollments" SET group= %s, student= %s
                                WHERE id = %s''', (enr.group, enr.student, enr.id))
                affected_rows= cursor.rowcount
                connection.commit()
                    
            connection.close()
            return affected_rows
        except Exception as ex:
            raise Exception(ex)
        
    
    @classmethod
    def delete_enrollment(self, enr):
        try:
            connection = get_connection()
            
            with connection.cursor() as cursor:
                cursor.execute('DELETE FROM "Enrollments" WHERE id = %s', (enr.id,))
                affected_rows= cursor.rowcount
                connection.commit()
                    
            connection.close()
            return affected_rows
        except Exception as ex:
            raise Exception(ex)