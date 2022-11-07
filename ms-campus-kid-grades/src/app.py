import sys
sys.dont_write_bytecode = True

from flask import Flask, jsonify
from flask_cors import CORS
from config import config

# Routes
from routes import Enrollment
from routes import Grade
from routes import Group
from routes import Period
from routes import Schedule
from routes import Student
from routes import Subject_Period
from routes import Teacher
from routes import Subject

from users import users

app = Flask(__name__)

CORS(app, resources={"*": {"origins": "http://localhost:3000"}})

def page_not_found(error):
    return "<h1>Página no encontrada</h1>", 404

@app.route('/users', methods=['GET'])
def usersHandler():
    return jsonify({"users": users})

if __name__ == '__main__':
    app.config.from_object(config['development'])
    
    # Blueprints
    app.register_blueprint(Enrollment.main, url_prefix ='/app/enrollments')
    app.register_blueprint(Grade.main, url_prefix ='/app/grades')
    app.register_blueprint(Group.main, url_prefix ='/app/groups')
    app.register_blueprint(Period.main, url_prefix ='/app/periods')
    app.register_blueprint(Schedule.main, url_prefix ='/app/schedules')
    app.register_blueprint(Student.main, url_prefix ='/app/students')
    app.register_blueprint(Subject_Period.main, url_prefix ='/app/subject_periods')
    app.register_blueprint(Teacher.main, url_prefix ='/app/teachers')
    app.register_blueprint(Subject.main, url_prefix ='/app/subjects')
    
    #Error handlers
    app.register_error_handler(404, page_not_found)
    
    app.run(host="0.0.0.0", port=4001, debug=True)
    
    
    
