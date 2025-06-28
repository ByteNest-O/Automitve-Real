
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth services
export const authService = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  getCurrentUser: () => api.get('/auth/me'),
};

// Customer services
export const customerService = {
  getProfile: () => api.get('/customers/profile'),
  updateProfile: (data) => api.put('/customers/profile', data),
  getVehicles: () => api.get('/customers/vehicles'),
  addVehicle: (vehicle) => api.post('/customers/vehicles', vehicle),
  getAppointments: () => api.get('/customers/appointments'),
  scheduleAppointment: (appointment) => api.post('/customers/appointments', appointment),
};

// Technician services
export const technicianService = {
  getAssignedJobs: () => api.get('/technicians/jobs'),
  updateJobStatus: (jobId, status) => api.put(`/technicians/jobs/${jobId}`, { status }),
  getSchedule: () => api.get('/technicians/schedule'),
};

// Service Advisor services
export const serviceAdvisorService = {
  getCustomers: () => api.get('/service-advisors/customers'),
  getAppointments: () => api.get('/service-advisors/appointments'),
  createEstimate: (estimate) => api.post('/service-advisors/estimates', estimate),
  assignTechnician: (jobId, technicianId) => api.put(`/service-advisors/jobs/${jobId}/assign`, { technicianId }),
};

// Admin services
export const adminService = {
  getUsers: () => api.get('/admin/users'),
  createUser: (user) => api.post('/admin/users', user),
  updateUser: (userId, data) => api.put(`/admin/users/${userId}`, data),
  deleteUser: (userId) => api.delete(`/admin/users/${userId}`),
  getReports: () => api.get('/admin/reports'),
};

// Super Admin services
export const superAdminService = {
  getAllOrganizations: () => api.get('/super-admin/organizations'),
  createOrganization: (org) => api.post('/super-admin/organizations', org),
  getSystemMetrics: () => api.get('/super-admin/metrics'),
  manageSubscriptions: () => api.get('/super-admin/subscriptions'),
};

export default api;
