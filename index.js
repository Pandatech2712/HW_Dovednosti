// Funkce pro aktualizaci dovedností
function updateSkill(skillId, value) {
    const skillElement = document.getElementById(skillId);
    const progressBar = skillElement.querySelector('.skill__progress');
    const valueElement = skillElement.querySelector('.skill__value');
  
    progressBar.style.width = `${value}%`;
    valueElement.textContent = `${value} / 100`;
  }
  
  // Získání uživatelských hodnot
  const htmlSkill = prompt('Zadejte úroveň HTML (0-100):');
  const cssSkill = prompt('Zadejte úroveň CSS (0-100):');
  const jsSkill = prompt('Zadejte úroveň JavaScript (0-100):');
  
  // Aktualizace dovedností
  updateSkill('skill1', htmlSkill);
  updateSkill('skill2', cssSkill);
  updateSkill('skill3', jsSkill);