import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { motion } from "framer-motion";
export function SortableItem(props) {


  const { attributes, listeners, setNodeRef, transform } = useSortable({ id: props.id });
  const style = {
    transform: CSS.Transform.toString(transform),

  }
  const handleClick = () => {
    props.id.activeTask = false;
    props.filter(()=>{
      return (props.index.length-1)
    })
    props.functions(() => {
      return [...props.data]

    })


  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}  >
      <motion.div
        className={props.id.activeTask ? "task" : "done"}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .5 }}
        style={{ transformOrigin: "center" }}
      >

        {props.content}
        <span onMouseUp={() => { handleClick() }}></span>



      </motion.div>
    </div>
  )
}