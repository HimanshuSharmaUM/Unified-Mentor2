# Operation Scheduler

**Team:**

Himanshu Sharma

**Project Statement:**

Operation Scheduler is a tool which can be used to store, retrieve information about the different patients, their procedures, doctors, etc. Not only it stores information but also provides different methods to retrieve information. For e.g., getting the details of a patient(his procedures, address, appointments, phone number, etc.). This makes the retrieval of information quick, which not only saves time but also helps in smooth functioning of the hospital.

**Introduction:**

Operation Scheduler handles the basic management of the patient and doctor database, for the smooth functioning of the hospital, helping them to retrieve information easily and adding new information to the database.

**FrontEnd:** HTML, CSS, BootStrap

**BackEnd:** Flask, SQLite(Database), JavaScript, Python

---

## 🚀 How to Run This Project

### Method 1: Full-Stack Mode (Flask Backend + Frontend)

This method runs the complete application with database functionality, allowing full CRUD operations.

#### Prerequisites
- Python 3.7 or higher
- pip (Python package manager)

#### Setup Steps

1. **Clone/Download the repository**
   ```bash
   cd Hospital_Management_System-main
   ```

2. **Create a virtual environment** (recommended)
   ```bash
   python3 -m venv .venv
   source .venv/bin/activate  # On macOS/Linux
   # OR
   .venv\Scripts\activate  # On Windows
   ```

3. **Install dependencies**
   ```bash
   pip install Flask==3.0.3 flask-restful==0.3.10
   ```

4. **Run the application**
   ```bash
   python app.py
   ```

5. **Access the application**
   - Open your browser and go to: `http://127.0.0.1:5000`
   - You'll see the dashboard with all modules

#### What you can do:
- ✅ Add, edit, delete patients, doctors, nurses, departments, etc.
- ✅ Create appointments and prescriptions
- ✅ Manage rooms and procedures
- ✅ All data persists in `database.db` (SQLite)

---

### Method 2: Static Mode (HTML/CSS Only - No Backend)

This method lets you view the interface without running Python/Flask. Perfect for quick demos or testing the UI.

#### Setup Steps

1. **Navigate to the static folder**
   ```bash
   cd static
   ```

2. **Open `index.html` in your browser**
   - **Option A:** Double-click `index.html` to open it directly
   - **Option B:** Right-click → Open With → Your preferred browser
   - **Option C:** Drag and drop `index.html` into your browser window

3. **What you'll see:**
   - Dashboard with sample data (counts are from `mock/common.json`)
   - A banner indicating "Offline demo" mode
   - Animated dashboard tiles with smooth hover effects
   - Fully responsive design

#### What you can do:
- ✅ View the dashboard interface
- ✅ See navigation and layout
- ✅ Experience animations and responsive design
- ❌ Cannot add/edit/delete data (no backend)

#### Offline Mode Features:
- 📱 Fully responsive design (works on mobile, tablet, desktop)
- ✨ Smooth animations on page load
- 🎨 Modern UI with gradient backgrounds
- 📊 Static demo data displayed

---

### Configuration

The application uses `config.json` for settings:

```json
{
  "database": "database.db",
  "port": 5000,
  "host": "127.0.0.1"
}
```

You can modify these values to change the database file location or server port.

---

### Project Structure

```
Hospital_Management_System-main/
├── app.py                 # Flask application entry point
├── config.json           # Application configuration
├── database.db           # SQLite database (auto-created)
├── package/              # Python backend modules
│   ├── model.py         # Database models
│   ├── patient.py       # Patient endpoints
│   ├── doctor.py        # Doctor endpoints
│   └── ...              # Other modules
└── static/               # Frontend files
    ├── index.html       # Main dashboard
    ├── patient.html     # Patient management
    ├── department.html  # Department management
    ├── css/            
    │   ├── offline.css  # Offline mode styles
    │   └── run.css      # Quickstart page styles
    ├── js/
    │   ├── offline.js   # Offline mode logic
    │   └── ...          # Other JS modules
    ├── mock/            # Static demo data
    │   ├── common.json
    │   └── department.json
    └── vendor/          # Third-party libraries
```

---

---

## 📋 Functional Requirements

* Patient's, Doctor's, Nurse's data can be accessed in their respective tables.

* Appointment id can be used to identify the patient's appointment with the doctor.

* Rooms are displayed with their availability status.

* Medication has the records of medicines available with their brand and description.

* Departments in the hospital can be viewed with their head of department.

* The Prescription that a patient is given can be viewed with medication code which the doctor gave at the time along with their appointment id.

* The procedure which the patient undergoes along with the doctor, patient present at the time in the particular room can be accessed.

* Searches can be made within the department, doctor, nurse, medication, room, etc.

---

## 🎨 Features

### Responsive Design
- Works seamlessly on desktop, tablet, and mobile devices
- Fluid grid layout adapts to screen size
- Touch-friendly interface elements

### Animations
- Smooth fade-in effects on dashboard tiles
- Staggered animation timing for visual appeal
- Hover effects with lift and shadow
- Animated number counters on dashboard

### Offline Support
- Can be opened directly from filesystem without a server
- Mock data provided for demonstration purposes
- Visual indicator when running in offline mode

---

## 🛠️ Troubleshooting

### Port Already in Use
If you get an error that port 5000 is already in use:
1. Change the port in `config.json` to another value (e.g., 5001)
2. Or stop the other process using port 5000

### Module Not Found Error
Make sure you've activated the virtual environment and installed dependencies:
```bash
source .venv/bin/activate  # On macOS/Linux
pip install Flask==3.0.3 flask-restful==0.3.10
```

### Database Errors
If you encounter database errors, delete `database.db` and restart the application. Tables will be recreated automatically.

---

## 📝 License

This project is for educational purposes.

---

## 👥 Contributors

- Himanshu Sharma

