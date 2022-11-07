import sys
sys.dont_write_bytecode = True

from flask import Blueprint, jsonify, request

# Entities
from models.entities.Schedule import Schedules
# Models
from models.ScheduleModel import scheduleModel

main = Blueprint('schedule_blueprint', __name__)

@main.route('/', methods=['GET'])
def get_schedules():
    try:
        grs = scheduleModel.get_schedules()
        return jsonify(grs)
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500
    
@main.route('/<id>', methods=['GET'])
def get_schedule(id):
    try:
        gr = scheduleModel.get_schedule(id)
        if gr != None:
            return jsonify(gr)
        else:
            return jsonify({}), 404
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500
    

@main.route('/', methods=['POST'])
def add_schedule():
    try:
        id = request.json['id']
        weekDay = request.json['weekDay']
        startHour = request.json['startHour']
        endHour = request.json['endHour']
        gr = Schedules(id, weekDay, startHour, endHour)
        
        affected_rows = scheduleModel.add_schedule(gr)

        if affected_rows == 1:
            return jsonify(gr.id)
        else:
            return jsonify({'message': "Error al Insertar"}), 500
        
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500
    

@main.route('/<id>', methods=['PUT'])
def update_schedule(id):
    try:
        weekDay = request.json['weekDay']
        startHour = request.json['startHour']
        endHour = request.json['endHour']
        gr = Schedules(id, weekDay, startHour, endHour)
        
        affected_rows = scheduleModel.update_schedule(gr)

        if affected_rows == 1:
            return jsonify(gr.id)
        else:
            return jsonify({'message': "Ningún schedule actualizado."}), 404
        
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500
    

@main.route('/<id>', methods=['DELETE'])
def delete_schedule(id):
    try:
        gr = Schedules(id)
        
        affected_rows = scheduleModel.delete_schedule(gr)

        if affected_rows == 1:
            return jsonify(gr.id)
        else:
            return jsonify({'message': "Ningún schedule borrado."}), 404
        
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500