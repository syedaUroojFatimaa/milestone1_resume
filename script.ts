document.addEventListener('DOMContentLoaded', () => {
    const toggleSkillsButton = document.getElementById('toggle-skills') as HTMLButtonElement;
    const skillsSection = document.getElementById('skills') as HTMLDivElement;

    let skillsVisible = true;

    toggleSkillsButton.addEventListener('click', () => {
        if (skillsVisible) {
            skillsSection.querySelector('ul')!.style.display = 'none';
            toggleSkillsButton.textContent = 'Show Skills';
        } else {
            skillsSection.querySelector('ul')!.style.display = 'block';
            toggleSkillsButton.textContent = 'Hide Skills';
        }
        skillsVisible = !skillsVisible;
    });
});
