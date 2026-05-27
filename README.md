# Secure Cloud Storage Manager

A secure cloud-based storage management system built using AWS S3, featuring automated backup replication, version control, IAM-based authentication, and a custom web interface for file management.

## Live Demo

http://vishyycloudproject.s3-website-us-east-1.amazonaws.com

---

## Overview

This project demonstrates the implementation of a secure and scalable cloud storage solution using AWS cloud services. The application provides users with a web-based dashboard to upload and manage files while maintaining backup replication, access control, and object versioning.

The system integrates AWS S3 buckets, IAM authentication mechanisms, replication rules, and static website hosting to simulate a real-world cloud storage architecture.

---

## Features

- Secure user authentication
- File upload and management system
- Automated backup replication
- Bucket versioning for file recovery
- IAM-based access management
- Cross-Origin Resource Sharing (CORS) configuration
- Static website hosting using AWS S3
- Responsive frontend interface
- Cloud-based storage architecture

---

## Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript

### Cloud Services
- Amazon S3
- AWS IAM
- AWS STS
- S3 Replication
- S3 Versioning
- Static Website Hosting

---

## System Architecture

```text
User → Web Interface → Primary S3 Bucket
                           ↓
                    Replication Rule
                           ↓
                     Backup S3 Bucket
```

---

## Project Structure

```bash
project/
│
├── index.html
├── dashboard.html
├── style.css
├── script.js
└── README.md
```

---

## Core Functionalities

### Authentication System
Implements secure access control using AWS IAM session-based authentication mechanisms.

### File Upload Interface
Allows users to upload and manage files directly through the web dashboard.

### Backup Replication
Automatically replicates uploaded files from the primary bucket to a secondary backup bucket.

### Version Control
Maintains multiple versions of uploaded objects using S3 bucket versioning.

### Static Website Hosting
Deploys the frontend application using AWS S3 Static Website Hosting.

---

## AWS Services Utilized

| Service | Purpose |
|---|---|
| Amazon S3 | Cloud object storage |
| S3 Replication | Automated backup and redundancy |
| Bucket Versioning | File version management |
| AWS IAM | Identity and access management |
| AWS STS | Temporary authentication tokens |
| Static Website Hosting | Frontend deployment |

---

## Deployment

The application frontend is hosted using Amazon S3 Static Website Hosting.

Deployment Endpoint:

```text
http://vishyycloudproject.s3-website-us-east-1.amazonaws.com
```

---

## Learning Outcomes

This project helped in understanding:

- Cloud storage architecture
- AWS S3 bucket management
- Secure identity and access management
- Data replication strategies
- Object versioning systems
- CORS policies and configurations
- Static web deployment
- Frontend integration with cloud services

---

## Future Enhancements

- Backend API integration
- Database connectivity
- File encryption mechanisms
- Role-based access control
- Docker containerization
- Activity logging and monitoring
- Real-time notifications
- Multi-user support

---

## Author

Vishavjeet Kath

---

## License

This project was developed for academic and educational purposes.
