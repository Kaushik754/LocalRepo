// Array of Shayari lines
const shayariLines = [
    "Dil se roye magar honto se muskura beithe, yunhi hum kisi se wafa nibha beithe.",
    "Teri zulfon ki lehrati angdaiyan, nahi bhoolunga main, jab tak hai jaan.",
    "Har nazar ko ek naya savera milta hai, jab apki baat chhedta hai to ek guftagu shuru hoti hai.",
    "Koi khamosh hai itna, bahane bhool aaya hoon.",
    "Itna mat socho, deewana hoon main yaaron, yahan pe bhi dil jeetne ki chaahat hai mujhko."
  ];
  
  // Function to generate random Shayari
  function generateRandomShayari() {
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * shayariLines.length);
    // Return the Shayari at the random index
    return shayariLines[randomIndex];
  }
  
  // Example usage
  const randomShayari = generateRandomShayari();
  console.log(randomShayari);
  