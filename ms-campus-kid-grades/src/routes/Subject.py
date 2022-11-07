import sys
sys.dont_write_bytecode = True

from flask import Blueprint, jsonify, request

# Entities
from models.entities.Subject import Subjects
# Models
from models.SubjectModel import subjectModel

main = Blueprint('subject_blueprint', __name__)

@main.route('/', methods=['GET'])
def get_subjects():
    try:
        grs =  subjectModel.get_subjects()
        return jsonify(grs)
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500
    
@main.route('/<id>', methods=['GET'])
def get_subject(id):
    try:
        gr =  subjectModel.get_subject(id)
        if gr != None:
            return jsonify(gr)
        else:
            return jsonify({}), 404
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500
    

@main.route('/', methods=['POST'])
def add_subject():
    try:
        id = request.json['id']
        name = request.json['name']
        description = request.json['description']
        gr = Subjects(id, name, description)
        
        affected_rows =  subjectModel.add_subject(gr)

        if affected_rows == 1:
            return jsonify(gr.id)
        else:
            return jsonify({'message': "Error al Insertar"}), 500
        
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500
    

@main.route('/<id>', methods=['PUT'])
def update_subject(id):
    try:
        name = request.json['name']
        description = request.json['description']
        gr = Subjects(id, name, description)
        
        affected_rows =  subjectModel.update_subject(gr)

        if affected_rows == 1:
            return jsonify(gr.id)
        else:
            return jsonify({'message': "Ningún subject actualizado."}), 404
        
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500
    

@main.route('/<id>', methods=['DELETE'])
def delete_subject(id):
    try:
        gr = Subjects(id)
        
        affected_rows =  subjectModel.delete_subject(gr)

        if affected_rows == 1:
            return jsonify(gr.id)
        else:
            return jsonify({'message': "Ningún subject borrado."}), 404
        
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500