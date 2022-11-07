import sys
sys.dont_write_bytecode = True

from database.db import get_connection
from .entities.Student import Students

class studentModel():
    
    @classmethod
    def get_students(self):
        try:
            connection = get_connection()
            sts = []
            
            with connection.cursor() as cursor:
                cursor.execute('SELECT * FROM "Students"')
                resultset = cursor.fetchall()
                
                for row in resultset:
                    st = Students(row[0], row[1], row[2], row[3], row[4]) 
                    sts.append(st.to_JSON())
                    
            connection.close()
            return sts
        except Exception as ex:
            raise Exception(ex)
    
    @classmethod
    def get_student(self, id):
        try:
            connection = get_connection()
            
            with connection.cursor() as cursor:
                cursor.execute('SELECT * FROM "Students" WHERE id = %s', (id,))
                row= cursor.fetchone()
                
                st = None
                if row != None:
                    st = Students(row[0], row[1], row[2], row[3], row[4]) 
                    st = st.to_JSON()
                    
            connection.close()
            return st
        except Exception as ex:
            raise Exception(ex)
        
    
    @classmethod
    def add_student(self, st):
        try:
            connection = get_connection()
            
            with connection.cursor() as cursor:
                cursor.execute('INSERT INTO "Students" (id, name, email, faculty, career) VALUES (%s, %s, %s, %s, %s)', (st.id, st.name, st.email, st.faculty, st.career))
                affected_rows= cursor.rowcount
                connection.commit()
                    
            connection.close()
            return affected_rows
        except Exception as ex:
            raise Exception(ex)
        
    
    @classmethod
    def update_student(self, st):
        try:
            connection = get_connection()
            
            with connection.cursor() as cursor:
                cursor.execute('''UPDATE "Students" SET name= %s, email= %s, faculty= %s, career= %s
                                WHERE id = %s''', (st.name, st.email, st.faculty, st.career, st.id))
                affected_rows= cursor.rowcount
                connection.commit()
                    
            connection.close()
            return affected_rows
        except Exception as ex:
            raise Exception(ex)
        
    
    @classmethod
    def delete_student(self, st):
        try:
            connection = get_connection()
            
            with connection.cursor() as cursor:
                cursor.execute('DELETE FROM "Students" WHERE id = %s', (st.id,))
                affected_rows= cursor.rowcount
                connection.commit()
                    
            connection.close()
            return affected_rows
        except Exception as ex:
            raise Exception(ex)