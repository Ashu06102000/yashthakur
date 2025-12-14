import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

beforeEach(() => {
  localStorage.clear();
});

test("allows a user to add and complete a task", async () => {
  render(<App />);

  const input = screen.getByLabelText(/add a new task/i);
  await userEvent.type(input, "Buy milk");
  await userEvent.click(screen.getByRole("button", { name: /add/i }));

  const todo = screen.getByText("Buy milk");
  expect(todo).toBeInTheDocument();

  const checkbox = screen.getByRole("checkbox", {
    name: /mark buy milk as done/i,
  });
  expect(checkbox).not.toBeChecked();

  await userEvent.click(checkbox);
  expect(checkbox).toBeChecked();

  const clearButton = screen.getByRole("button", { name: /clear completed/i });
  expect(clearButton).not.toBeDisabled();
});

test("shows helpful empty states", async () => {
  render(<App />);

  expect(
    screen.getByText(/add your first task to start keeping track/i),
  ).toBeInTheDocument();

  const completedTab = screen.getByRole("tab", { name: /completed/i });
  await userEvent.click(completedTab);

  expect(
    screen.getByText(/no tasks marked as done yet/i),
  ).toBeInTheDocument();
});
