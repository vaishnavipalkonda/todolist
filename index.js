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

