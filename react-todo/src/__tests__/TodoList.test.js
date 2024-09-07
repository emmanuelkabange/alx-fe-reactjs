// src/__tests__/TodoList.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../TodoList";

test("renders TodoList component", () => {
  render(<TodoList />);
  // Check that initial todos are rendered
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Learn Jest")).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  // Add a new todo
  fireEvent.change(screen.getByRole("textbox"), {
    target: { value: "New Todo" },
  });
  fireEvent.click(screen.getByText("Add Todo"));
  // Check if new todo is added
  expect(screen.getByText("New Todo")).toBeInTheDocument();
});

test("toggles a todo item", () => {
  render(<TodoList />);
  const todo = screen.getByText("Learn React");
  // Toggle todo status
  fireEvent.click(todo);
  // Check if the todo item is toggled (crossed out)
  expect(todo).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo item", () => {
  render(<TodoList />);
  // Delete the first todo item
  fireEvent.click(screen.getByText("Delete", { selector: "button" }));
  // Check if the todo item is removed
  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
