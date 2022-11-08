"use strict";

const { HttpProvider } = require("../../providers");

const baseUrl = process.env.MS_GRADES_BASE_URL;

module.exports = {
  getGrades: async () => {
    return await HttpProvider.get(`${baseUrl}/app/grades`);
  },
  getGradeById: async (id) => {
    return await HttpProvider.get(`${baseUrl}/app/grades`+id);
  },

  getStudents: async () => {
    return await HttpProvider.get(`${baseUrl}/app/students`);
  },
  getStudentById: async (id) => {
    return await HttpProvider.get(`${baseUrl}/app/students`+id);
  },

  getTeachers: async () => {
    return await HttpProvider.get(`${baseUrl}/app/teachers`);
  },
  getTeacherById: async (id) => {
    return await HttpProvider.get(`${baseUrl}/app/teachers`+id);
  },

  getSchedules: async () => {
    return await HttpProvider.get(`${baseUrl}/app/schedules`);
  },
  getScheduleById: async (id) => {
    return await HttpProvider.get(`${baseUrl}/app/schedules`+id);
  },

  getPeriods: async () => {
    return await HttpProvider.get(`${baseUrl}/app/periods`);
  },
  getPeriodById: async (id) => {
    return await HttpProvider.get(`${baseUrl}/app/periods`+id);
  },

  getGroups: async () => {
    return await HttpProvider.get(`${baseUrl}/app/groups`);
  },
  getGroupById: async (id) => {
    return await HttpProvider.get(`${baseUrl}/app/groups`+id);
  },

  getEnrollments: async () => {
    return await HttpProvider.get(`${baseUrl}/app/enrollments`);
  },
  getEnrollmentById: async (id) => {
    return await HttpProvider.get(`${baseUrl}/app/enrollments`+id);
  },

  getSubjects: async () => {
    return await HttpProvider.get(`${baseUrl}/app/subjects`);
  },
  getSubjectById: async (id) => {
    return await HttpProvider.get(`${baseUrl}/app/subjects`+id);
  },
};
