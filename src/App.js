import { Provider } from "react-redux";
import store from "./Store"
import Input from "./components/Input";
function App() {
 return(
  <Provider store={store}>
    
  <main>
<Input/>
<footer> Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://www.frontendmentor.io/profile/Saad-Hisham">Saad Hisham</a>.</footer>
  </main>
  </Provider>

  );

}

export default App;









// // import { DndContext, closestCenter } from "@dnd-kit/core";
// // import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable";
// // import { useState } from "react";
// // import { Col, Container, Row } from "react-bootstrap";
// // import { SortableItem } from "./components/SortableItem";

// // function App() {
// //   const [languages,setLanguages] = useState(["javascript","python","typescript"])
// //  return(
// //   <DndContext
// //   collisionDetection={closestCenter}
// //   onDragEnd={handleDragEnd}
// //   >
// //     <Container>
// // <h3>the best programming languages</h3>
// /* <SortableContext
// items={languages}
// strategy={verticalListSortingStrategy}
// > 
//   // {JSON.parse(localStorage.getItem("items")).map(function(language){
//   //   return(
//   //     <SortableItem key={language} id={language}/>
//   //   )
//   // })}

// // </SortableContext>
// // </Container>
// //   </DndContext>
// //   );
// //   function handleDragEnd(e){
//     console.log("drag end called")
//     const {active,over}=e;
//     if(active.id !== over.id){
//       setLanguages((items)=>{
//         const activeIndex =items.indexOf(active.id);
//         const overIndex =items.indexOf(over.id);
//         localStorage.setItem("items",JSON.stringify(arrayMove(items,activeIndex,overIndex)))
//        return arrayMove(items,activeIndex,overIndex);
      
// //       })
// //     }
// //   }
// // }

// // export default App;
