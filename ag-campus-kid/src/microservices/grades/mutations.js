"use strict";

const { HttpProvider } = require("../../providers");

const baseUrl = process.env.MS_GRADES_BASE_URL;

module.exports = {
  createGrades: async (root, { data }) => {
    return await HttpProvider.post(`${baseUrl}/app/grades`, data);
  },
  updateGrades: async (root, {id}) => {
    return await HttpProvider.put(`${baseUrl}/app/grades/${id}`);
  },
  deleteGrades: async (root, {id}) => {
    return await HttpProvider.deleted(`${baseUrl}/app/grades/${id}`);
  },

  createStudents: async (root, { data }) => {
    return await HttpProvider.post(`${baseUrl}/app/students`, data);
  },
  updateStudents: async (root, {id}) => {
    return await HttpProvider.put(`${baseUrl}/app/students/${id}`);
  },
  deleteStudents: async (root, {id}) => {
    return await HttpProvider.deleted(`${baseUrl}/app/students/${id}`);
  },

  createTeachers: async (root, { data }) => {
    return await HttpProvider.post(`${baseUrl}/app/teachers`, data);
  },
  updateTeachers: async (root, {id}) => {
    return await HttpProvider.put(`${baseUrl}/app/teachers/${id}`);
  },
  deleteTeachers: async (root, {id}) => {
    return await HttpProvider.deleted(`${baseUrl}/app/teachers/${id}`);
  },

  createSchedules: async (root, { data }) => {
    return await HttpProvider.post(`${baseUrl}/app/schedules`, data);
  },
  updateSchedules: async (root, {id}) => {
    return await HttpProvider.put(`${baseUrl}/app/schedules/${id}`);
  },
  deleteSchedules: async (root, {id}) => {
    return await HttpProvider.deleted(`${baseUrl}/app/schedules/${id}`);
  },

  createPeriods: async (root, { data }) => {
    return await HttpProvider.post(`${baseUrl}/app/periods`, data);
  },
  updatePeriods: async (root, {id}) => {
    return await HttpProvider.put(`${baseUrl}/app/periods/${id}`);
  },
  deletePeriods: async (root, {id}) => {
    return await HttpProvider.deleted(`${baseUrl}/app/periods/${id}`);
  },

  createGroups: async (root, { data }) => {
    return await HttpProvider.post(`${baseUrl}/app/groups`, data);
  },
  updateGroups: async (root, {id}) => {
    return await HttpProvider.put(`${baseUrl}/app/groups/${id}`);
  },
  deleteGroups: async (root, {id}) => {
    return await HttpProvider.deleted(`${baseUrl}/app/groups/${id}`);
  },

  createEnrollments: async (root, { data }) => {
    return await HttpProvider.post(`${baseUrl}/app/enrollments`, data);
  },
  updateEnrollments: async (root, {id}) => {
    return await HttpProvider.put(`${baseUrl}/app/enrollments/${id}`);
  },
  deleteEnrollments: async (root, {id}) => {
    return await HttpProvider.deleted(`${baseUrl}/app/enrollments/${id}`);
  },

  createSubjects: async (root, { data }) => {
    return await HttpProvider.post(`${baseUrl}/app/subjects`, data);
  },
  updateSubjects: async (root, {id}) => {
    return await HttpProvider.put(`${baseUrl}/app/subjects/${id}`);
  },
  deleteSubjects: async (root, {id}) => {
    return await HttpProvider.deleted(`${baseUrl}/app/subjects/${id}`);
  },
};
