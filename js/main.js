/* ============================================================
   RAHUL BADWAIK — PORTFOLIO  |  main.js
   ============================================================ */

/* ---- Data Store (edit here to add/update content) ---- */
const DATA = {
  name: "Rahul Badwaik",
  role: "Software Development Engineer | ML Researcher",
  tagline:
    "Building robust software systems and exploring the frontiers of machine learning.",
  email: "rbadwaik219@umbc.edu",
  phone: "667-431-6441",
  location: "Baltimore, MD",
  linkedin: "https://linkedin.com/in/rahul-badwaik1999",
  github: "https://github.com/rahulbadwaik219",
  resumeFile: "assets/Resume_Rahul_SDE-2.pdf",

  stats: [
    { num: "4+", label: "Years of Experience" },
    { num: "7", label: "Projects Completed" },
    { num: "10+", label: "Technologies" },
    { num: "2", label: "Degrees" },
  ],

  skills: [
    {
      category: "Languages",
      items: [
        {
          name: "C++",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        },
        {
          name: "C#",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "SQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "MATLAB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
      ],
    },
    {
      category: "Web & Frameworks",
      items: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Redux",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        },
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "HTML/CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: ".NET",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
        },
        {
          name: "Flask",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
        },
      ],
    },
    {
      category: "Databases & Cloud",
      items: [
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "SQL Server",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
        },
        {
          name: "Oracle",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
        },
        {
          name: "Azure",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
        },
        {
          name: "Linux",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        },
      ],
    },
    {
      category: "AI / ML & Tools",
      items: [
        {
          name: "PyTorch",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
        },
        {
          name: "TensorFlow",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
        },
        {
          name: "OpenCV",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
        },
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "Postman",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
        },
        {
          name: "Jira",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
        },
      ],
    },
  ],

  experience: [
    {
      title: "Student IT Assistant",
      company: "Retriever Card Centre, University of Maryland Baltimore County",
      location: "Baltimore, MD",
      period: "Nov 2025 – Ongoing",
      bullets: [
        "Optimized database processes and job scheduling on Oracle and Windows Server, improving system reliability, load balancing, and performance for high-volume transactional workflows while reducing workforce effort by 70%.",
        "Analyzed financial, identity, and usage data to deliver operational reporting with trend analysis and automated processes using PL/SQL and shell scripting, improving system efficiency with data accuracy for 15k+ students and employers.",
      ],
      tags: [
        "Oracle",
        "PL/SQL",
        "Windows Server",
        "Shell Scripting",
        "Data Analysis",
      ],
    },
    {
      title: "Specialist Software Engineer",
      company: "Societe Generale, Bengaluru, India",
      location: "Bengaluru, India",
      period: "Jul 2021 – Jul 2025",
      bullets: [
        "Developed and maintained an internal investment banking application (X-One) for booking and trading Equity instruments, improving trade processing efficiency by 30% and reducing booking errors by 60%.",
        "Designed and executed SQL queries and integrated Microsoft WCF RESTful APIs along with C# and .NET frameworks, following a test-driven development approach with 95% coverage.",
        "Automated the Broker Confirmation process with OCR to streamline alignment between the bank and external brokers, reducing manual work and cutting expenses over $2 million.",
        "Managed production support by resolving functional issues and optimizing trading workflows, increasing system uptime to 99%.",
        "Developed a centralized web application (like Stack Overflow) for X-One developers for efficient knowledge sharing using JavaScript, NodeJS & Express, React & Redux.",
        "Onboarded and enhanced equity instruments per PO requirements, cutting onboarding time by 30%, and delivered Swagger-based API documentation.",
      ],
      tags: [
        "C#",
        ".NET",
        "Microsoft WCF",
        "React",
        "Redux",
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "MySQL",
        "MongoDB",
      ],
    },
    {
      title: "Data Science Research Intern",
      company: "Philips India Pvt Ltd, Bengaluru, India",
      location: "Bengaluru, India",
      period: "Apr 2020 – Jun 2020",
      bullets: [
        "Processed ultrasound images for object localization in medical imaging using Attention Gated Networks (AG-CNN) for generating attention masks and fetal biometric measurements.",
        "Implemented AG-CNN for thorax disease diagnosis and developed HRNetV2-A for semantic segmentation on the 3VV Fetal Heart dataset, achieving a 6% improvement in diagnostic accuracy.",
        "Conducted a literature review of 15+ papers on medical image processing using various state-of-the-art models.",
      ],
      tags: [
        "Python",
        "PyTorch",
        "OpenCV",
        "CNN",
        "Medical Imaging",
        "Deep Learning",
      ],
    },
    {
      title:
        "Secretary — Artificial Intelligence and Electronics Section (ArIES)",
      company: "Indian Institute of Technology (IIT), Roorkee, India",
      location: "Roorkee, India",
      period: "May 2018 – May 2021",
      bullets: [
        "Managed 40+ students, overseeing agendas, project guidelines, budgeting, supervision, and performance communication.",
        "Worked on computer vision projects including human and object detection using deep learning models like YOLO, Inception, and ResNet.",
        "Mentored students in developing projects integrating Electronics and Artificial Intelligence.",
        "Worked in the field of Drones including RC and Automated drones. Drones have been fabricated using Pixhawk as a flight controller along with Raspberry Pi as a processor",
      ],
      tags: [
        "OpenCV",
        "Deep Learning",
        "Pixhawk",
        "Raspberry Pi",
        "Automation Drone",
        "Leadership",
      ],
    },
  ],

  projects: [
    {
      title: "Self-Supervised Learning Framework for Medical Imaging",
      period: "Oct 2025 – Dec 2025",
      icon: "🧠",
      description:
        "Developed a SimCLR-based self-supervised framework (ResNet-50) with medical-specific augmentations to learn chest X-ray representations from unlabeled data, showing better localization of pathological regions and clearer class separation. Improved label efficiency and interpretability, outperforming ImageNet pretraining by up to 5–10% AUC at 1–10% labels.",
      tags: [
        "Python",
        "PyTorch",
        "SimCLR",
        "ResNet-50",
        "Self-Supervised Learning",
        "Medical Imaging",
      ],
      github: "",
    },
    {
      title: "Brain Tumor Detection and Segmentation using CNNs",
      period: "Aug 2020 – May 2021",
      icon: "🔬",
      description:
        "Designed and trained a CNN model to accurately detect and classify brain tumors (Glioma, Meningioma, Pituitary), reducing manual effort and minimizing diagnostic errors in MRI classification. Implemented a UNet model with semantic segmentation to localize tumor regions and predict survival days. Built a user-friendly interface with Flask to facilitate early brain tumor diagnosis.",
      tags: [
        "Python",
        "TensorFlow",
        "CNN",
        "UNet",
        "Flask",
        "Medical Imaging",
        "Semantic Segmentation",
      ],
      github: "",
    },
    {
      title: "Eye Controlled Wheelchair for Disabled",
      period: "Jan 2020 – Mar 2020",
      icon: "♿",
      description:
        "Designed a wheelchair prototype controlled by pupil motion to enhance mobility for users with limited motor abilities. Used OpenCV and dlib for eye detection and tracking, and integrated wireless communication between the eye tracker and the wheelchair.",
      tags: [
        "Python",
        "OpenCV",
        "dlib",
        "Computer Vision",
        "Embedded Systems",
        "Wireless Communication",
      ],
      github: "",
    },
    {
      title: "Auto Evaluation of Subjective Answer Sheets",
      period: "Jan 2020 – Mar 2020",
      icon: "♿",
      description:
        "Designed an exam model which scanned the answer sheet, detected the handwriting and processed the answers. Developed the OCR Model which recognized the handwritten text in the images and converted them into machine-encoded text which was used to evaluate and grade the subjective answers. Implemented the grading algorithm and created a text to speech application for conducting Viva.",
      tags: ["Python", "OCR", "Computer Vision"],
      github: "",
    },
    {
      title: "Flood Rescue Drone",
      period: "Sept 2018 – Mar 2019",
      icon: "♿",
      description:
        "Developed a Quadcopter Drone to survey the flood hit area using aerial surveillance detecting and counting the number of victims trapped in remote areas. The victims were detected with the help of deep learning Model(YOLO) and their GPS location was known. The drone was made Autonomous using Pixhawk Flight Controller and Raspberry Pi along with sensors.",
      tags: [
        "Python",
        "Deep Learning",
        "Computer Vision",
        "Automotous Drone",
        "Raspberry Pi",
        "PixHawk",
      ],
      github: "",
    },
    {
      title: "D.R.D.O. SASEs UAV Fleet Challenge",
      period: "Oct 2019 – Dec 2019",
      icon: "♿",
      description:
        "Developed a UAV fleet which were capable of detecting a target amongst a clutter of diﬀerent objects spread randomly over a grassy land autonomously. Trained a CNN based model on custom dataset to detect the green target boxes. The autonomous fleet communicated the location of the target to the ther two drones using swarm technology.",
      tags: [
        "Python",
        "Deep Learning",
        "Computer Vision",
        "Automotous Drone",
        "Raspberry Pi",
        "PixHawk",
      ],
      github: "",
    },
    {
      title: "Line Following Drone ",
      period: "Jan 2019 – Feb 2019",
      icon: "♿",
      description:
        "Designed a UAV which can fly indoors with an onboard or oﬀboard computation and tracking system. The drone autonomously followed a yellow line path with the help of Image Processing on Raspberry Pi as an onboard processor.",
      tags: [
        "Python",
        "Computer Vision",
        "OpenCV",
        "Automotous Drone",
        "Raspberry Pi",
        "PixHawk",
      ],
      github: "",
    },
  ],

  education: [
    {
      degree: "Master of Science, Computer Science",
      school: "University of Maryland Baltimore County",
      location: "Baltimore, MD",
      period: "Expected May 2027",
      icon: "🎓",
      courses: [
        "Intro to Machine Learning",
        "Computer Vision",
        "Design & Analysis of Algorithms",
        "Software Process Management",
      ],
    },
    {
      degree: "Bachelor of Technology, Electrical Engineering",
      school: "Indian Institute of Technology (IIT), Roorkee",
      location: "Roorkee, India",
      period: "Graduated Jun 2021",
      icon: "🏛️",
      courses: [
        "Data Structures",
        "Programming in C++",
        "Data Analytics with Python",
        "Network Theory",
        "Mathematical Methods",
        "Microprocessors & Peripheral Devices",
      ],
    },
  ],
};

/* ================================================================
   RENDER FUNCTIONS
   ================================================================ */

function renderStats() {
  const container = document.getElementById("stats-container");
  if (!container) return;
  container.innerHTML = DATA.stats
    .map(
      (s) => `
    <div class="stat-item fade-up">
      <div class="num">${s.num}</div>
      <div class="label">${s.label}</div>
    </div>
  `,
    )
    .join("");
}

function renderSkills() {
  const container = document.getElementById("skills-container");
  if (!container) return;
  container.innerHTML = DATA.skills
    .map(
      (cat) => `
    <div class="skill-category fade-up">
      <h3>${cat.category}</h3>
      <div class="skills-grid">
        ${cat.items
          .map(
            (skill) => `
          <div class="skill-card">
            <img src="${skill.icon}" alt="${skill.name}" loading="lazy"
                 onerror="this.style.display='none';this.nextElementSibling.style.fontSize='2rem'">
            <div class="skill-name">${skill.name}</div>
          </div>
        `,
          )
          .join("")}
      </div>
    </div>
  `,
    )
    .join("");
}

function renderExperience() {
  const container = document.getElementById("experience-container");
  if (!container) return;
  container.innerHTML = DATA.experience
    .map(
      (exp) => `
    <div class="timeline-item fade-up">
      <div class="timeline-dot"></div>
      <div class="exp-card">
        <div class="exp-header">
          <h3 class="exp-title">${exp.title}</h3>
          <span class="exp-period">${exp.period}</span>
        </div>
        <div class="exp-company">📍 ${exp.company}</div>
        <ul class="exp-bullets">
          ${exp.bullets.map((b) => `<li>${b}</li>`).join("")}
        </ul>
        <div class="exp-tags">
          ${exp.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
        </div>
      </div>
    </div>
  `,
    )
    .join("");
}

function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;
  container.innerHTML = DATA.projects
    .map(
      (p, i) => `
    <div class="project-card fade-up" data-index="${i}">
      <div class="project-header">
        <div class="project-icon">${p.icon}</div>
        <div class="project-links">
          ${
            p.github
              ? `
            <a href="${p.github}" target="_blank" class="project-link-btn" title="GitHub Repo">
              <i class="fab fa-github"></i>
            </a>`
              : ""
          }
        </div>
      </div>
      <div>
        <div class="project-title">${p.title}</div>
        <div class="project-period">${p.period}</div>
      </div>
      <p class="project-desc">${p.description}</p>
      <div class="project-tags">
        ${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
      </div>
    </div>
  `,
    )
    .join("");
}

function renderEducation() {
  const container = document.getElementById("education-container");
  if (!container) return;
  container.innerHTML = DATA.education
    .map(
      (edu) => `
    <div class="edu-card fade-up">
      <div class="edu-icon">${edu.icon}</div>
      <h3 class="edu-degree">${edu.degree}</h3>
      <div class="edu-school">${edu.school}</div>
      <div class="edu-period">📍 ${edu.location} &nbsp;|&nbsp; ${edu.period}</div>
      <div class="edu-courses">
        <h4>Key Coursework</h4>
        <div class="course-tags">
          ${edu.courses.map((c) => `<span class="course-tag">${c}</span>`).join("")}
        </div>
      </div>
    </div>
  `,
    )
    .join("");
}

/* ================================================================
   MODAL — Add Project
   ================================================================ */
function openModal() {
  document.getElementById("addProjectModal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("addProjectModal").classList.remove("open");
  document.body.style.overflow = "";
}

function handleAddProject(e) {
  e.preventDefault();
  const form = e.target;
  const newProject = {
    title: form.title.value.trim(),
    period: form.period.value.trim(),
    icon: form.icon.value.trim() || "💡",
    description: form.description.value.trim(),
    tags: form.tags.value
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean),
    github: form.github.value.trim(),
  };
  DATA.projects.unshift(newProject);
  renderProjects();
  observeFadeUps();
  closeModal();
  form.reset();

  // Scroll to projects
  document
    .getElementById("projects")
    .scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ================================================================
   NAVIGATION
   ================================================================ */
function initNav() {
  const navbar = document.getElementById("navbar");
  const links = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section[id]");
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  // Hamburger toggle
  hamburger?.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-open");
  });

  // Close mobile menu on link click
  links.forEach((link) => {
    link.addEventListener("click", () =>
      navLinks.classList.remove("mobile-open"),
    );
  });

  // Active link on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((l) => l.classList.remove("active"));
          const active = document.querySelector(
            `.nav-links a[href="#${entry.target.id}"]`,
          );
          active?.classList.add("active");
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" },
  );

  sections.forEach((s) => observer.observe(s));
}

/* ================================================================
   SCROLL TO TOP
   ================================================================ */
function initScrollTop() {
  const btn = document.getElementById("scrollTop");
  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 400);
  });
  btn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );
}

/* ================================================================
   FADE-UP ANIMATIONS
   ================================================================ */
function observeFadeUps() {
  const els = document.querySelectorAll(".fade-up:not(.visible)");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("visible"), i * 80);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );
  els.forEach((el) => io.observe(el));
}

/* ================================================================
   TYPED EFFECT (hero role)
   ================================================================ */
function initTyped() {
  const el = document.getElementById("typed-role");
  if (!el) return;
  const roles = [
    "Software Development Engineer",
    "ML Researcher",
    "Full-Stack Developer",
    "Computer Vision Engineer",
  ];
  let ri = 0,
    ci = 0,
    deleting = false;

  function type() {
    const current = roles[ri];
    el.textContent = deleting ? current.slice(0, ci--) : current.slice(0, ci++);

    if (!deleting && ci > current.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
    if (deleting && ci < 0) {
      deleting = false;
      ri = (ri + 1) % roles.length;
      ci = 0;
      setTimeout(type, 400);
      return;
    }
    setTimeout(type, deleting ? 40 : 70);
  }
  type();
}

/* ================================================================
   SMOOTH SCROLL for anchor links
   ================================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top =
          target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });
}

/* ================================================================
   INIT
   ================================================================ */
document.addEventListener("DOMContentLoaded", () => {
  renderStats();
  renderSkills();
  renderExperience();
  renderProjects();
  renderEducation();

  initNav();
  initScrollTop();
  initTyped();
  initSmoothScroll();
  observeFadeUps();

  // Modal events
  document.getElementById("openModalBtn")?.addEventListener("click", openModal);
  document
    .getElementById("modalCloseBtn")
    ?.addEventListener("click", closeModal);
  document.getElementById("addProjectModal")?.addEventListener("click", (e) => {
    if (e.target === document.getElementById("addProjectModal")) closeModal();
  });
  document
    .getElementById("addProjectForm")
    ?.addEventListener("submit", handleAddProject);
});
