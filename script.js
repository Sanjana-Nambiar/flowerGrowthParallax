document.addEventListener("DOMContentLoaded", function () {
    const stages = [
      { img: "images/soil.png", text: "Step 1: The soil is prepared." },
      { img: "images/sprout.png", text: "Step 2: A sprout emerges from the soil." },
      { img: "images/leaves.png", text: "Step 3: Leaves start to unfold." },
      { img: "images/flower.png", text: "Step 4: The flower blooms beautifully." }
    ];
    
    let currentStage = 0;
    const flowerImg = document.getElementById("flowerImg");
    const flowerText = document.getElementById("flowerText");
    const nextStageButton = document.getElementById("nextStage");
    
    nextStageButton.addEventListener("click", function () {
      currentStage++;
      if (currentStage >= stages.length) {
        currentStage = stages.length - 1;
        nextStageButton.disabled = true;
        nextStageButton.textContent = "Fully Grown!";
      }
      flowerImg.style.opacity = 0;
      setTimeout(() => {
        flowerImg.src = stages[currentStage].img;
        flowerText.textContent = stages[currentStage].text;
        flowerImg.style.opacity = 1;
      }, 300);
    });
  });
  