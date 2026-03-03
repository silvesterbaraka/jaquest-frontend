<script>
document.addEventListener("DOMContentLoaded", () => {

  const leftPage  = document.querySelector(".page.left");
  const rightPage = document.querySelector(".page.right");

  let index = 0;

  /* ================= PAGE DATA ================= */
  const pages = [
    {
      title: "Engineering & Technology",
      content: `
        <h4>Computer Science Engineering</h4>
        <p class="meta">4 Years · 10+2 with Mathematics</p>
        <ul>
          <li>DSA, OS, DBMS</li>
          <li>AI & Machine Learning</li>
          <li>Cybersecurity</li>
        </ul>
      `
    },
    {
      title: "Mechanical Engineering",
      content: `
        <p class="meta">4 Years · 10+2 (PCM)</p>
        <ul>
          <li>Thermodynamics</li>
          <li>Manufacturing</li>
          <li>Robotics</li>
        </ul>
      `
    },
    {
      title: "Health & Medical Sciences",
      content: `
        <h4>Nursing (BSc)</h4>
        <p class="meta">4 Years · PCB</p>
        <ul>
          <li>Clinical Nursing</li>
          <li>Community Health</li>
        </ul>
      `
    },
    {
      title: "Business & Management",
      content: `
        <h4>MBA</h4>
        <p class="meta">2 Years · Bachelor Degree</p>
        <ul>
          <li>Marketing</li>
          <li>Finance</li>
          <li>HR</li>
        </ul>
      `
    }
  ];

  /* ================= RENDER ================= */
  function render() {
    leftPage.innerHTML = `
      <div class="page-content">
        <h3>${pages[index]?.title || ""}</h3>
        ${pages[index]?.content || ""}
      </div>
      <div class="page-footer">${index + 1}</div>
    `;

    rightPage.innerHTML = `
      <div class="page-content">
        <h3>${pages[index + 1]?.title || ""}</h3>
        ${pages[index + 1]?.content || ""}
      </div>
      <div class="page-footer">${index + 2}</div>
    `;
  }

  /* ================= CONTROLS ================= */
  window.next = () => {
    if (index + 2 < pages.length) {
      rightPage.classList.add("flip-right");
      setTimeout(() => {
        index += 2;
        rightPage.classList.remove("flip-right");
        render();
      }, 600);
    }
  };

  window.prev = () => {
    if (index - 2 >= 0) {
      leftPage.classList.add("flip-left");
      setTimeout(() => {
        index -= 2;
        leftPage.classList.remove("flip-left");
        render();
      }, 600);
    }
  };

  render();
});
</script>