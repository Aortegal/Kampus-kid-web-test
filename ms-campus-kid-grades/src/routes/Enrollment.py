import sys
sys.dont_write_bytecode = True

from flask import Blueprint, jsonify, request

# Entities
from models.entities.Enrollment import Enrollments
# Models
from models.EnrollmentModel import enrollmentModel

main = Blueprint('enrollment_blueprint', __name__)

@main.route('/', methods=['GET'])
def get_enrollments():
    try:
        grs = enrollmentModel.get_enrollments()
        return jsonify(grs)
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500
    
@main.route('/<id>', methods=['GET'])
def get_enrollment(id):
    try:
        gr = enrollmentModel.get_enrollment(id)
        if gr != None:
            return jsonify(gr)
        else:
            return jsonify({}), 404
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500
    

@main.route('/', methods=['POST'])
def add_enrollment():
    try:
        id = request.json['id']
        group = request.json['group']
        student = request.json['student']
        gr = Enrollments(id, group, student)
        
        affected_rows = enrollmentModel.add_enrollment(gr)

        if affected_rows == 1:
            return jsonify(gr.id)
        else:
            return jsonify({'message': "Error al Insertar"}), 500
        
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500
    

@main.route('/<id>', methods=['PUT'])
def update_enrollment(id):
    try:
        group = request.json['group']
        student = request.json['student']
        gr = Enrollments(id, group, student)
        
        affected_rows = enrollmentModel.update_enrollment(gr)

        if affected_rows == 1:
            return jsonify(gr.id)
        else:
            return jsonify({'message': "Ningún enrollment actualizado."}), 404
        
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500
    

@main.route('/<id>', methods=['DELETE'])
def delete_enrollment(id):
    try:
        gr = Enrollments(id)
        
        affected_rows = enrollmentModel.delete_enrollment(gr)

        if affected_rows == 1:
            return jsonify(gr.id)
        else:
            return jsonify({'message': "Ningún enrollment borrado."}), 404
        
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500