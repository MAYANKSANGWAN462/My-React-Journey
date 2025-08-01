import { CORE_CONCEPTS, EXAMPLES } from './data'; // imported the data.js file
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import { useState } from 'react';

function App() {
  const [selectedTopic, setselectedTopic] = useState('')

  function handleSelect(selectedButton) {
    //selectedButton -->> 'components','jsx','props','state'
    setselectedTopic(selectedButton)
    console.log(selectedTopic);
  }
  let tabContent = <p>please select a topic</p>
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} img={CORE_CONCEPTS[0].image}/> */}
            {/* <CoreConcept title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} img={CORE_CONCEPTS[1].image}/> */}
            {/* <CoreConcept title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} img={CORE_CONCEPTS[2].image}/> */}
            {/* <CoreConcept title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} img={CORE_CONCEPTS[3].image}/> */}
            {/* OR */}
            {/* <CoreConcept {...CORE_CONCEPTS[0]} /> */}
            {/* <CoreConcept {...CORE_CONCEPTS[1]} /> */}
            {/* <CoreConcept {...CORE_CONCEPTS[2]} /> */}
            {/* <CoreConcept {...CORE_CONCEPTS[3]} /> */}
            {/* OR */}
            {CORE_CONCEPTS.map((conceptItem)=>(<CoreConcept key={conceptItem.title} {...conceptItem} />))}
            {/* above is handling it dynamically  */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected = {selectedTopic === "components"} onSelect={() => handleSelect("components")}>Components</TabButton>
            <TabButton isSelected = {selectedTopic === "jsx"} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected = {selectedTopic === "props"} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected = {selectedTopic === "state"} onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {/* {selectedTopic} */}
          {tabContent}

        </section>
      </main>
    </div>
  );
}

export default App;
