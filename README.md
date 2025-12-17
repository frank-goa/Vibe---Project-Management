# Vibe - Project Management

A clean, dark-mode project management app built for vibe coders. Features a Kanban board, quick tasks, and notes — all saved locally in your browser.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)

## Features

### Kanban Board
- **Three columns**: Todo, In Progress, Complete
- **Drag and drop**: Move tasks between columns
- **Priorities**: Low, Medium, High — auto-sorted with high priority at top
- **Labels**: Tag tasks with Bug, Feature, Design, Docs, or Urgent
- **Due dates**: Set deadlines with overdue highlighting
- **Archive**: Completed tasks can be archived for a cleaner board

### Quick Tasks
- Simple checkbox-based todo list
- Perfect for small tasks that don't need full Kanban treatment
- Completed tasks sort to the bottom

### Notes
- Freeform textarea for jotting down ideas
- Auto-saves as you type

### Data Persistence
- All data saved to browser LocalStorage
- Works offline
- No account required

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Storage**: LocalStorage
- **Drag & Drop**: Native HTML5 API

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/frank-goa/Vibe---Project-Management.git
cd Vibe---Project-Management

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and dark theme
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main page component
├── components/
│   ├── KanbanBoard.tsx  # Board with columns and drag-drop
│   ├── KanbanCard.tsx   # Individual task card
│   ├── TodoList.tsx     # Quick tasks sidebar
│   └── Notes.tsx        # Notes textarea
├── hooks/
│   └── useLocalStorage.ts  # LocalStorage hook with SSR support
└── types/
    └── index.ts         # TypeScript types and constants
```

## Usage

### Creating Tasks

1. Click **+ Add task** in any column
2. Enter a title
3. Select priority (Low/Med/High)
4. Optionally add labels and due date
5. Click **Add** or press Enter

### Editing Tasks

1. Hover over a task card
2. Click the pencil icon
3. Modify title, description, priority, labels, or due date
4. Click **Save**

### Moving Tasks

- **Drag and drop** cards between columns
- Tasks in the same column are auto-sorted by priority

### Archiving Tasks

1. Move a task to the **Complete** column
2. Hover and click the archive icon (box)
3. Archived tasks appear in a collapsible section at the bottom

### Quick Tasks

- Type in the input and press Enter or click **+**
- Click the checkbox to complete
- Click **x** to delete

### Notes

- Just start typing — saves automatically

## LocalStorage Keys

The app uses the following localStorage keys:

| Key | Description |
|-----|-------------|
| `vibe-pm-tasks` | Kanban board tasks |
| `vibe-pm-todos` | Quick tasks list |
| `vibe-pm-notes` | Notes content |
| `vibe-pm-labels` | Custom labels (defaults provided) |

To reset all data, clear these keys from your browser's localStorage.

## Default Labels

| Label | Color |
|-------|-------|
| Bug | Red |
| Feature | Blue |
| Design | Purple |
| Docs | Yellow |
| Urgent | Orange |

## License

MIT
