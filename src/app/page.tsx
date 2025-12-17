'use client';

import { useState, useEffect } from 'react';
import { KanbanBoard } from '@/components/KanbanBoard';
import { TodoList } from '@/components/TodoList';
import { Notes } from '@/components/Notes';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { KanbanTask, TodoItem, Label, DEFAULT_LABELS } from '@/types';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [tasks, setTasks] = useLocalStorage<KanbanTask[]>('vibe-pm-tasks', []);
  const [todos, setTodos] = useLocalStorage<TodoItem[]>('vibe-pm-todos', []);
  const [notes, setNotes] = useLocalStorage<string>('vibe-pm-notes', '');
  const [labels] = useLocalStorage<Label[]>('vibe-pm-labels', DEFAULT_LABELS);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="border-b border-zinc-800 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-zinc-800 rounded flex items-center justify-center">
              <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
              </svg>
            </div>
            <h1 className="text-lg font-semibold text-zinc-100">Vibe - Project Management</h1>
          </div>
          <span className="text-xs text-zinc-600">auto-saved locally</span>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex h-[calc(100vh-65px)]">
        {/* Kanban Board - Main Area */}
        <main className="flex-1 p-6 overflow-hidden">
          {mounted ? (
            <KanbanBoard tasks={tasks} labels={labels} onTasksChange={setTasks} />
          ) : (
            <div className="flex items-center justify-center h-full text-zinc-600">
              Loading...
            </div>
          )}
        </main>

        {/* Sidebar */}
        <aside className="w-80 border-l border-zinc-800 flex flex-col">
          {/* Todo List */}
          <div className="flex-1 p-4 border-b border-zinc-800 overflow-hidden">
            {mounted ? (
              <TodoList todos={todos} onTodosChange={setTodos} />
            ) : (
              <div className="text-zinc-600 text-sm">Loading...</div>
            )}
          </div>

          {/* Notes */}
          <div className="flex-1 p-4 overflow-hidden">
            {mounted ? (
              <Notes notes={notes} onNotesChange={setNotes} />
            ) : (
              <div className="text-zinc-600 text-sm">Loading...</div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
