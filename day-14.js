// https://www.codewars.com/kata/56c2a067585d9ac8280003c9/solutions/javascript

function match(candidate, job) {
  for (const jobSkill of job.skills) {
    if (!matchJobSkill(candidate, jobSkill)) {
      return false;
    }
  }
  return true;
}

function matchJobSkill(candidate, jobSkill) {
  const matchNamesArray = candidate.skills.filter((candidateSkill) => {
    return jobSkill.name === candidateSkill.name;
  });
  for (const skill of matchNamesArray) {
    if (skill.preference === "avoid") {
      return false;
    }
    if (matchExperience(skill, jobSkill.idealYears)) {
      return true;
    }
  }
  const matchSubstitutionsArray = candidate.skills.filter((candidateSkill) => {
    for (const skill of jobSkill["substitutions"]) {
      return skill.name === candidateSkill.name;
    }
  });
  for (const element of matchSubstitutionsArray) {
    if (matchExperience(element, jobSkill.idealYears)) {
      return true;
    }
  }
  return false;
}

function matchExperience(candidate, idealYears) {
  let experience = candidate.experience;
  if (candidate.preference === "desired") {
    return (experience *= 1.5);
  }
  return experience >= idealYears;
}
