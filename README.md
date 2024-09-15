Appreciate Assignment Fruit.ai
Welcome to the Appreciate Assignment Fruit.ai project! This application uses Django for the backend and ReactJS for the frontend to manage and display FAQs.

Table of Contents
Backend
Setup
API Endpoints
Frontend
Setup
Admin Access
Hosted Links
Backend
Setup
Create a Virtual Environment: Set up a new Python 3.9 environment.

Install Dependencies: Run the following command to install the required packages:

bash
Copy code
pip install -r requirements.txt
Run the Backend Server: Start the backend server with:

bash
Copy code
python manage.py runserver
API Endpoints
Create/Update/Delete FAQs:

Endpoint: {your-base-url}/api/faqs
Admin ID: umansh-admin
Password: admin
Access Specific FAQ:

Endpoint: {your-base-url}/api/faqs/{id}
Admin ID: umansh-admin
Password: admin
Read All FAQs:

Endpoint: {your-base-url}/api/public/faqs
Frontend
The frontend is built with ReactJS and is designed based on the provided Figma design.

Setup
Download Frontend Files: Clone or download the frontend files from the repository.

Configure the .env File: Set up your .env file with the appropriate API endpoints.

Install Dependencies: Run the following command to install the necessary packages:

bash
Copy code
npm install
Start the Frontend: Launch the frontend application with:

bash
Copy code
npm start
Admin Access
To create, update, or delete FAQs:

Admin ID: umansh-admin
Password: admin
Hosted Links
Replace {your-base-url} with https://appreciate-assignment-fruit-ai.onrender.com:

Create/Update/Delete FAQs
Read All FAQs
Note: The hosted link might take some time to open as it is on a free-tier account.

Preview Frontend: https://appreciate-assignment-fruit-ai.vercel.app/

