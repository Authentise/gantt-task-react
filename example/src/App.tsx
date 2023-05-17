import React from "react";
import { Task, ViewMode, Gantt, ThreadsEventGantt } from "gantt-task-react";
import { ViewSwitcher } from "./components/view-switcher";
import { getStartEndDateForProject, initTasks } from "./helper";
import "gantt-task-react/dist/index.css";

const currentDate = new Date();
const ganttTaskEvents = [
  {
    dependencies: ['34'],
    id: '1',
    name: 'LOL',
    description: '',
    type: 'ISSUE',
    thread: 1,
    relatedEvent: null,
    relatedThread: null,
    status: 'NOT_STARTED',
    dueDate: '2023-04-28T09:49:04.832000Z',
    creator: {
      id: '877916a6-013e-4424-9ef1-78cb878268a9',
      email: 'ash@authentise.com',
      firstName: 'A',
      lastName: 'C',
      avatar: null,
      siteId: 1,
      userRole: 'admin',
      description: 'sdfsdff',
      group: 'Admin',
      phone: null,
    },
    createdAt: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
    updatedAt: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9, 0, 0),
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9, 0, 0),
  },
  {
    dependencies: ['1'],
    id: '2',
    name: 'SECOND ITEM',
    description: '',
    type: 'DECISION',
    thread: 34,
    relatedEvent: null,
    relatedThread: null,
    status: 'NOT_STARTED',
    dueDate: '2023-04-28T09:49:04.832000Z',
    creator: {
      id: '877916a6-013e-4424-9ef1-78cb878268a9',
      email: 'ash@authentise.com',
      firstName: 'A',
      lastName: 'C',
      avatar: null,
      siteId: 1,
      userRole: 'admin',
      description: 'sdfsdff',
      group: 'Admin',
      phone: null,
    },
    createdAt: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
    updatedAt: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10, 0, 0),
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10, 0, 0),
  },
  {
    id: '3',
    name: 'SECOND ITEM',
    description: '',
    type: 'RESOLUTION',
    thread: 1,
    relatedEvent: null,
    relatedThread: null,
    status: 'NOT_STARTED',
    dueDate: '2023-04-28T09:49:04.832000Z',
    creator: {
      id: '877916a6-013e-4424-9ef1-78cb878268a9',
      email: 'ash@authentise.com',
      firstName: 'A',
      lastName: 'C',
      avatar: null,
      siteId: 1,
      userRole: 'admin',
      description: 'sdfsdff',
      group: 'Admin',
      phone: null,
    },
    createdAt: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
    updatedAt: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10, 0, 0),
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10, 0, 0),
  },
];

const ganttTasks = [
  {
    id: '1',
    name: 'LOL',
    description: '',
    type: 'ISSUE',
    thread: 1,
    relatedEvent: null,
    relatedThread: null,
    status: 'NOT_STARTED',
    dueDate: '2023-04-28T09:49:04.832000Z',
    creator: {
      id: '877916a6-013e-4424-9ef1-78cb878268a9',
      email: 'ash@authentise.com',
      firstName: 'A',
      lastName: 'C',
      avatar: null,
      siteId: 1,
      userRole: 'admin',
      description: 'sdfsdff',
      group: 'Admin',
      phone: null,
    },
    createdAt: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
    updatedAt: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9, 0, 0),
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9, 0, 0),
  },
  {
    id: '2',
    name: 'SECOND ITEM',
    description: '',
    type: 'DECISION',
    thread: 34,
    relatedEvent: null,
    relatedThread: null,
    status: 'NOT_STARTED',
    dueDate: '2023-04-28T09:49:04.832000Z',
    creator: {
      id: '877916a6-013e-4424-9ef1-78cb878268a9',
      email: 'ash@authentise.com',
      firstName: 'A',
      lastName: 'C',
      avatar: null,
      siteId: 1,
      userRole: 'admin',
      description: 'sdfsdff',
      group: 'Admin',
      phone: null,
    },
    createdAt: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
    updatedAt: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10, 0, 0),
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10, 0, 0),
  },
  {
    id: '3',
    name: 'SECOND ITEM',
    description: '',
    type: 'RESOLUTION',
    thread: 1,
    relatedEvent: null,
    relatedThread: null,
    status: 'NOT_STARTED',
    dueDate: '2023-04-28T09:49:04.832000Z',
    creator: {
      id: '877916a6-013e-4424-9ef1-78cb878268a9',
      email: 'ash@authentise.com',
      firstName: 'A',
      lastName: 'C',
      avatar: null,
      siteId: 1,
      userRole: 'admin',
      description: 'sdfsdff',
      group: 'Admin',
      phone: null,
    },
    createdAt: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
    updatedAt: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10, 0, 0),
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10, 0, 0),
  },
];

const threads = [
  {
      "id": 1,
      "name": "Testrhead",
      "description": "12344",
      "creator": {
          "id": "877916a6-013e-4424-9ef1-78cb878268a9",
          "email": "ash@authentise.com",
          "firstName": "A",
          "lastName": "C",
          "avatar": null,
          "group": "Admin"
      },
      "status": "ON_TARGET",
      "priority": "MEDIUM",
      "createdAt": "2023-04-14T09:38:48.704123Z",
      "updatedAt": "2023-05-11T14:10:52.167145Z",
      "tags": [],
      "site": 1,
      "references": [
          {
              "id": 23,
              "name": "Test_swagger.json",
              "description": null,
              "url": null,
              "file": "http://localhost:7002/media/reference/None/Test_swagger.json",
              "fileSize": "14.2 KB",
              "thread": 1,
              "creator": {
                  "id": "877916a6-013e-4424-9ef1-78cb878268a9",
                  "email": "ash@authentise.com",
                  "firstName": "A",
                  "lastName": "C",
                  "avatar": null,
                  "group": "Admin"
              },
              "createdAt": "2023-05-11T14:10:52.140956Z",
              "updatedAt": "2023-05-11T14:10:52.140983Z"
          },
          {
              "id": 22,
              "name": "DECISION_ICON.svg",
              "description": null,
              "url": null,
              "file": "http://localhost:7002/media/reference/None/DECISION_ICON.svg",
              "fileSize": "1.2 KB",
              "thread": 1,
              "creator": {
                  "id": "877916a6-013e-4424-9ef1-78cb878268a9",
                  "email": "ash@authentise.com",
                  "firstName": "A",
                  "lastName": "C",
                  "avatar": null,
                  "group": "Admin"
              },
              "createdAt": "2023-05-11T14:10:05.015520Z",
              "updatedAt": "2023-05-11T14:10:05.015563Z"
          },
          {
              "id": 21,
              "name": "authentise_logo_sm.png",
              "description": null,
              "url": null,
              "file": "http://localhost:7002/media/reference/None/authentise_logo_sm.png",
              "fileSize": "3.1 KB",
              "thread": 1,
              "creator": {
                  "id": "877916a6-013e-4424-9ef1-78cb878268a9",
                  "email": "ash@authentise.com",
                  "firstName": "A",
                  "lastName": "C",
                  "avatar": null,
                  "group": "Admin"
              },
              "createdAt": "2023-05-11T14:09:10.150464Z",
              "updatedAt": "2023-05-11T14:09:10.150484Z"
          }
      ]
  },
  {
      "id": 34,
      "name": "Cube",
      "description": "Thread about https://data.dev-auth2.com/model-library/46c8fe65-4a99-428e-ac58-601c34e1988e/",
      "creator": {
          "id": "877916a6-013e-4424-9ef1-78cb878268a9",
          "email": "ash@authentise.com",
          "firstName": "A",
          "lastName": "C",
          "avatar": null,
          "group": "Admin"
      },
      "status": "ON_TARGET",
      "priority": "LOW",
      "createdAt": "2023-04-17T11:35:29.208886Z",
      "updatedAt": "2023-05-09T08:14:56.973943Z",
      "tags": [],
      "site": 1,
      "references": [
          {
              "id": 19,
              "name": "Cube",
              "description": null,
              "url": "https://data.dev-auth2.com/model-library/46c8fe65-4a99-428e-ac58-601c34e1988e/",
              "file": null,
              "fileSize": null,
              "thread": 34,
              "creator": {
                  "id": "877916a6-013e-4424-9ef1-78cb878268a9",
                  "email": "ash@authentise.com",
                  "firstName": "A",
                  "lastName": "C",
                  "avatar": null,
                  "group": "Admin"
              },
              "createdAt": "2023-04-17T11:35:29.856940Z",
              "updatedAt": "2023-04-17T11:35:29.856955Z"
          }
      ]
  },
]

// Init
const App = () => {
  const [view, setView] = React.useState<ViewMode>(ViewMode.Day);
  const [tasks, setTasks] = React.useState<Task[]>(initTasks());
  const [isChecked, setIsChecked] = React.useState(true);
  let columnWidth = 65;
  if (view === ViewMode.Year) {
    columnWidth = 350;
  } else if (view === ViewMode.Month) {
    columnWidth = 300;
  } else if (view === ViewMode.Week) {
    columnWidth = 250;
  }

  const handleTaskChange = (task: Task) => {
    console.log("On date change Id:" + task.id);
    let newTasks = tasks.map(t => (t.id === task.id ? task : t));
    if (task.project) {
      const [start, end] = getStartEndDateForProject(newTasks, task.project);
      const project = newTasks[newTasks.findIndex(t => t.id === task.project)];
      if (
        project.start.getTime() !== start.getTime() ||
        project.end.getTime() !== end.getTime()
      ) {
        const changedProject = { ...project, start, end };
        newTasks = newTasks.map(t =>
          t.id === task.project ? changedProject : t
        );
      }
    }
    setTasks(newTasks);
  };

  const handleTaskDelete = (task: Task) => {
    const conf = window.confirm("Are you sure about " + task.name + " ?");
    if (conf) {
      setTasks(tasks.filter(t => t.id !== task.id));
    }
    return conf;
  };

  const handleProgressChange = async (task: Task) => {
    setTasks(tasks.map(t => (t.id === task.id ? task : t)));
    console.log("On progress change Id:" + task.id);
  };

  const handleDblClick = (task: Task) => {
    alert("On Double Click event Id:" + task.id);
  };

  const handleClick = (task: Task) => {
    console.log("On Click event Id:" + task.id);
  };

  const handleSelect = (task: Task, isSelected: boolean) => {
    console.log(task.name + " has " + (isSelected ? "selected" : "unselected"));
  };

  const handleExpanderClick = (task: Task) => {
    setTasks(tasks.map(t => (t.id === task.id ? task : t)));
    console.log("On expander click Id:" + task.id);
  };

  return (
    <div className="Wrapper">
      <ViewSwitcher
        onViewModeChange={viewMode => setView(viewMode)}
        onViewListChange={setIsChecked}
        isChecked={isChecked}
      />

      <ThreadsEventGantt
        tasks={ganttTaskEvents}
        threads={threads}
        events={ganttTaskEvents}
        viewMode={view}
        viewDate={new Date()}
        // TooltipContent={Tooltip}
        // TaskListTable={EventListTable}
        // TaskListHeader={TaskListHeader}
        columnWidth={columnWidth}
        listCellWidth={'155px'}
        arrowIndent={0}
        // {...GanttStyles}
        // handleWidth={ganttCellWidth.barWidth}
      />

      <hr />
      <h3>Gantt With Unlimited Height</h3>
      <Gantt
        tasks={tasks}
        viewMode={view}
        onDateChange={handleTaskChange}
        onDelete={handleTaskDelete}
        onProgressChange={handleProgressChange}
        onDoubleClick={handleDblClick}
        onClick={handleClick}
        onSelect={handleSelect}
        onExpanderClick={handleExpanderClick}
        listCellWidth={isChecked ? "155px" : ""}
        columnWidth={columnWidth}
      />
      <h3>Gantt With Limited Height</h3>
      <Gantt
        tasks={tasks}
        viewMode={view}
        onDateChange={handleTaskChange}
        onDelete={handleTaskDelete}
        onProgressChange={handleProgressChange}
        onDoubleClick={handleDblClick}
        onClick={handleClick}
        onSelect={handleSelect}
        onExpanderClick={handleExpanderClick}
        listCellWidth={isChecked ? "155px" : ""}
        ganttHeight={300}
        columnWidth={columnWidth}
      />
    </div>
  );
};

export default App;
