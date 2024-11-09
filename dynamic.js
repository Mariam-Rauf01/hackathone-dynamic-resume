document.addEventListener("DOMContentLoaded", function () {
    var resumeForm = document.getElementById("resumeForm");
    var profilePicInput = document.getElementById("profilePic");
    var profilePicPreview = document.getElementById("profilePicPreview");
    var profilePicImage = document.getElementById("profilePicImage");
    var resumePreview = document.getElementById("resumePreview");
    // Profile Picture Preview
    profilePicInput === null || profilePicInput === void 0 ? void 0 : profilePicInput.addEventListener("change", function (e) {
        var _a;
        var file = (_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (event) {
                var _a;
                if ((_a = event.target) === null || _a === void 0 ? void 0 : _a.result) {
                    profilePicImage.src = event.target.result;
                    profilePicPreview.classList.remove("hidden");
                }
            };
            reader.readAsDataURL(file);
        }
    });
    // Handle Form Submission
    resumeForm === null || resumeForm === void 0 ? void 0 : resumeForm.addEventListener("submit", function (e) {
        e.preventDefault();
        // Collect input values
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var education = document.getElementById("education").value;
        var experience = document.getElementById("experience").value;
        var skills = document.getElementById("skills")
            .value;
        var linkedin = document.getElementById("linkedin")
            .value;
        var github = document.getElementById("github")
            .value;
        var facebook = document.getElementById("facebook")
            .value;
        var twitter = document.getElementById("twitter")
            .value;
        // Split skills, education, and experience into arrays
        var skillsArray = skills.split(",").map(function (skill) { return skill.trim(); });
        var educationArray = education.split(",").map(function (edu) { return edu.trim(); });
        var experienceArray = experience.split(",").map(function (exp) { return exp.trim(); });
        // Generate Resume Preview
        resumePreview.innerHTML = "\n      ".concat(profilePicPreview.classList.contains("hidden")
            ? ""
            : "<div style=\"display: flex; justify-content: center; margin-bottom: 1rem;\">\n       <img src=\"".concat(profilePicImage.src, "\" class=\"profile-pic\" style=\"width: 150px; height: 150px;\" /></div>"), "\n      <h1>").concat(name, "</h1>\n      <p>Email: ").concat(email, "</p>\n      <p>Phone: ").concat(phone, "</p>\n      <hr style=\"margin: 1rem 0; border: none; border-top: 1px solid #4caf50;\">\n      \n      <div class=\"resume-section\">\n        <h2>Education</h2>\n        <ul>").concat(educationArray.map(function (edu) { return "<li>".concat(edu, "</li>"); }).join(""), "</ul>\n      </div>\n      <div class=\"resume-section\">\n        <h2>Work Experience</h2>\n        <ul>").concat(experienceArray.map(function (exp) { return "<li>".concat(exp, "</li>"); }).join(""), "</ul>\n      </div>\n      <div class=\"resume-section\">\n        <h2>Skills</h2>\n        <ul>").concat(skillsArray.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(""), "</ul>\n      </div>\n     \n <div class=\"resume-section\">\n  <h2>Social Media</h2>\n  ").concat(linkedin ? "<div><a href=\"".concat(linkedin, "\" target=\"_blank\">LinkedIn</a><hr class=\"link-divider\"></div>") : "", "\n  ").concat(github ? "<div><a href=\"".concat(github, "\" target=\"_blank\">GitHub</a><hr class=\"link-divider\"></div>") : "", "\n  ").concat(facebook ? "<div><a href=\"".concat(facebook, "\" target=\"_blank\">Facebook</a><hr class=\"link-divider\"></div>") : "", "\n  ").concat(twitter ? "<div><a href=\"".concat(twitter, "\" target=\"_blank\">Twitter</a><hr class=\"link-divider\"></div>") : "", "\n</div>\n\n\n    ");
        resumePreview.classList.remove("hidden");
    });
});
