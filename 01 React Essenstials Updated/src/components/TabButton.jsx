import Examples from "./Examples";

export default function TabButton({ children ,onSelect,isSelected}) {
    return ( 
    <li>
        <button className={isSelected ? "active" : undefined} onClick={onSelect}>{children}</button>
    </li>
    );
}

//here also we can use the FORWARDING PROPS or can say PROXY PROPS                                                                                                                                                                                                                                                                                                                                                          
// just do the followin changements 
{/* <button className={isSelected ? "active" : undefined} {...props}>{children}</button> */}

// and in the Examples.jsx file change the line
{/* <TabButton isSelected={selectedTopic === "components"} onSelect={() => handleSelect("components")}>Components</TabButton> */}
// to
{/* <TabButton isSelected={selectedTopic === "components"} onClick={() => handleSelect("components")}>Components</TabButton> */}