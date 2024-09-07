document.addEventListener('DOMContentLoaded', function () {
    var toggleSkillsButton = document.getElementById('toggle-skills');
    var skillsSection = document.getElementById('skills');
    var skillsVisible = true;
    toggleSkillsButton.addEventListener('click', function () {
        if (skillsVisible) {
            skillsSection.querySelector('ul').style.display = 'none';
            toggleSkillsButton.textContent = 'Show Skills';
        }
        else {
            skillsSection.querySelector('ul').style.display = 'block';
            toggleSkillsButton.textContent = 'Hide Skills';
        }
        skillsVisible = !skillsVisible;
    });
});
