import './App.css';
import { MenuScreen } from './components/MenuScreen';
import { CharacterSelect } from './components/CharacterSelect';
import { GameScreen } from './components/GameScreen';
import { VictoryScreen } from './components/VictoryScreen';
import { GameOverScreen } from './components/GameOverScreen';
import { useGameLogic } from './hooks/useGameLogic';

function App() {
  const gameLogic = useGameLogic();

  if (gameLogic.gameState === 'menu') {
    return <MenuScreen onStart={() => {
      gameLogic.startGame();
    }} />;
  }

  if (gameLogic.player && gameLogic.gameState === 'character-select') {
    return (
      <CharacterSelect
        player={gameLogic.player}
        onStart={() => gameLogic.startGame()}
      />
    );
  }

  if (gameLogic.player && (gameLogic.gameState === 'stage' || gameLogic.gameState === 'boss-fight')) {
    return (
      <GameScreen
        player={gameLogic.player}
        enemies={gameLogic.enemies}
        boss={gameLogic.boss}
        dropLog={gameLogic.dropLog}
        onEnemyDefeated={gameLogic.defeatenemy}
        onBossDefeated={gameLogic.defeatBoss}
        onGameOver={gameLogic.playerDefeated}
        onStartBoss={gameLogic.startBossFight}
      />
    );
  }

  if (gameLogic.player && gameLogic.gameState === 'victory') {
    return (
      <VictoryScreen
        player={gameLogic.player}
        onRestart={gameLogic.restart}
      />
    );
  }

  if (gameLogic.gameState === 'game-over') {
    return <GameOverScreen onRestart={gameLogic.restart} />;
  }

  return <MenuScreen onStart={gameLogic.startGame} />;
}

export default App;
