import sys
sys.dont_write_bytecode = True

from flask import Blueprint, jsonify, request

# Entities
from models.entities.Period import Periods
# Models
from models.PeriodModel import periodModel

main = Blueprint('period_blueprint', __name__)

@main.route('/', methods=['GET'])
def get_periods():
    try:
        grs = periodModel.get_periods()
        return jsonify(grs)
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500
    
@main.route('/<id>', methods=['GET'])
def get_period(id):
    try:
        gr = periodModel.get_period(id)
        if gr != None:
            return jsonify(gr)
        else:
            return jsonify({}), 404
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500
    

@main.route('/', methods=['POST'])
def add_period():
    try:
        id = request.json['id']
        name = request.json['name']
        gr = Periods(id, name)
        
        affected_rows = periodModel.add_period(gr)

        if affected_rows == 1:
            return jsonify(gr.id)
        else:
            return jsonify({'message': "Error al Insertar"}), 500
        
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500
    

@main.route('/<id>', methods=['PUT'])
def update_period(id):
    try:
        name = request.json['name']
        gr = Periods(id, name)
        
        affected_rows = periodModel.update_period(gr)

        if affected_rows == 1:
            return jsonify(gr.id)
        else:
            return jsonify({'message': "Ningún period actualizado."}), 404
        
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500
    

@main.route('/<id>', methods=['DELETE'])
def delete_period(id):
    try:
        gr = Periods(id)
        
        affected_rows = periodModel.delete_period(gr)

        if affected_rows == 1:
            return jsonify(gr.id)
        else:
            return jsonify({'message': "Ningún period borrado."}), 404
        
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500