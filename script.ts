document.addEventListener('DOMContentLoaded', () => {
    const toggleSkillsButton = document.getElementById('toggle-skills') as HTMLButtonElement;
    const skillsList = document.querySelector('#skills ul') as HTMLUListElement;

    let skillsVisible = true;

    toggleSkillsButton.addEventListener('click', () => {
        if (skillsVisible) {
            skillsList.style.display = 'none';
            toggleSkillsButton.textContent = 'Show Skills';
        } else {
            skillsList.style.display = 'block';
            toggleSkillsButton.textContent = 'Hide Skills';
        }
        skillsVisible = !skillsVisible;
    });
});
