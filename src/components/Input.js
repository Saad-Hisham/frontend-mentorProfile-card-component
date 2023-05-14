
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import moon from "../todo-app-main/images/icon-moon.svg"
import sun from "../todo-app-main/images/icon-sun.svg"
import { SortableItem } from "../components/SortableItem";

function Input() {
  const [tasks, setTasks] = useState([
    { key: Math.random() * 1234567890123456789, content: "Complete Online javascript course", activeTask: false },
    { key: Math.random() * 1234567890123456789, content: "Jog around the park x3", activeTask: true },
    { key: Math.random() * 1234567890123456789, content: "10 Minutes of meditaion", activeTask: true },
    { key: Math.random() * 1234567890123456789, content: "Read for 1 hour", activeTask: true },
    { key: Math.random() * 1234567890123456789, content: "Pick up groceries", activeTask: true },
    { key: Math.random() * 1234567890123456789, content: "Complete Todo App on Frontend Mentor", activeTask: true },
]);
  { localStorage.getItem("items") == null ? localStorage.setItem("items", "[]") : localStorage.setItem("items", JSON.stringify(tasks)) }
  const done = tasks.filter(filter => filter.activeTask == false);
  const active = tasks.filter(filter => filter.activeTask == true);
  const [text, setText] = useState("");
  const [state, setState] = useState(false)
  const [mode, setMode] = useState("dark");

  const [filterd, setFilterd] = useState(tasks);
  const [activeFilter, setActiveFilter] = useState(false)
  const [count, setcount] = useState(filterd.length - done.length);
  const [activeClass,setActiveClass] = useState("all")

  const hanldeMode = () => {
    if (mode != "light") {
      setMode("light")
      document.body.classList.value = mode
      localStorage.setItem("mode", mode)
    }
    else {
      setMode("dark")
      document.body.classList.value = mode
      localStorage.setItem("mode", mode)
    }
  }

  return (

    <main>
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <div className="form-background">
        </div>
        <Container >
          <Row>
            <Col xs={12}>
              <h1>TODO</h1>
              <div onClick={hanldeMode} style={{ cursor: "pointer" }}>
                <img src={moon} alt="active dark mode icon" />
                <img src={sun} alt="active light mode icon" style={{ display: "none" }} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="input-container" >
                <input type="text" placeholder="Create a new todo..." value={text} onChange={(e) => { setText(e.target.value) }} />
                <span onClick={() => {
                  if (text.trim() === '') {
                    return false;
                  } else {
                    setTasks([...tasks, { key: Math.random() * 1234567890123456789, content: text, activeTask: true }])
                    setActiveFilter(false)
                    setcount(active.length + 1)

                  }
                  setText("")
                }}></span>
              </div>
            </Col>
            <Col xs={12}>
              <div className="task-container" >
                {activeFilter != true ? <SortableContext items={tasks} strategy={verticalListSortingStrategy} >
                  {tasks.map(function (x) {

                    return (

                      <SortableItem key={x.key} id={x} content={x.content} tasks={tasks} arrange={tasks} functions={setTasks} filter={setcount} data={tasks} active={active} index={active} />

                    )
                  })}
                </SortableContext> :


                  // 
                  <SortableContext items={tasks} strategy={verticalListSortingStrategy} >
                    {filterd.map(function (x) {

                      return (

                        <SortableItem key={x.key} id={x} content={x.content} tasks={filterd} arrange={filterd} functions={setTasks} data={filterd} filter={setcount} index={active} />


                      )
                    })}
                  </SortableContext>

                }

              </div>
            </Col>

            {/*  */}
            <Col xs={12}>
              <div className="tasks-info" >
                <div>{count} items left</div>
                <div>
                  <ul>
                    <li 
                    className={activeClass=="all"?"active" :null}
                    onClick={() => {
                      setActiveClass("all")
                      setActiveFilter(true)
                      setFilterd(tasks)

                    }}>All</li>
                    <li 
                     className={activeClass=="active"?"active" :null}
                    onClick={() => {
                      setActiveClass("active")
                      setActiveFilter(true)
                      setFilterd(active)

                    }}>Active</li>
                    <li 
                   className={activeClass=="comp"?"active" :null}
                    onClick={() => {
                      setActiveClass("comp")
                      setActiveFilter(true)
                      setFilterd(done)

                    }}>Completed</li>
                  </ul>
                </div>
                <div onClick={() => {
                  setActiveFilter(false)
                  setTasks(active)
                  setcount(active.length)


                }}
                style={{cursor:"pointer"}}
                >
                  Clear Completed
                </div>

              </div>
            </Col>

          </Row>
        </Container>

      </DndContext>
    </main>

  );
  function handleDragEnd(e) {
    setState(true)
    const { active, over } = e;
    if (active.id !== over.id) {
      setTasks((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);
        localStorage.setItem("items", JSON.stringify(arrayMove(items, activeIndex, overIndex)))
        return arrayMove(items, activeIndex, overIndex);


      })
      setFilterd((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);
        return arrayMove(items, activeIndex, overIndex);


      })
    }
  }



}

export default Input;









