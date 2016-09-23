module.exports = {

  getName(req, res){
    return res.status(200).json(data.name)
  },
  getLocation(req,res){
    return res.status(200).json(data.location)
  },
  getOccupations(req,res){
    return res.status(200).json(data.occupations)
  },
  getLatestOccupations(req, res){
    return res.status(200).json({"latestOccupation": data.occupations[data.occupations.length - 1]})
  },
  getHobbies(req,res){
    let results = [];
    for (let i = 0; i < data.hobbies.length; i++){
      results.push(data.hobbies[i])
    }
    return res.status(200).json({"hobbies" : results})
  },
  getOrderedOccupations(req, res){
    let results = [];
    if (req.query.order == "desc"){
      results = data.occupations.sort()
    }
    else if (req.query.order == "asc"){
      results = data.occupations.reverse()
    }
    return res.status(200).json(results)

  },
  getHobbyType(req,res){
    let results = [];
    for (let i = 0; i < data.hobbies.length; i++){
      if (data.hobbies[i].name == req.params.type){
        results.push(data.hobbies[i]);
      }
    }
    return res.status(200).json(results)
  },
  putName(req, res){
    data.name = req.body.name;
    return res.status(200).json(data);
  },
  putLocation(req, res){
    data.location = req.body.location;
    return res.status(200).json(data);
  },
  postHobby(req, res){
    data.hobbies.push(req.body);
    return res.status(200).json(data);
  },
  postOccupation(req, res){
    data.occupations.push(req.body.name);
    return res.status(200).json(data);"''"
  },
  getSkills(req,res){
    return res.status(200).json(data.skills)
  },
  getSkillsByExperience(req, res){
    let results = [];
    for (let i = 0; i < data.skills.length; i++){
      console.log(data.skills[i].experience)
      if (data.skills[i].experience.toLowerCase() == req.query.experience.toLowerCase()){
        results.push(data.skills[i])
      }
    }
    if(results.length === 0){return res.status(404).json({error: "No results found."})}
    return res.status(200).json(results)
  },
  postSkillz(req, res){
    data.skills.push(req.body);
    return res.status(200).json(data.skills)
  }


}

const data = {
    name: "Shea"
  , location: "Dallas, Tx"
  , occupations: ["Inspector", "Dev Student"]
  , hobbies: [{name: "brewing", type: "current"}, {name: "music", type: "current"}, {type: "mechanical", type: "past"}]
  , skills: [{
    "id": 1,
    "name": "Javascript",
    "experience": "Intermediate"
  }, {
    "id": 2,
    "name": "Node",
    "experience": "Noob"
  }]
};
