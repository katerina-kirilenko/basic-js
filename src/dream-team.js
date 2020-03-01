module.exports = function createDreamTeam(members) {
    let nameTeam = "";
    let team = [];

    if (Array.isArray(members)) {
      for (let item of members) {
        if (typeof item == "string") {
          let str = item.trim().toUpperCase();
          team.push(str[0]);
        }
      }
      nameTeam = team.sort().join("");
    }

    return nameTeam;
};