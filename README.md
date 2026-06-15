# Document Management System - Frontend Assignment

## Overview

This project is a frontend implementation of a **Document Management System (DMS)** developed as part of the Front-End Developer Assignment.

The application allows users to:

* Login using OTP authentication
* Create users through an admin interface
* Upload documents with metadata
* Manage document tags
* Search documents using multiple filters
* Preview uploaded files
* Download documents

The application is built using **React**, **Redux Toolkit**, **React Router**, **Axios**, and **Bootstrap**.

---

## Technologies Used

* React
* Vite
* React Router DOM
* Redux Toolkit
* Axios
* Bootstrap
* React Datepicker

---

## Features

### Authentication

* OTP-based login interface
* Generate OTP API integration
* Validate OTP API integration
* Protected routes using authentication token

### Admin Module

* Static user creation interface
* Username field
* Password field

### Document Upload

* Document date selection
* Category selection (Personal / Professional)
* Dynamic sub-category dropdown
* Tag management with reusable tags
* Remarks field
* PDF and Image file validation
* Upload API integration

### Document Search

* Search by category
* Search by sub-category
* Search by tags
* Search by date range
* Search API integration

### File Preview

* PDF preview support
* Image preview support
* Unsupported file type notification

### File Download

* Individual document download
* Multiple document download support

---

## Project Structure

```text
src
├── api
│   └── axios.js
├── components
│   ├── Navbar.jsx
│   ├── ProtectedRoute.jsx
│   ├── FileUploadForm.jsx
│   └── TagInput.jsx
├── pages
│   ├── Login.jsx
│   ├── OtpVerification.jsx
│   ├── Dashboard.jsx
│   ├── Upload.jsx
│   ├── Search.jsx
│   └── Admin.jsx
├── routes
│   └── AppRoutes.jsx
├── services
│   ├── authService.js
│   ├── fileService.js
│   └── searchService.js
├── store
│   └── authSlice.js
└── utils
    └── constants.js
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Prateek202/document-management-system
```

Navigate to the project folder:

```bash
cd document-management-system
```

Install dependencies:

```bash
npm install
```

Run the application:

```bash
npm run dev
```

The application will start on:

```text
http://localhost:5173
```

---

## API Integration

The application integrates with the APIs provided in the assignment Postman collection.

Integrated APIs:

* Generate OTP
* Validate OTP
* Document Tags
* Save Document Entry
* Search Document Entry

---

## Responsive Design

The application has been tested for:

* Mobile devices
* Tablets
* Desktop screens

Responsive layouts are implemented using Bootstrap grid and utility classes.

---

## State Management

Redux Toolkit is used for:

* Authentication token management
* Protected route handling

---

## Known Limitations

### Download All as ZIP

The assignment requires downloading all files as a ZIP archive.

The file URLs returned by the API are AWS S3 pre-signed URLs. Browser-side ZIP generation requires fetching these files first; however, the S3 bucket currently blocks cross-origin fetch requests (CORS restriction).

Because of this limitation, individual file download functionality has been implemented successfully, while ZIP generation cannot be completed entirely from the frontend without backend support or S3 CORS configuration changes.

---

## Git Workflow

The project was developed using incremental commits as requested in the assignment requirements.

Each feature and bug fix was committed separately with meaningful commit messages.

---

## Author

Prateek Thakur
