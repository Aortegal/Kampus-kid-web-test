import sys
sys.dont_write_bytecode = True

from flask import Blueprint, jsonify, request

# Entities
from models.entities.Group import Groups
# Models
from models.GroupModel import groupModel

main = Blueprint('group_blueprint', __name__)

@main.route('/', methods=['GET'])
def get_groups():
    try:
        grs = groupModel.get_groups()
        return jsonify(grs)
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500
    
@main.route('/<id>', methods=['GET'])
def get_group(id):
    try:
        gr = groupModel.get_group(id)
        if gr != None:
            return jsonify(gr)
        else:
            return jsonify({}), 404
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500
    

@main.route('/', methods=['POST'])
def add_group():
    try:
        id = request.json['id']
        schedule = request.json['schedule']
        teacher = request.json['teacher']
        period= request.json['period']
        code = request.json['code']
        gr = Groups(id, schedule, teacher, period, code)
        
        affected_rows = groupModel.add_group(gr)

        if affected_rows == 1:
            return jsonify(gr.id)
        else:
            return jsonify({'message': "Error al Insertar"}), 500
        
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500
    

@main.route('/<id>', methods=['PUT'])
def update_group(id):
    try:
        schedule = request.json['schedule']
        teacher = request.json['teacher']
        period= request.json['period']
        code = request.json['code']
        gr = Groups(id, schedule, teacher, period, code)
        
        affected_rows = groupModel.update_group(gr)

        if affected_rows == 1:
            return jsonify(gr.id)
        else:
            return jsonify({'message': "Ningún group actualizado."}), 404
        
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500
    

@main.route('/<id>', methods=['DELETE'])
def delete_group(id):
    try:
        gr = Groups(id)
        
        affected_rows = groupModel.delete_group(gr)

        if affected_rows == 1:
            return jsonify(gr.id)
        else:
            return jsonify({'message': "Ningún group borrado."}), 404
        
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500