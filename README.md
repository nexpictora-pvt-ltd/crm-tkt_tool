# **`This Porject is Under Heavy Development and Does not Represent Final Quality`**

# CRM-Ticketing Tool Frontend

Welcome to the documentation for the CRM-Ticketing Tool's Frontend. This guide will provide an in-depth overview of the project's frontend structure, its technologies, and comprehensive instructions on how to set up and run the project locally.

## Introduction
- **Documentation Purpose:**  
  The purpose of this documentation is to provide insights into the frontend aspects of the project and help users set up and work with it.

- **Audience:**  
  Specify the intended audience, such as developers, testers, or other team members. Ensure they have the necessary authorization to access the documentation.

## Technology Stack
- **Frontend Technologies:**  
  List and provide detailed explanations of the key technologies used in the project, such as React, Redux, Material-UI, TypeScript, and any other significant dependencies.

- **Technology Explanation:**  
  Provide detailed explanations of how each technology contributes to the project and why it was chosen.

## Project Structure
- **Directory Structure:**  
  Describe the organization of the frontend codebase, including the purpose of each directory (e.g., components, containers, reducers).

- **Major Files:**  
  Mention important files like `index.js`, `App.js`, or any custom configuration files and explain their roles.

## Prerequisites
- **Software Requirements:**  
  List the software and tools necessary to set up and run the project locally (e.g., Node.js, npm).

  **Nodejs installation:**
 Install node js from [here](https://nodejs.org/en/download/current)

  **yarn installation:**
   ```npm install yarn```


## Setup Instructions
- **Clone Repository:**  
  **Install git on your local machine:**
  Download and install [here]( https://git-scm.com/downloads)
  **Open your terminal or command prompt.**
   Navigate to the directory where you want to store the cloned repository. You can use the cd (change directory) command to navigate to the desired location. For example, to navigate to your home directory on a Unix-based system: ```cd ~```.
   **Paste this command in your terminal:**
   ```git clone https://github.com/nexpictora-pvt-ltd/cnx-backend.git```

- **Install Dependencies:**  
  **Navigate to the root directory of your project**
   Ensure you have Yarn installed. If you don't have Yarn installed, you can do so by following the official instructions on the Yarn [website](https://classic.yarnpkg.com/en/docs/install)
   Once Yarn is installed, run the following command to install the project's dependencies:
   ```yarn install```

- **Environment Configuration:**  
 **Create a .env File:**
   Start by creating a .env file in the root directory of your project. This file will store your environment variables. You can name it .env or something more descriptive like ```.env.local```.

   **Define Your Environment Variables:**
   In the .env file, define your environment variables in a key-value format. For example:
   makefile-
   ```js
   API_KEY=your-api-key
   DATABASE_URL=your-database-url
   DEBUG_MODE=true
   ```
   These variables can include API keys, database connection strings, feature flags, and any other configuration options your project needs.

   **Load Environment Variables:**
   To load the environment variables from the .env file, you'll need a package that can read and parse this file. In JavaScript/Node.js, you can use a package like dotenv. Install it by running:

   ```yarn add dotenv```
   Next, at the beginning of your application (usually in your main entry file), require and configure dotenv to load the environment variables:
   ```js
   require('dotenv').config();
   Access Environment Variables:
   ```
   You can now access the environment variables in your code like this:
   ```js
   const apiKey = process.env.API_KEY;
   const databaseURL = process.env.DATABASE_URL;
   const debugMode = process.env.DEBUG_MODE === 'true';
   ```
   The process.env object is automatically populated with the variables you defined in your ```.env``` file

## Configuration
- **API Endpoints:**  
  Describe the API endpoints used by the frontend, including their URLs and how to configure them.

- **Authentication Tokens:**  
  If applicable, explain how to configure and use authentication tokens or other security settings.

## Running the Project Locally
- **Available Scripts:**  
  ```yarn run dev```

- **Starting the Application:**  
  Provide step-by-step instructions on how to start the application locally, including the command to run.

- **Special Considerations:**  
  Highlight any special settings or considerations for local development.

## Features and Functionality
**User**

- **Create User**
   - **Feature Description:** 
   This feature allows administrators to create new user accounts in the CRM system.
   - **Use-case Scenarios:** Administrators use this to onboard new employees or agents into the CRM tool, enabling them to log in and access customer data.

- **Get User**
   - **Feature Description:** Users can retrieve their own user profile information.
   - **Use-case Scenarios:** Regular users can view and update their personal information, like contact details and preferences.

- **List Users**
   - **Feature Description:** This feature provides a list of all users registered in the CRM system.
   - **Use-case Scenarios:** Administrators use this to manage user accounts, view user roles, and monitor activity within the CRM tool.

- **Login User**
   - **Feature Description:** Users can log in to their accounts to access the CRM tool.
   - **Use-case Scenarios:** All users, including administrators and customer support agents, log in to access customer data and perform CRM-related tasks.

- **Renew Access Token**
   - **Feature Description:** This feature generates a new access token for authenticated users, extending their session.
   - **Use-case Scenarios:** To maintain user sessions and prevent unauthorized access, the system automatically renews access tokens.
      Services

**Services**

- **Create Service**
   - **Feature Description:** This feature enables users to create and define new services or products within the CRM tool.
   - **Use-case Scenarios:** Sales teams can add new products or services to the CRM database, specifying details and pricing.

- **Get Service**
   - **Feature Description:** Users can retrieve detailed information about a specific service or product.
   - **Use-case Scenarios:** Sales representatives and customer support agents access this information to provide details to customers or to make updates.

- **List Services**
   - **Feature Description:** This feature provides a list of available services or products within the CRM system.
   - **Use-case Scenarios:** Users search for and browse the available offerings when assisting customers or placing orders.

- **Update Service**
   - **Feature Description:** Users can modify the details of an existing service or product.
   - **Use-case** Scenarios: Product managers or administrators update service descriptions, pricing, or availability.

- **Delete Service**
   - **Feature Description**: This feature allows authorized users to remove services or products from the CRM system.
   - **Use-case Scenarios:** Discontinued or outdated services can be removed from the catalog.

- **List All Services**
      - **Feature Description:** This provides an extensive list of all available services or products in the CRM system.
      - **Use-case Scenarios:** Useful for generating reports or for an overview of all available offerings.
- **All Services Preview**
   - **Feature Description:** This feature offers a summary of all services or products, giving an overview without detailed information.
   - **Use-case Scenarios:** Quick reference for users who need a high-level view of the available offerings.

**Orders**

- **Create Order**
   - **Feature Description:** This feature enables users to create new customer orders, including service selection and order details.
   - **Use-case Scenarios:** Sales representatives, customer support agents, and customers can place orders for services or products.

- **Update Order Status**
   - **Feature Description:** Users can update the status of an existing order, indicating its progress.
   - **Use-case Scenarios:** Sales teams and customer support agents use this to track order fulfillment and provide updates to customers.

- **Update Order Delivered**
   - **Feature Description:** This allows users to mark an order as delivered or completed.
   - **Use-case Scenarios:** Delivery teams or fulfillment staff use this feature to confirm successful order delivery.

- **Get Order**
   - **Feature Description:** Users can retrieve detailed information about a specific customer order.
   - **Use-case Scenarios:** Customer support agents or customers can check order details, including payment status and delivery information.

- **List Orders**
   - **Feature Description:** This provides a list of all customer orders within the CRM system.
   - **Use-case Scenarios:** Customer support teams and administrators use this feature to review and manage orders.

## Troubleshooting
- **Common Issues:**  
  List common issues users might face during setup or usage.

- **Solutions:**  
  Provide detailed solutions or references to relevant resources for each issue.

## Contributing
- **Contributing Guidelines:**  
  Explain how other developers can contribute to the project, including coding standards, branching strategies, and commit guidelines.

- **Bug Reports and Feature Requests:**  
  Describe the process for submitting bug reports and feature requests.



## Contact
- **Contact Information:**  
 [nabilpatel4012@gmail.com](mailto:nabilpatel4012@gmail.com)

    [sourabh.munde15@gmail.com](mailto:sourabh.munde15@gmail.com)

    [ishapathak515@gmail.com](mailto:ishapathak515@gmail.com)
