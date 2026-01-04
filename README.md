# 🔐 Decision Table Based Login Automation (Playwright)

## 📌 Project Overview

This project demonstrates a **professional, logic-driven approach to automating a login functionality** using **Playwright with JavaScript**.
The automation is designed using a **Decision Table Test Design Technique** and implemented using a **data-driven framework with JSON-based test data handling**.

The main focus of this project is **test design quality, code maintainability, and meaningful reporting**, rather than just writing automation scripts.

---

## 🎯 Objectives

* Ensure **maximum test coverage** for login functionality
* Convert **test design techniques into automation logic**
* Separate **test data from test logic**
* Write **clean, readable, and scalable automation code**

---

## 🧠 Test Case Design Approach

### Decision Table Testing Technique

The login functionality involves multiple input combinations such as:

* Valid credentials
* Invalid credentials
* Empty email / password

To avoid missing scenarios, test cases were designed using the **Decision Table technique**, where:

* Conditions = Email & Password combinations
* Actions = Login success or failure

This ensures:

* ✔ Better coverage
* ✔ Clear business rules
* ✔ No redundant or missing test cases

---

## 📊 Test Scenarios Covered

* Invalid email + invalid password
* Invalid email + valid password
* Valid email + invalid password
* Empty email
* Empty password
* Empty email & password
* Valid email + valid password

Each scenario maps directly to a **decision table rule**.

---

## 🗂 Test Data Management (JSON)

All test data is maintained in a **separate JSON file**.

### Why JSON?

* JavaScript-based projects have **native support for JSON**
* Lightweight and easy to read
* Ideal for **data-driven testing**
* Allows adding new scenarios **without modifying test logic**

Each JSON object represents:

* One decision table rule
* One complete test scenario

---

## ⚙️ Automation Logic (High-Level)

1. Read test data from JSON
2. Loop through each data set
3. Perform login using email & password
4. Apply conditional validations:

   * ❌ Invalid credentials → error message validation
   * ✅ Valid credentials → welcome message validation
   
---

## 🧪 Assertions Strategy

* **Negative scenarios** validate error messages
* **Positive scenarios** validate successful login indicators
* Conditional assertions ensure correct behavior per scenario

---

## 🧩 Framework Highlights

* Data-driven execution
* Decision table based design
* Clean and readable test structure
* Business-readable test names
* Easy scalability for future scenarios

---

## 🛠 Tools & Technologies Used

* Playwright
* JavaScript
* JSON
* Decision Table Test Design Technique

---

## 📈 Key Takeaways

* Test design should always come **before automation**
* Decision tables help convert business rules into executable tests
* JSON-based data handling improves maintainability
* Clean naming and structure improve test reports and collaboration

---

## 🚀 How to Run the Tests

```bash
npx playwright test
```
---
Happy Testing 🚀
