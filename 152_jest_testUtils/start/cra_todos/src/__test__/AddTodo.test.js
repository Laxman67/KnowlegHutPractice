import React from "react";

import AddToDo from "../components/AddToDo";
import { render, cleanup, fireEvent } from "@testing-library/react";
afterEach(cleanup);

describe("Testing AddToDo component ", () => {
  it("Return the content of the input field using the onAdd prop", async () => {
    const onAddFn = jest.fn();
    const { getByPlaceholderText } = render(<AddToDo onAdd={onAddFn} />);
    const taskInput = getByPlaceholderText(/Add a Task/i);

    fireEvent.change(taskInput, {
      target: { value: "This is an amazing task!" },
    });

    fireEvent.keyUp(taskInput, { key: "Enter", keyCode: 13 });
    expect(taskInput.value).toBe("");
    expect(onAddFn).toBeCallWith({
      done: false,
      title: "This is an amazing task!",
    });
  });
});
