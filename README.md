# Todo App

## Overview

This Todo App is a micro frontend application built using React, Vite, and Material UI. It allows users to manage their todos by adding, updating, marking as complete, and deleting them. The application follows a micro frontend design, with separate components for the header, footer, todo list, todo item, and todo form.

## Features

- Add new todos
- Update existing todos
- Mark todos as complete
- Delete completed todos
- User-friendly Material UI design

## Components

### Header

The header component displays the title of the application.

### Footer

The footer component includes a GitHub icon linking to the project's GitHub repository. The copyright and current year are centered at the bottom.

### TodoList

The todo list component renders a list of todos, allowing users to toggle completion status, delete completed todos, and update todo texts.

### TodoItem

Each todo item in the list includes a checkbox to toggle completion status, the todo text, and options to edit and delete the todo.

### TodoForm

The todo form component provides a text input and a button to add new todos.

## Getting Started

1. Clone the repository:

```bash
   git clone https://github.com/Michle99/todo-microfrontend.git
```

2. Navigate to the project directory:

```bash
cd todo-microfrontend
```

3. Install dependencies:

```bash
npm install
````

4. Run the development server:

```bash
npm run dev
```

5. Open your browser and visit http://localhost:3000 to view the Todo App.
