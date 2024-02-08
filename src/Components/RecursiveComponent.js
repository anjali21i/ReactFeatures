import React, { useState } from 'react';

const NestedList = () => {
  // State to track expanded state of each list item
  const [expandedItems, setExpandedItems] = useState({});

  // Handler function to toggle expanded state of list item
  const toggleExpand = (event) => {
    const itemId = event.target.getAttribute('data-id');
    setExpandedItems(prevState => ({
      ...prevState,
      [itemId]: !prevState[itemId]
    }));
  };

  return (
    <div className="nested-list">
      <h2>Nested List</h2>
      <ul>
        {Array.from({ length: 5 }, (_, index) => (
          <ListItem key={index} id={index} toggleExpand={toggleExpand} expanded={expandedItems[index]} />
        ))}
      </ul>
    </div>
  );
};


// Recursive component to render nested list items
const ListItem = ({ id, toggleExpand, expanded }) => {
  const hasChildren = Math.random() < 0.5; // Simulating random presence of children
  const children = hasChildren ? (
    <ul>
      {Array.from({ length: 3 }, (_, index) => (
        <ListItem key={id * 10 + index} id={id * 10 + index} toggleExpand={toggleExpand} expanded={expanded} />
      ))}
    </ul>
  ) : null;

  return (
    <li>
      <div className={`list-item ${expanded ? 'expanded' : ''}`} onClick={toggleExpand} data-id={id}>
        Item {id}
      </div>
      {expanded && children}
    </li>
  );
};

export default NestedList;

//**-----explanation ----**//
/*

Potential issues and debugging steps:

1. **useState initialization:**
   - Ensure that the `expandedItems` state is initialized correctly.
   - Debug by logging `expandedItems` in the `NestedList` component.

2. **toggleExpand function:**
   - Verify that the `toggleExpand` function correctly toggles the expanded state for each list item.
   - Debug by logging `itemId` and the updated `expandedItems` state.

3. **ListItem component:**
   - Check if the `ListItem` component correctly renders list items and handles click events.
   - Debug by logging `id`, `expanded`, and `children` in the `ListItem` component.

4. **Recursion and children rendering:**
   - Ensure that the `ListItem` component correctly renders nested list items when expanded.
   - Debug by inspecting the rendered DOM structure and comparing it with the expected structure.

5. **Random presence of children:**
   - Confirm that the `hasChildren` logic correctly simulates the random presence of children.
   - Debug by logging the value of `hasChildren` for each list item.

By carefully reviewing each component and function, logging relevant variables, and comparing the expected
behavior with the actual behavior, you can identify and address any issues in the code.
*/
