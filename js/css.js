const steps = document.querySelectorAll(".step");
const processSteps = document.querySelector(".process-steps");

const observer = new IntersectionObserver(
(entries, obs) => {
    entries.forEach((entry) => {
    if (entry.isIntersecting) {
        processSteps.classList.add("show-line");

        steps.forEach((step, index) => {
        setTimeout(() => {
            step.classList.add("show");
          }, index * 200);
        });

        obs.disconnect();
      }
    });
  },
  { threshold: 0.2 },
);

observer.observe(processSteps);
