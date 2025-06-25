import React, { useEffect, useState } from "react";

function SnakeGame() {
  const [snake, setSnake] = useState([
    { x: 10, y: 80, position: 1 },
    { x: 50, y: 80, position: 2 },
    { x: 90, y: 80, position: 3 },
    { x: 130, y: 80, position: 4 },
    { x: 170, y: 80, position: 5 },
  ]);

  const moveSnakePartInYAndXBy1Unit = (filterSnakePart: any) => {
    return filterSnakePart.map((snakePart: any, index: number) => {
      if (index !== filterSnakePart.length - 1) {
        console.log("prevSnake.length ", snakePart.length);
        return { ...snakePart, x: snakePart.x + 40 };
      }
      if (index === filterSnakePart.length - 1) {
        return { ...snakePart, y: snakePart.y + 40 };
      }
    });
  };
  const moveSnakePartInYBy1Unit = (filterSnakePart: any) => {
    return filterSnakePart.map((snakePart: any, index: number) => {
      return { ...snakePart, y: snakePart.y + 40 };
    });
  };
  const runTheSnake = (event: any) => {
    event.preventDefault();
    console.log("event.key", event.key);
    if (event.key === "ArrowUp") {
    }
    if (event.key === "ArrowDown") {
      setSnake((prevSnake: any) => {
        const headPart = prevSnake[prevSnake.length - 1];
        console.log("head", headPart);
        prevSnake = prevSnake.slice(0, -1);
        console.log("Update PrevStatewithoutHead", prevSnake);

        const filterSnakePart = prevSnake.filter((snakePosition: any, index: number) => {
          return snakePosition.x === headPart.x;
        });
        console.log("filterSnakePart", filterSnakePart);

        if (filterSnakePart.length === 0) {
          const updatedSnake = moveSnakePartInYAndXBy1Unit([...prevSnake, headPart]);
          console.log("Updated Snake when filterSnakePart is empty", updatedSnake);
          return updatedSnake;
        } else {
          const moveSnakePartinXandY = prevSnake.slice(0, -filterSnakePart.length);
          console.log("moveSnakePartinXandY", moveSnakePartinXandY);
          const updatedSnake = moveSnakePartInYAndXBy1Unit(moveSnakePartinXandY);

          console.log("move snake in y part", [...filterSnakePart, headPart]);
          const updatedSnakePartinY = moveSnakePartInYBy1Unit([...filterSnakePart, headPart]);

          console.log("updatedSnakePartinY", updatedSnakePartinY);
          return [...updatedSnake, ...updatedSnakePartinY];
        }
        const updatedSnake = moveSnakePartInYAndXBy1Unit(filterSnakePart);
        console.log("updatedSnake", updatedSnake);
        return updatedSnake;
      });
    }
    if (event.key === "ArrowLeft") {
      setSnake((prevSnake: any) => {
        return prevSnake.map((snakePosition: any) => {
          return { ...snakePosition, x: snakePosition.x - 10 };
        });
      });
    }
    if (event.key === "ArrowRight") {
      console.log("snakemove right");
      setSnake((prevSnake: any) => {
        return prevSnake.map((snakePosition: any) => {
          return { ...snakePosition, x: snakePosition.x + 10 };
        });
      });
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", runTheSnake);
  }, []);
  return (
    <div className="SnakeDashboard">
      <h1>Welcome to the snake game</h1>
      {snake.length > 0 &&
        snake.map((snakePart: any, index: number) => {
          if (index === snake.length - 1) {
            return (
              <span key={`${index}ssabc`} style={{ position: "absolute", top: `${snakePart?.y}px`, left: `${snakePart?.x}px`, backgroundColor: "green", width: "40px", height: "40px", border: "2px,solid,black", borderRadius: "20px 20px" }}></span>
            );
          }
          return <span key={`${index}ssabc`} style={{ position: "absolute", top: `${snakePart?.y}px`, left: `${snakePart?.x}px`, backgroundColor: "green", width: "40px", height: "40px", border: "2px,solid,black" }}></span>;
        })}
    </div>
  );
}

export default SnakeGame;
