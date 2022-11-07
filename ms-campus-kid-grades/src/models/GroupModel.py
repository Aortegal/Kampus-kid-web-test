import sys
sys.dont_write_bytecode = True

from database.db import get_connection
from .entities.Group import Groups

class groupModel():
    
    @classmethod
    def get_groups(self):
        try:
            connection = get_connection()
            grs = []
            
            with connection.cursor() as cursor:
                cursor.execute('SELECT * FROM "Groups"')
                resultset = cursor.fetchall()
                
                for row in resultset:
                    gr = Groups(row[0], row[1], row[2], row[3], row[4]) 
                    grs.append(gr.to_JSON())
                    
            connection.close()
            return grs
        except Exception as ex:
            raise Exception(ex)
    
    @classmethod
    def get_group(self, id):
        try:
            connection = get_connection()
            
            with connection.cursor() as cursor:
                cursor.execute('SELECT * FROM "Groups" WHERE id = %s', (id,))
                row= cursor.fetchone()
                
                gr = None
                if row != None:
                    gr = Groups(row[0], row[1], row[2], row[3], row[4]) 
                    gr = gr.to_JSON()
                    
            connection.close()
            return gr
        except Exception as ex:
            raise Exception(ex)
        
    
    @classmethod
    def add_group(self, gr):
        try:
            connection = get_connection()
            
            with connection.cursor() as cursor:
                cursor.execute('INSERT INTO "Groups" (id, schedule, teacher, period, code) VALUES (%s, %s, %s, %s, %s)', (gr.id, gr.schedule, gr.teacher, gr.period, gr.code))
                affected_rows= cursor.rowcount
                connection.commit()
                    
            connection.close()
            return affected_rows
        except Exception as ex:
            raise Exception(ex)
        
    
    @classmethod
    def update_group(self, gr):
        try:
            connection = get_connection()
            
            with connection.cursor() as cursor:
                cursor.execute('''UPDATE "Groups" SET schedule= %s, teacher= %s, period= %s, code= %s
                                WHERE id = %s''', (gr.schedule, gr.teacher, gr.period, gr.code, gr.id))
                affected_rows= cursor.rowcount
                connection.commit()
                    
            connection.close()
            return affected_rows
        except Exception as ex:
            raise Exception(ex)
        
    
    @classmethod
    def delete_group(self, gr):
        try:
            connection = get_connection()
            
            with connection.cursor() as cursor:
                cursor.execute('DELETE FROM "Groups" WHERE id = %s', (gr.id,))
                affected_rows= cursor.rowcount
                connection.commit()
                    
            connection.close()
            return affected_rows
        except Exception as ex:
            raise Exception(ex)