const freelancers = [
    { name: "Andrea", price: 40, occupation: "Teacher" },
    { name: "Jose", price: 50, occupation: "Mechanic" },
  ];
  
  const maxFreelancers = 10;
  
  const randomNames = [
    "Daisy",
    "Luis",
    "Irvin",
    "Andy",
    "Isabel",
    "Joseph",
    "Tania",
    "Ricardo",
    "Melissa",
    "Joshua",
  ];
  
  const randomPrices = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  
  const randomOccupations = [
    "Mechanic",
    "Teacher",
    "Engineer",
    "Doctor",
    "Electrican",
    "Artist",
    "Police Officer",
    "Banker",
    "Salesperson",
    "Web Developer",
  ];
  
  const calculateAveragePrice = () => {
    const total = freelancers.reduce(
      (sum, freelancer) => sum + freelancer.price,
      0
    );
    return freelancers.length === 0 ? 0 : total / freelancers.length;
  };
  

  const addFreelancerIntervalId = setInterval(addFreelancer, 3000);
  
  render(); 
  
  function render() {
    const freelancersId = document.querySelector("#freelancers");
    freelancersId.innerHTML =
      `<tr>
        <th>Name</th>
        <th>Occupation</th>
        <th>Starting Price</th>
       </tr>`;
  
    freelancers.forEach((freelancer) => {
      const tr = document.createElement("tr");
      const tdName = document.createElement("td");
      tdName.textContent = freelancer.name;
  
      const tdOccupation = document.createElement("td");
      tdOccupation.textContent = freelancer.occupation;
  
      const tdPrice = document.createElement("td");
      tdPrice.classList.add("price");
      tdPrice.textContent = `$${freelancer.price}`;
  
      tr.appendChild(tdName);
      tr.appendChild(tdOccupation);
      tr.appendChild(tdPrice);
  
      freelancersId.appendChild(tr);
  
      const average = document.querySelector("#average");
      average.innerHTML = `The average starting price is: $${calculateAveragePrice().toFixed(
        2
      )}`;
    });
  }
  
  function addFreelancer() {
    const name = randomNames[Math.floor(Math.random() * randomNames.length)];
    const price = randomPrices[Math.floor(Math.random() * randomPrices.length)];
    const occupation =
      randomOccupations[Math.floor(Math.random() * randomOccupations.length)];
  
    freelancers.push({ name, price, occupation });
    render();
  
    if (freelancers.length >= maxFreelancers) {
      clearInterval(addFreelancerIntervalId);
    }
  }