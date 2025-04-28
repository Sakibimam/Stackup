import { StackGame } from "./models/StackGame";
import { getElements } from "./helpers/getElements";

let stackGameInstance: StackGame | null = null;

const onInit = () => {
  const { canvas, playButton, connectWalletBtn } = getElements();

  if (!canvas) {
    console.error("Canvas element is not found.");
    return;
  }

  // Initialize the StackGame
  stackGameInstance = new StackGame(canvas);

  // Add event listener for play button
  playButton?.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent the event from affecting the game
    if (stackGameInstance) {
      stackGameInstance.onGameStart();
    }
  });

  // Add event listener for connect wallet button
  connectWalletBtn?.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent the event from affecting the game
    console.log("Connect wallet clicked!"); 
    // You can later call your connectWallet() function here
  });
};

// Wait for DOM
document.addEventListener("DOMContentLoaded", onInit);
