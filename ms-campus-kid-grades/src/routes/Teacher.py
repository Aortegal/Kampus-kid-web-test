import sys
sys.dont_write_bytecode = True

from flask import Blueprint, jsonify, request

# Entities
from models.entities.Teacher import Teachers
# Models
from models.TeacherModel import teacherModel

main = Blueprint('teachers_blueprint', __name__)

@main.route('/', methods=['GET'])
def get_teachers():
    try:
        grs = teacherModel.get_teachers()
        return jsonify(grs)
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500
    
@main.route('/<id>', methods=['GET'])
def get_teacher(id):
    try:
        gr = teacherModel.get_teacher(id)
        if gr != None:
            return jsonify(gr)
        else:
            return jsonify({}), 404
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500
    

@main.route('/', methods=['POST'])
def add_teacher():
    try:
        id = request.json['id']
        name = request.json['name']
        email = request.json['email']
        faculty = request.json['faculty']
        gr = Teachers(id, name, email, faculty)
        
        affected_rows = teacherModel.add_teacher(gr)

        if affected_rows == 1:
            return jsonify(gr.id)
        else:
            return jsonify({'message': "Error al Insertar"}), 500
        
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500
    

@main.route('/<id>', methods=['PUT'])
def update_teacher(id):
    try:
        name = request.json['name']
        email = request.json['email']
        faculty = request.json['faculty']
        gr = Teachers(id, name, email, faculty)
        
        affected_rows = teacherModel.update_teacher(gr)

        if affected_rows == 1:
            return jsonify(gr.id)
        else:
            return jsonify({'message': "Ningún teacher actualizado."}), 404
        
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500
    

@main.route('/<id>', methods=['DELETE'])
def delete_teacher(id):
    try:
        gr = Teachers(id)
        
        affected_rows = teacherModel.delete_teacher(gr)

        if affected_rows == 1:
            return jsonify(gr.id)
        else:
            return jsonify({'message': "Ningún teacher borrado."}), 404
        
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500