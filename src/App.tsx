import { useState } from "react";
// import Like from "./components/Like";
// import Button from "./components/updatingObject/Button";
// import Navbar from "./components/Navbar";
// import Card from "./components/Card";
// import Form from "./components/Form";
import ExpeneseList from "./expense-tracker/components/ExpeneseList";
import ExpeneseFilter from "./expense-tracker/components/ExpeneseFilter";
import ExpeneseForm from "./expense-tracker/components/ExpeneseForm";
// import { expenesesList } from "./expense-tracker/components";

// import Alert from "./components/Alert";
// import ListGroup from "./ListGroup";
// import Button from "./components/Button/Button";

function App() {
  // let items = ["Landon", "NewYork", "Tokyo", "Soule", "Paris"];
  // const handleSelectItem = (item: string) => console.log(item);
  // const [alertVisibility, setAlertVisibility] = useState(false);
  // const [cardItemsProduct, setCardItemsProduct] = useState([
  //   "product1",
  //   "product2",
  // ]);
  const [expeneseList, setExpeneseList] = useState<any>([
    { id: 1, description: "aaa", Amount: 10, categories: "Utilities" },
    { id: 2, description: "bbb", Amount: 10, categories: "Utilities" },
    { id: 3, description: "ccc", Amount: 10, categories: "Utilities" },
    { id: 4, description: "ddd", Amount: 10, categories: "Utilities" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const expeneseSelectedItem = expeneseList.filter(
    (item: any) => item.categories === selectedCategory
  );
  return (
    <>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectedItem={handleSelectItem}
      /> */}
      {/* {alertVisibility && (
        <Alert onClose={() => setAlertVisibility(false)}>Hello World</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)} color="primary">
        Click me
      </Button> */}
      {/* <Like onClick={() => console.log("clicked")} /> */}
      {/* <Button /> */}
      {/* <Navbar cardItemCount={cardItemsProduct.length} />
      <Card
        cardItems={cardItemsProduct}
        onClear={() => setCardItemsProduct([])}
      /> */}
      {/* <Form /> */}
      <div className="mb-3">
        <ExpeneseForm
          onSubmit={(data) =>
            setExpeneseList([
              ...expeneseList,
              { ...data, id: expeneseList.length + 1 },
            ])
          }
        />
      </div>
      <ExpeneseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <ExpeneseList
        expeneses={expeneseSelectedItem}
        onDelete={(id) =>
          setExpeneseList(expeneseList.filter((item: any) => item.id !== id))
        }
      />
    </>
  );
}

export default App;
