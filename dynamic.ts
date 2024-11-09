document.addEventListener("DOMContentLoaded", () => {
  const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
  const profilePicInput = document.getElementById(
    "profilePic"
  ) as HTMLInputElement;
  const profilePicPreview = document.getElementById(
    "profilePicPreview"
  ) as HTMLDivElement;
  const profilePicImage = document.getElementById(
    "profilePicImage"
  ) as HTMLImageElement;
  const resumePreview = document.getElementById(
    "resumePreview"
  ) as HTMLDivElement;

  // Profile Picture Preview
  profilePicInput?.addEventListener("change", (e: Event) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        if (event.target?.result) {
          profilePicImage.src = event.target.result as string;
          profilePicPreview.classList.remove("hidden");
        }
      };
      reader.readAsDataURL(file);
    }
  });

  // Handle Form Submission
  resumeForm?.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    // Collect input values
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (
      document.getElementById("education") as HTMLTextAreaElement
    ).value;
    const experience = (
      document.getElementById("experience") as HTMLTextAreaElement
    ).value;
    const skills = (document.getElementById("skills") as HTMLInputElement)
      .value;
    const linkedin = (document.getElementById("linkedin") as HTMLInputElement)
      .value;
    const github = (document.getElementById("github") as HTMLInputElement)
      .value;
    const facebook = (document.getElementById("facebook") as HTMLInputElement)
      .value;
    const twitter = (document.getElementById("twitter") as HTMLInputElement)
      .value;

    // Split skills, education, and experience into arrays
    const skillsArray = skills.split(",").map((skill) => skill.trim());
    const educationArray = education.split(",").map((edu) => edu.trim());
    const experienceArray = experience.split(",").map((exp) => exp.trim());

    // Generate Resume Preview
    resumePreview.innerHTML = `
      ${
        profilePicPreview.classList.contains("hidden")
          ? ""
          : `<div style="display: flex; justify-content: center; margin-bottom: 1rem;">
       <img src="${profilePicImage.src}" class="profile-pic" style="width: 150px; height: 150px;" /></div>`
      }
      <h1>${name}</h1>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <hr style="margin: 1rem 0; border: none; border-top: 1px solid #4caf50;">
      
      <div class="resume-section">
        <h2>Education</h2>
        <ul>${educationArray.map((edu) => `<li>${edu}</li>`).join("")}</ul>
      </div>
      <div class="resume-section">
        <h2>Work Experience</h2>
        <ul>${experienceArray.map((exp) => `<li>${exp}</li>`).join("")}</ul>
      </div>
      <div class="resume-section">
        <h2>Skills</h2>
        <ul>${skillsArray.map((skill) => `<li>${skill}</li>`).join("")}</ul>
      </div>
     
 <div class="resume-section">
  <h2>Social Media</h2>
  ${linkedin ? `<div><a href="${linkedin}" target="_blank">LinkedIn</a><hr class="link-divider"></div>` : ""}
  ${github ? `<div><a href="${github}" target="_blank">GitHub</a><hr class="link-divider"></div>` : ""}
  ${facebook ? `<div><a href="${facebook}" target="_blank">Facebook</a><hr class="link-divider"></div>` : ""}
  ${twitter ? `<div><a href="${twitter}" target="_blank">Twitter</a><hr class="link-divider"></div>` : ""}
</div>


    `;
    resumePreview.classList.remove("hidden");
  });
});
