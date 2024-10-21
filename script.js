document.addEventListener('DOMContentLoaded', function () {
    var toggleSkillsButton = document.getElementById('toggle-skills');
    var skillsList = document.querySelector('#skills ul');
    var skillsVisible = true;
    toggleSkillsButton.addEventListener('click', function () {
        if (skillsVisible) {
            skillsList.style.display = 'none';
            toggleSkillsButton.textContent = 'Show Skills';
        }
        else {
            skillsList.style.display = 'block';
            toggleSkillsButton.textContent = 'Hide Skills';
        }
        skillsVisible = !skillsVisible;
    });
});
