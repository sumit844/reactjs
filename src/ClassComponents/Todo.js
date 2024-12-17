import React, { Component } from "react";
import { nanoid } from "nanoid";
class Todo extends Component {
  constructor() {
    super();
    this.state = {
      userTask: { taskName: "", taskId: "", status: false },
      AddedTask: [],
    };
  }
  takeInput(event) {
    console.log(event.target.value)
    if (event.target.value !== '') {
      let id = Math.floor(Math.random() * 10000).toString();
      this.setState((prev) => {
        return { ...this.state, userTask: { ...this.state.userTask, taskName: event.target.value, taskId: id, status: false } };
      });
    }

  }

  addTask = () => {
    let addedTasks = this.state.AddedTask;

    if (this.state.userTask.taskName !== '') {
      addedTasks.push(this.state.userTask);
      addedTasks = addedTasks.reverse();

      this.setState((prev) => {
        return { ...this.state, AddedTask: addedTasks, userTask: { taskName: "", taskId: "", status: false } };
      });
    }
  };
  deleteTask = (id) => {
    let addedTasks = this.state.AddedTask;

    let modifiedTask = addedTasks.filter((item) => {
      return item.taskId !== id;
    });

    this.setState((prev) => {
      return { ...this.state, AddedTask: modifiedTask };
    });
  };
  DoneTask = (id) => {
    let addedTasks = this.state.AddedTask;

    let modifiedTask = addedTasks.map((item) => {
      if (item.taskId === id) {
        item.status = !item.status;
      }
      return item;
    });

    this.setState((prev) => {
      return { ...this.state, AddedTask: modifiedTask };
    });
  };
  NotDoneTask = (id) => {
    let addedTasks = this.state.AddedTask;

    let modifiedTask = addedTasks.filter((item) => {
      return item.taskId !== id;
    });

    this.setState((prev) => {
      return { ...this.state, AddedTask: modifiedTask };
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>TODO App</h1>
        </div>
        <div className="row">
          <input
            type="text"
            placeholder="Enter your task...."
            onChange={(event) => {
              this.takeInput(event);
            }}
            value={this.state.userTask.taskName}
            className="col-7 col-sm-8 col-md-9 m-1"
          />
          <button className="col-4 col-sm-3 col-md-2 bg-success m-1" onClick={this.addTask}>
            Add Task
          </button>
        </div>

        <div className="Container">
          <div className="row my-3">{this.state?.AddedTask?.length > 0 && <h3>You have added these tasks</h3>}</div>
          <div className="Container">
            {this.state?.AddedTask?.map((item, index) => {
              return (
                <>
                  {!item.status && (
                    <div className="row" key={nanoid()}>
                      <div className="col-5 col-sm-5 col-md-8">
                        <p className="border p-2 border-success">{item.taskName}</p>
                      </div>
                      <button
                        onClick={() => {
                          this.DoneTask(item.taskId);
                        }}
                        className="col-2 col-sm-1 col-md-1 bg-success"
                      >
                        <i className="fa fa-check"></i>
                      </button>
                      <button
                        onClick={(event) => {
                          this.DoneTask(item.taskId);
                        }}
                        className="col-2 col-sm-1 col-md-1 bg-warning"
                      >
                        <i className="fa fa-times"></i>
                      </button>
                      <button
                        onClick={(event) => {
                          this.deleteTask(item.taskId);
                        }}
                        className="col-2 col-sm-1 col-md-1 bg-danger"
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                    </div>
                  )}
                </>
              );
            })}
          </div>

          <div className="Container">
            <div className="row">
              <div className="col-10 mx-2">
                <p>You have completed these tasks</p>
                {this.state?.AddedTask?.map((item, index) => {
                  if (item?.status) {
                    return (
                      <div className="row" key={nanoid()}>
                        <div className="col-5 col-sm-5 col-md-8">
                          <p className="border p-2 border-success">{item.taskName}</p>
                        </div>
                        <button
                          onClick={() => {
                            this.DoneTask(item.taskId);
                          }}
                          className="col-2 col-sm-1 col-md-1 bg-success"
                        >
                          Done
                        </button>
                        <button
                          onClick={(event) => {
                            this.DoneTask(item.taskId);
                          }}
                          className="col-2 col-sm-1 col-md-1 bg-warning"
                        >
                          Not Done
                        </button>
                        <button
                          onClick={(event) => {
                            this.deleteTask(item.taskId);
                          }}
                          className="col-2 col-sm-1 col-md-1 bg-danger"
                        >
                          Delete
                        </button>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
