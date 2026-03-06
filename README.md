# My World – Angular Micro Frontend Portfolio

A **personal portfolio platform built with Angular using Micro Frontend Architecture (MFE)**.
This project demonstrates how multiple independent Angular applications can be integrated into a single platform using **Module Federation**.

The goal of this project is to build a scalable developer portfolio while experimenting with modern frontend architecture patterns.



# Architecture Overview

This project follows a **Micro Frontend architecture** where a **shell application** loads multiple independent applications (remotes).

```
                ┌──────────────┐
                │   Shell App  │
                │ (Host App)   │
                └──────┬───────┘
                       │
        ┌──────────────┼──────────────┐
        │                              │
 ┌───────────────┐              ┌────────────────┐
 │ Portfolio MFE │              │ Blog Control   │
 │               │              │ Admin MFE      │
 └───────────────┘              └────────────────┘
```

### 1. Shell Application

The **Shell** acts as the host container.

Responsibilities:

* Handles application routing
* Dynamically loads remote micro frontends
* Integrates all applications into a unified UI

### 2. Portfolio Micro Frontend

A dedicated micro application responsible for displaying the portfolio.

Features:

* Developer profile
* Project showcase
* Skills & experience
* Portfolio UI pages

### 3. Blog Control Micro Frontend

A separate micro frontend responsible for **blog management**.

Features:

* Create blog posts
* Edit blog content
* Manage blog articles
* Admin-style blog dashboard


# Tech Stack

* **Angular**
* **Webpack 5 Module Federation**
* **Angular CLI**
* **TypeScript**
* **RxJS**
* **NgRx**

Module Federation allows multiple applications to share modules and load them dynamically at runtime, enabling scalable micro-frontend architectures. ([SparkCodehub][1])


# Project Goals

This project was created to:

* Learn and implement **Angular Micro Frontends**
* Build a **scalable portfolio platform**
* Separate features into **independent deployable apps**
* Explore **Module Federation with Angular**


# Folder Structure (Conceptual)

```
my-world
│
├── shell                # Main host application
│
├── portfolio-mfe       # Portfolio micro frontend
│
├── blog-control-mfe    # Blog management micro frontend
│
└── shared              # Shared libraries / utilities
```

# Running the Project

### 1 Clone the repository

```bash
git clone https://github.com/Subhrangsu90/my-world.git
cd my-world
```

### 2 Install dependencies

```bash
npm install
```

### 3 Run the applications

Start the shell and micro frontends:

```bash
ng serve shell
ng serve portfolio-mfe
ng serve blog-control-mfe
```


# Future Improvements

* Public blog viewer application
* Authentication for blog admin
* Shared component library
* Deployment with Docker
* CI/CD pipeline


# Author

**Subhrangsu**
Angular Developer

GitHub:
[https://github.com/Subhrangsu90](https://github.com/Subhrangsu90)

