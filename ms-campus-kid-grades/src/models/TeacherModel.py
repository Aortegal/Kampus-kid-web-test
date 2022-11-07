import sys
sys.dont_write_bytecode = True

from database.db import get_connection
from .entities.Teacher import Teachers

class teacherModel():
    
    @classmethod
    def get_teachers(self):
        try:
            connection = get_connection()
            tes = []
            
            with connection.cursor() as cursor:
                cursor.execute('SELECT * FROM "Teachers"')
                resultset = cursor.fetchall()
                
                for row in resultset:
                    te = Teachers(row[0], row[1], row[2], row[3]) 
                    tes.append(te.to_JSON())
                    
            connection.close()
            return tes
        except Exception as ex:
            raise Exception(ex)
    
    @classmethod
    def get_teacher(self, id):
        try:
            connection = get_connection()
            
            with connection.cursor() as cursor:
                cursor.execute('SELECT * FROM "Teachers" WHERE id = %s', (id,))
                row= cursor.fetchone()
                
                te = None
                if row != None:
                    te = Teachers(row[0], row[1], row[2], row[3]) 
                    te = te.to_JSON()
                    
            connection.close()
            return te
        except Exception as ex:
            raise Exception(ex)
        
    
    @classmethod
    def add_teacher(self, te):
        try:
            connection = get_connection()
            
            with connection.cursor() as cursor:
                cursor.execute('INSERT INTO "Teachers" (id, name, email, faculty) VALUES (%s, %s, %s, %s)', (te.id, te.name, te.email, te.faculty))
                affected_rows= cursor.rowcount
                connection.commit()
                    
            connection.close()
            return affected_rows
        except Exception as ex:
            raise Exception(ex)
        
    
    @classmethod
    def update_teacher(self, te):
        try:
            connection = get_connection()
            
            with connection.cursor() as cursor:
                cursor.execute('''UPDATE "Teachers" SET name= %s, email= %s, faculty= %s
                                WHERE id = %s''', (te.name, te.email, te.faculty, te.id))
                affected_rows= cursor.rowcount
                connection.commit()
                    
            connection.close()
            return affected_rows
        except Exception as ex:
            raise Exception(ex)
        
    
    @classmethod
    def delete_teacher(self, te):
        try:
            connection = get_connection()
            
            with connection.cursor() as cursor:
                cursor.execute('DELETE FROM "Teachers" WHERE id = %s', (te.id,))
                affected_rows= cursor.rowcount
                connection.commit()
                    
            connection.close()
            return affected_rows
        except Exception as ex:
            raise Exception(ex)