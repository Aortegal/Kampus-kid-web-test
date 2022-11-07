import sys
sys.dont_write_bytecode = True

from flask import Blueprint, jsonify, request

# Entities
from models.entities.Subject_Period import Subject_Periods
# Models
from models.Subject_PeriodModel import subject_periodModel

main = Blueprint('subject_period_blueprint', __name__)

@main.route('/', methods=['GET'])
def get_subject_periods():
    try:
        grs = subject_periodModel.get_subject_periods()
        return jsonify(grs)
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500
    
@main.route('/<id>', methods=['GET'])
def get_subject_period(id):
    try:
        gr = subject_periodModel.get_subject_period(id)
        if gr != None:
            return jsonify(gr)
        else:
            return jsonify({}), 404
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500
    

@main.route('/', methods=['POST'])
def add_subject_period():
    try:
        id = request.json['id']
        period = request.json['period']
        subject = request.json['subject']
        gr = Subject_Periods(id, period, subject)
        
        affected_rows = subject_periodModel.add_subject_period(gr)

        if affected_rows == 1:
            return jsonify(gr.id)
        else:
            return jsonify({'message': "Error al Insertar"}), 500
        
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500
    

@main.route('/<id>', methods=['PUT'])
def update_subject_period(id):
    try:
        period = request.json['period']
        subject = request.json['subject']
        gr = Subject_Periods(id, period, subject)
        
        affected_rows = subject_periodModel.update_subject_period(gr)

        if affected_rows == 1:
            return jsonify(gr.id)
        else:
            return jsonify({'message': "Ningún subject_period actualizado."}), 404
        
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500
    

@main.route('/<id>', methods=['DELETE'])
def delete_subject_period(id):
    try:
        gr = Subject_Periods(id)
        
        affected_rows = subject_periodModel.delete_subject_period(gr)

        if affected_rows == 1:
            return jsonify(gr.id)
        else:
            return jsonify({'message': "Ningún subject_period borrado."}), 404
        
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500