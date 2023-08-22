const todoList = () => {
  let all = [];

  const add = (todoItem) => {
    all.push(todoItem);
  };

  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    const overdueArr = all.filter((x) => x.dueDate === yesterday);
    return overdueArr;
  };

  const dueToday = () => {
    const dueTodayArr = all.filter((x) => x.dueDate === today);
    return dueTodayArr;
  };

  const dueLater = () => {
    const dueLaterArr = all.filter((x) => x.dueDate === tomorrow);
    return dueLaterArr;
  };

  const toDisplayableList = (list) => {
    const display = list.map((item) => {
      const status = item.completed ? "[x]" : "[ ]";
      return `${status} ${item.title} ${item.dueDate}`;
    });
    return display.join("\n");
  };

  return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
};

// ... Rest of the code ...
const todos = todoList();
  
  const formattedDate = d => {
    return d.toISOString().split("T")[0]
  }
  
  var dateToday = new Date()
  const today = formattedDate(dateToday)
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  )
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  )
  
  todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
  todos.add({ title: 'Pay rent', dueDate: today, completed: true })
  todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
  todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
  todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

console.log("My Todo-list\n\n");

console.log("Overdue");
const overdues = todos.overdue();
const formattedOverdues = todos.toDisplayableList(overdues);
console.log(formattedOverdues);
console.log("\n\n");

console.log("Due Today");
const itemsDueToday = todos.dueToday();
const formattedItemsDueToday = todos.toDisplayableList(itemsDueToday);
console.log(formattedItemsDueToday);
console.log("\n\n");

console.log("Due Later");
const itemsDueLater = todos.dueLater();
const formattedItemsDueLater = todos.toDisplayableList(itemsDueLater);
console.log(formattedItemsDueLater);
console.log("\n\n");

