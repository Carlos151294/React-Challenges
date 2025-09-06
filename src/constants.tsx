import TodoList from "./components/TodoList";
import GithubStar from "./components/GithubStars";
import TodoListStrike from "./components/TodoListStrike";
import Pagination from "./components/Pagination";
import { Stopwatch } from "./components/Stopwatch";
import { Tictactoe } from "./components/Tictactoe";
import { Chessboard } from "./components/Chessboard";
import { Countedown } from "./components/Countedown";
import { Bingo } from "./components/Bingo";
import { ShuffleCards } from "./components/ShuffleCards";
import React from "react";

export interface Exercise {
  id: string;
  title: string;
  done?: boolean;
  component: React.JSX.Element;
}

export const Exercises: Exercise[] = [
  {
    id: "todo-list",
    title: "To-do List",
    component: <TodoList />,
    // done: true,
  },
  {
    id: "todo-list-strikethrough",
    title: "To-do List with Strikethrough",
    component: <TodoListStrike />,
  },
  {
    id: "github-stars",
    title: "Github Stars",
    component: <GithubStar />,
    // done: true,
  },
  {
    id: "pagination",
    title: "Pagination",
    component: <Pagination />,
  },
  {
    id: "stopwatch",
    title: "Stopwatch",
    component: <Stopwatch />,
    // done: true,
  },
  {
    id: "countdown",
    title: "Countdown",
    component: <Countedown />,
  },
  {
    id: "chessboard",
    title: "Chessboard",
    component: <Chessboard />,
  },
  {
    id: "tic-tac-toe",
    title: "Tic Tac Toe",
    component: <Tictactoe />,
    // done: true,
  },
  {
    id: "bingo",
    title: "Bingo",
    component: <Bingo />,
    // done: true,
  },
  {
    id: "shuffle-cards",
    title: "Shuffle Cards",
    component: <ShuffleCards />,
  },
];
