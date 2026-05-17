### Technology Stack
* **Frontend Tier:** React.js, Axios client, Modern Context API for state management.
* **Backend Tier:** Python 3.11, Django Web Framework, Django REST Framework (DRF).
* **Database Tier:** MySQL 8 Relational Database Management System (RDBMS).
* **Authentication Engine:** SimpleJWT (JSON Web Tokens) with standard payload validation.
* **Infrastructure & DevOps:** Docker, Docker Compose, Nginx Reverse Proxy, AWS EC2 (Ubuntu 24.04 LTS), AWS EBS.

---



### Prerequisites
Ensure you have the following environments installed locally:
* [Docker Desktop](https://www.docker.com/products/docker-desktop/) (includes Docker Compose v2+)
* [Git](https://git-scm.com/)

### Installation Steps

1.  **Clone the Repository:**
  ```bash
    git clone [https://github.com/YOUR_GITHUB_USERNAME/expense-tracker.git](https://github.com/YOUR_GITHUB_USERNAME/expense-tracker.git)
    cd expense-tracker
    ```
    

2.  **Environment Configuration:**
    Create a `.env` file inside the root directory or verify that database parameters in `docker-compose.yml` and `settings.py` align regarding credentials (`MYSQL_DATABASE`, `MYSQL_USER`, `MYSQL_PASSWORD`).

3.  **Build and Spin Up Containers:**
    ```bash
    docker compose up --build -d
    ```

4.  **Execute Database Schema Migrations:**
    ```bash
    docker compose exec backend python manage.py migrate
    ```

5.  **Create Administrative Credentials (Superuser):**
    ```bash
    docker compose exec backend python manage.py createsuperuser
    ```

6.  **Access the Application Ecosystem:**
    * **Frontend Interface:** `http://localhost:3000`
    * **Backend API Root:** `http://localhost:8000/api/`
    * **Django Admin Dashboard:** `http://localhost:8000/admin/`

---

##  Cloud Deployment Pipeline (AWS EC2)

The application is deployed on a dedicated **AWS EC2 Compute Instance** (Free-Tier profile) mapped with persistent database block storage layers.

* **Production Host Endpoint:** `http://13.60.169.2`
* **Operating System Platform:** Ubuntu Server 24.04 LTS
