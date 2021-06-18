{
  type ToDo = {
    title: string
    description: string
    label: string
    priority: 'high' | 'low'
  }
  function updateTodo(todo: ToDo, filedsToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...filedsToUpdate }
  }
  const todo: ToDo = {
    title: 'learn TypeScript',
    description: 'study hard',
    label: 'study',
    priority: 'high',
  }
  updateTodo(todo, { priority: 'low' })
}
