import sys
sys.dont_write_bytecode = True

from database.db import get_connection
from .entities.Subject import Subjects

class subjectModel():
    
    @classmethod
    def get_subjects(self):
        try:
            connection = get_connection()
            pds = []
            
            with connection.cursor() as cursor:
                cursor.execute('SELECT * FROM "Subjects"')
                resultset = cursor.fetchall()
                
                for row in resultset:
                    pd = Subjects(row[0], row[1], row[2]) 
                    pds.append(pd.to_JSON())
                    
            connection.close()
            return pds
        except Exception as ex:
            raise Exception(ex)
    
    @classmethod
    def get_subject(self, id):
        try:
            connection = get_connection()
            
            with connection.cursor() as cursor:
                cursor.execute('SELECT * FROM "Subjects" WHERE id=%s', (id,))
                row= cursor.fetchone()
                
                pd = None
                if row != None:
                    pd = Subjects(row[0], row[1], row[2]) 
                    pd = pd.to_JSON()
                    
            connection.close()
            return pd
        except Exception as ex:
            raise Exception(ex)
        
    
    @classmethod
    def add_subject(self, pd):
        try:
            connection = get_connection()
            
            with connection.cursor() as cursor:
                cursor.execute('INSERT INTO "Subjects" (id, name, description) VALUES (%s, %s, %s)', (pd.id, pd.name, pd.description))
                affected_rows= cursor.rowcount
                connection.commit()
                    
            connection.close()
            return affected_rows
        except Exception as ex:
            raise Exception(ex)
        
    
    @classmethod
    def update_subject(self, pd):
        try:
            connection = get_connection()
            
            with connection.cursor() as cursor:
                cursor.execute('''UPDATE "Subjects" SET name=%s description=%s
                                WHERE id =%s''', (pd.name, pd.description, pd.id))
                affected_rows= cursor.rowcount
                connection.commit()
                    
            connection.close()
            return affected_rows
        except Exception as ex:
            raise Exception(ex)
        
    
    @classmethod
    def delete_subject(self, pd):
        try:
            connection = get_connection()
            
            with connection.cursor() as cursor:
                cursor.execute('DELETE FROM "Subjects" WHERE id =%s', (pd.id,))
                affected_rows= cursor.rowcount
                connection.commit()
                    
            connection.close()
            return affected_rows
        except Exception as ex:
            raise Exception(ex)