import sys
sys.dont_write_bytecode = True

from flask import Blueprint, jsonify, request

# Entities
from models.entities.Student import Students
# Models
from models.StudentModel import studentModel

main = Blueprint('students_blueprint', __name__)

@main.route('/', methods=['GET'])
def get_students():
    try:
        grs = studentModel.get_students()
        return jsonify(grs)
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500
    
@main.route('/<id>', methods=['GET'])
def get_student(id):
    try:
        gr = studentModel.get_student(id)
        if gr != None:
            return jsonify(gr)
        else:
            return jsonify({}), 404
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500
    

@main.route('/', methods=['POST'])
def add_student():
    try:
        id = request.json['id']
        name = request.json['name']
        email = request.json['email']
        faculty = request.json['faculty']
        career = request.json['career']
        gr = Students(id, name, email, faculty, career)
        
        affected_rows = studentModel.add_student(gr)

        if affected_rows == 1:
            return jsonify(gr.id)
        else:
            return jsonify({'message': "Error al Insertar"}), 500
        
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500
    

@main.route('/<id>', methods=['PUT'])
def update_student(id):
    try:
        name = request.json['name']
        email = request.json['email']
        faculty = request.json['faculty']
        career = request.json['career']
        gr = Students(id, name, email, faculty, career)
        
        affected_rows = studentModel.update_student(gr)

        if affected_rows == 1:
            return jsonify(gr.id)
        else:
            return jsonify({'message': "Ningún student actualizado."}), 404
        
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500
    

@main.route('/<id>', methods=['DELETE'])
def delete_student(id):
    try:
        gr = Students(id)
        
        affected_rows = studentModel.delete_student(gr)

        if affected_rows == 1:
            return jsonify(gr.id)
        else:
            return jsonify({'message': "Ningún student borrado."}), 404
        
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500