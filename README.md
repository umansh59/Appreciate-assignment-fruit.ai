
## Appreciate Assignment Fruit.ai

Welcome to the Appreciate Assignment Fruit.ai project! This application uses Django for the backend and ReactJS for the frontend to manage and display FAQs.

##deployment link
* [https://appreciate-assignment-fruit-ai.vercel.app/](https://appreciate-assignment-fruit-ai.vercel.app/)

**Table of Contents**

* Backend
    * Setup
    * API Endpoints
* Frontend
    * Setup
    * Admin Access
    * Hosted Links

## Backend

### Setup

1. **Create a Virtual Environment:** Set up a new Python 3.9 environment.

2. **Install Dependencies:** Run the following command to install the required packages:

```bash
pip install -r requirements.txt
```

3. **Run the Backend Server:** Start the backend server with:

```bash
python manage.py runserver
```

### API Endpoints

**Authentication:**

* Admin ID: umansh-admin
* Password: admin

**Endpoints:**

* **Create/Update/Delete FAQs:**
    * Endpoint: `{your-base-url}/api/faqs`
* **Access Specific FAQ:**
    * Endpoint: `{your-base-url}/api/faqs/{id}`
* **Read All FAQs:**
    * Endpoint: `{your-base-url}/api/public/faqs`

**Note:** Replace `{your-base-url}` with your actual deployment URL.

## Frontend

The frontend is built with ReactJS and is designed based on the provided Figma design.

### Setup

1. **Download Frontend Files:** Clone or download the frontend files from the repository.

2. **Configure the .env File:** Set up your `.env` file with the appropriate API endpoints.

3. **Install Dependencies:** Run the following command to install the necessary packages:

```bash
npm install
```

4. **Start the Frontend:** Launch the frontend application with:

```bash
npm start
```

### Admin Access

To create, update, or delete FAQs:

* Admin ID: umansh-admin
* Password: admin

## Hosted Links

* **API Endpoints:** Replace `{your-base-url}` with [https://appreciate-assignment-fruit-ai.onrender.com](https://appreciate-assignment-fruit-ai.onrender.com):
    * [https://appreciate-assignment-fruit-ai.onrender.com/api/faqs/](https://appreciate-assignment-fruit-ai.onrender.com/api/faqs/)
    * [https://appreciate-assignment-fruit-ai.onrender.com/api/faqs/](https://appreciate-assignment-fruit-ai.onrender.com/api/faqs/){id}
    * [https://appreciate-assignment-fruit-ai.onrender.com/api/public/faqs/](https://appreciate-assignment-fruit-ai.onrender.com/api/public/faqs/)

**Note:** The hosted link might take some time to open as it is on a free-tier account.

## Preview Frontend

* [https://appreciate-assignment-fruit-ai.vercel.app/](https://appreciate-assignment-fruit-ai.vercel.app/)




