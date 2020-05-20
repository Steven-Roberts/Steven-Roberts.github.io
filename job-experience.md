---
layout: article
title: Job Experience
priority: 70
icon: work
cards:
  - title: Research
    subtitle: Undergraduate and Graduate
    date: Spring 2015–Present
    img: /assets/img/job-experience/research.jpg
    description: |
      * Designing, analyzing, and testing new multirate time integrators for numerically solving multiscale differential equations
      * Developing new implicit-explicit (IMEX) methods suitable for stiff problems and differential algebraic equations.
      * Creating a new framework for multimethods based on partitioned general linear methods

  - title: Graduate Teaching Assistant
    subtitle: "CS 4234/5234: Parallel Computation"
    date: Fall 2019–Spring 2020
    img: /assets/img/job-experience/teaching-assistant.jpg
    description: |
      * Held weekly office hours to help students with assignments
      * Taught ten of the classes on topics including OpenMP, parallel performance metrics, and GPU computing with CUDA

  - title: Lawrence Livermore National Lab
    subtitle: Intern
    date: Summer 2019
    img: /assets/img/job-experience/LLNL-2019.jpg
    description: |
      * Developed new implicit multirate Runge--Kutta methods for solving stiff, multiscale systems of ordinary differential equations
      * Compared and implemented variants of multirate backward differentiation formula methods
      * View my [final poster presentation](/assets/doc/LLNL-poster-2019.pdf)

  - title: Lawrence Livermore National Lab
    subtitle: Intern
    date: Summer 2018
    img: /assets/img/job-experience/LLNL-2018.jpg
    description: |
      * Implemented and optimized finite element operators for GPUs using CUDA
      * Achieved 10 to 100 times speedup over other CPU and GPU implementations
      * Contributed to the open-source project [libCEED](https://github.com/CEED/libCEED)
      * View my [final poster presentation](/assets/doc/LLNL-poster-2018.pdf)

  - title: NASA Glenn Research Center
    subtitle: Intern
    date: Summer 2017
    img: /assets/img/job-experience/NASA.jpg
    description: |
      * Created 1D hybrid direct kinetic simulation of a Hall thruster
      * Developed software in C++ from the ground up
      * Modeled time-dependent velocity distribution functions of various species in plasma
      * Gained experience solving hyperbolic partial differential equations with the finite volume method and using visualization tools

  - title: Insurance Institute for Highway Safety
    subtitle: Intern Software Developer
    date: Summer 2013–2016
    img: /assets/img/job-experience/IIHS.jpg
    description: |
      * Worked on C# applications for managing vehicle records stored in SQL databases
      * Redesigned and updated mobile website
      * Set up an OAUTH server
      * Worked with several frontend web frameworks
      * Gained firsthand experience in software development life cycle

  - title: Web Developer
    subtitle: Freelancer
    date: 2015–Present
    img: /assets/img/job-experience/web-dev.jpg
    description: |
      * Developing and maintaining the website for the [Computational Science Laboratory](http://csl.cs.vt.edu)
      * Created [this site](http://famg.mse.vt.edu/) for a professor in Virginia Tech Materials Science and Engineering department
      * Created [Word Counter Plus](https://chrome.google.com/webstore/detail/word-counter-plus/fpjegfbcdijjfkceenlfoehpcakfgldj), a Chrome extension for performing word counts.
---

{% include deck.html cols="m6" cards=page.cards %}
