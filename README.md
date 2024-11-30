# Clinic-Management-System [WEBSITE](__https://www.myecho.co.in/index.php__)

![PNG](GoldenHealthServices.png)
### Golden Health Services Pvt Ltd
__https://www.myecho.co.in/index.php__ **Deployment**

---

# Clinic-Management-System (__https://www.myecho.co.in/index.php__)

### **Overview**
The Clinic Management System (CMS) is a full-stack web application designed to streamline clinic operations. It includes:
- A **frontend** built with Angular for managing user interactions and displaying data.
- A **backend** built with Node.js for handling API requests, authentication, and database operations.

This system is modular and scalable, making it suitable for small to medium-sized clinics.


---

### **Angular Files**
- Configuration and project files:
  - `.editorconfig`, `.gitignore`, `.vscode/`
  - `angular.json`, `browserslist`, `karma.conf.js`
  - `tsconfig.*.json`, `tslint.json`
- App-specific code:
  - `src/`: Main application source folder
- Dependencies:
  - `package.json`, `package-lock.json`
- Documentation:
  - `README.md`, 

---

### **Node.js Files**
- Core files:
  - `index.js`, `server.js`
- Configuration:
  - `.env`, `package.json`, `package-lock.json`
- App folder:
  - `server/`
- Documentation:
  - `README.md`

### **Python Files**

-dcm_script.py

---

## **Features**

1. **Patient Management**:
   - Add, update, or remove patient records.
   - View appointment history and medical records.

2. **Appointment Scheduling**:
   - Book, reschedule, or cancel appointments.
   - Integrated calendar view for clinic operations.

3. **Staff Management**:
   - Add and manage staff details.
   - Role-based access control.

4. **Medical Records**:
   - Securely store and retrieve patient medical data.

---

## **Technologies Used**
- **Frontend**: Angular
- **Backend**: Node.js with Express.js
- **Database**: MySQL

---

## **Analysis of `dcm_script.py`**

This script is designed to analyze and process DICOM (Digital Imaging and Communications in Medicine) files, typically used in medical imaging. It uses libraries like `pydicom` (for reading DICOM files), `opencv-python` (for image/video processing), and `Pillow` (potentially for image handling). Below is a breakdown of its key functionalities:

---

#### **A. DICOM File Handling**
- **Reading DICOM Files**:  
  The script uses `pydicom.dcmread()` to read DICOM files and convert them into JSON-like structures for analysis and processing.

- **Branching Logic**:
  - `readDicom(file_path)` determines the type of data in the file and delegates processing to:
    - `readDataDicom(file_path)`: For DICOM data files with findings.
    - `readFileDicom(file_path)`: For DICOM files containing pixel data (images/videos).

---

#### **B. Image and Video Creation**
- **createImage(img, file_path)**:
  - Converts an image from LAB color space to BGR using OpenCV.
  - Saves the image in JPEG format and outputs metadata as JSON.

- **createVideo(imgs, height, width, file_path)**:
  - Compiles a sequence of images into a video (MP4 format) using OpenCV.
  - Outputs metadata as JSON.

---

#### **C. Metadata Extraction**
The script extracts structured data (like patient details and findings) from the DICOM file:

- **Patient Data**:
  - `getPatientData(output, patient)` extracts metadata such as:
    - Patient name, sex, date of birth, ID, size, weight.
    - Manufacturer details, report details, and institution name.

- **Findings Data**:
  - `getFindings(findings_array)` processes medical findings, such as:
    - Finding site details (e.g., anatomical location).
    - Image modes, identifiers, and associated data.

- **Helper Functions**:
  - `getItemData`, `getIdentifier`, `getValue`, and `getListData` process nested DICOM metadata for better organization.

---


### **3. Dependencies**
- **pydicom**: For DICOM file handling.
- **opencv-python**: For image and video processing.
- **json**: To format and output metadata.
- **datetime**: For date formatting.
- **pathlib**: For path manipulations.

---

### **4. Strengths**
- Comprehensive handling of both pixel data (images/videos) and metadata (patient and findings).
- Modular design with helper functions for specific tasks.
- JSON output for interoperability with other systems.


---

## **Getting Started**

### **1. Prerequisites**
- Node.js (v14 or later)
- Angular CLI (v9.1.9 or later)
- [Database software]

### **2. Installation**

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.9.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

---

### Connect

If you have any questions or suggestions, feel free to reach out to me:

- Email: [vijaykumarit45@gmail.com](mailto:vijaykumarit45@gmail.com)
- GitHub: [Profile](https://github.com/vijaykumarr1452)
- Linkedin: [Linkedin](https://www.linkedin.com/in/rachuri-vijaykumar/)
- Twitter: [Twitter](https://x.com/vijay_viju1)


---

Let me know if you'd like me to refine this further or add specific features! 😊

