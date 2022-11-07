import sys
sys.dont_write_bytecode = True

from database.db import get_connection
from .entities.Period import Periods

class periodModel():
    
    @classmethod
    def get_periods(self):
        try:
            connection = get_connection()
            pds = []
            
            with connection.cursor() as cursor:
                cursor.execute('SELECT * FROM "Periods"')
                resultset = cursor.fetchall()
                
                for row in resultset:
                    pd = Periods(row[0], row[1]) 
                    pds.append(pd.to_JSON())
                    
            connection.close()
            return pds
        except Exception as ex:
            raise Exception(ex)
    
    @classmethod
    def get_period(self, id):
        try:
            connection = get_connection()
            
            with connection.cursor() as cursor:
                cursor.execute('SELECT * FROM "Periods" WHERE id = %s', (id,))
                row= cursor.fetchone()
                
                pd = None
                if row != None:
                    pd = Periods(row[0], row[1]) 
                    pd = pd.to_JSON()
                    
            connection.close()
            return pd
        except Exception as ex:
            raise Exception(ex)
        
    
    @classmethod
    def add_period(self, pd):
        try:
            connection = get_connection()
            
            with connection.cursor() as cursor:
                cursor.execute('INSERT INTO "Periods" (id, name) VALUES (%s, %s)', (pd.id, pd.name))
                affected_rows= cursor.rowcount
                connection.commit()
                    
            connection.close()
            return affected_rows
        except Exception as ex:
            raise Exception(ex)
        
    
    @classmethod
    def update_period(self, pd):
        try:
            connection = get_connection()
            
            with connection.cursor() as cursor:
                cursor.execute('''UPDATE "Periods" SET name= %s
                                WHERE id = %s''', (pd.name, pd.id))
                affected_rows= cursor.rowcount
                connection.commit()
                    
            connection.close()
            return affected_rows
        except Exception as ex:
            raise Exception(ex)
        
    
    @classmethod
    def delete_period(self, pd):
        try:
            connection = get_connection()
            
            with connection.cursor() as cursor:
                cursor.execute('DELETE FROM "Periods" WHERE id = %s', (pd.id,))
                affected_rows= cursor.rowcount
                connection.commit()
                    
            connection.close()
            return affected_rows
        except Exception as ex:
            raise Exception(ex)