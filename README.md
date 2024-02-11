<div align="center">

  <div>
    <img src="https://img.shields.io/badge/-Next_JS_14-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="Next.js" />
  </div>

  <h3 align="center">SCFN/LUTH Official Website (BMT Project)</h3>

   <div align="center">
     This project was built for Sickle Cell Foundation Of Nigeria X Lagos State University Of Technology.
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)

## 🚨 Introduction

This repository contains the code corresponding to the build, using minimal stacks, nothing too crazy. React JS and TailwindCSS.

## <a name="introduction">🤖 Information</a>

The project was initial built with the NextJS Stack. But then we downgraded to React, reasons for this is we encountered a huge challenge during deployment. We realized that individual links in the web application was not working, for example of the official webpage is `https://scfn-luth-transplant.sicklecellfoundation.com/` so say we want to send someone to a particular page, say the donation page? `https://scfn-luth-transplant.sicklecellfoundation.com/donation` the link breaks.

I tried everything because we initially thought the issues was from react-router / the routing functionality implemented on the page. In the end the issue was because we did add a .HTCAccess file to the c-panel's public_html file.


## <a name="tech-stack">⚙️ Tech Stack</a>

- React JS
- TailwindCSS
- AOS Animation Library

## <a name="features">🔋 Features</a>

👉 **Flutterwave** Added payment integration for Flutterwave, users can donate in Naira and dollars on the platform.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/your-username/your-project.git
cd your-project
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
#
