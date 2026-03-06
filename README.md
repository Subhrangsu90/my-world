# My World – Angular Micro Frontend Portfolio

A **personal portfolio platform built with Angular using Micro Frontend Architecture (MFE)**.
This project demonstrates how multiple independent Angular applications can be integrated into a single platform using **Native Federation**.

The project demonstrates how multiple independent Angular applications can be integrated into a single platform using a **Shell (Host)** application and multiple remote micro frontends.

This repository is mainly used to experiment with **Angular Native Federation**, scalable frontend architecture, and modular portfolio development.


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

* **Angular 20**
* **Native Federation**
* **Angular CLI**
* **TypeScript**
* **RxJS**
* **NgRx**
* **TailwindCSS**

This project uses **Native Federation** via `@angular-architects/native-federation`, which implements the Module Federation concept using **ES Modules and Import Maps**, removing the dependency on webpack.


# Project Goals

This project was created to:

* Learn and implement **Angular Micro Frontends**
* Build a **scalable portfolio platform**
* Separate features into **independent deployable apps**
* Experiment with **Native Federation**


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

**_Note_**: All development in progress.


# Author

**Subhrangsu**
Angular Developer

GitHub:
[https://github.com/Subhrangsu90](https://github.com/Subhrangsu90)

