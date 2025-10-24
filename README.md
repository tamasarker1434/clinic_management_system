# **🏥 Clinic Management System**

A modular healthcare management platform built using **Java Spring Boot Microservices Architecture**.  
The system streamlines patient registration, doctor appointments, emergency handling, laboratory operations, staff management, and real-time notifications.  
Each service is independently deployable, scalable, and designed with **Spring Cloud**, **JWT Security**, and **asynchronous communication**.

---

## 🚀 **Tech Stack**

- **Backend:** Java, Spring Boot, Spring Cloud
- **Database:** PostgreSQL, MongoDB
- **Messaging:** Kafka (for event-driven communication)
- **Security:** Spring Security, JWT Authentication
- **API Documentation:** Swagger 
- **Frontend (Optional):** React
- **Deployment:** Docker & Docker Compose

---

## 🧩 **Core Modules & Departments**

### 1. Patient Management System
- Patient registration and profile management  
- Medical history tracking  
- Appointment and visit history  
- Emergency contact and insurance details  

### 2. Doctor Appointment System
- Online appointment booking  
- Doctor availability calendar  
- Email/SMS reminders  
- Rescheduling and cancellation  
- Optional video consultation  

### 3. Emergency Department
- Emergency patient registration  
- Triage system with priority levels  
- Real-time bed and room availability  
- Critical case tracking and notifications  

### 4. Laboratory Management
- Test order management  
- Sample tracking system  
- Result entry, validation, and reporting  
- Quality control logs  

### 5. Staff Management
- Doctor, nurse, and lab operator profiles  
- Role-based access control  
- Work schedule and leave management  
- Performance tracking  

---

## 🧠 **Microservices Overview**

| Service Name             | Responsibility                          |
|--------------------------|-----------------------------------------|
| **Admin Service**        | Authentication, role, & user management |
| **Staff Service**        | Staff Management                        |
| **Patient Service**      | Patient data & profiles                 |
| **Appointment Service**  | Booking & scheduling                    |
| **Notification Service** | Email/SMS alerts & reminders            |
| **Emergency Service**    | Emergency department operations         |
| **Laboratory Service**   | Test orders & results management        |

---

