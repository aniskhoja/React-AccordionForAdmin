import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  const [content, setContent] = useState(data);
  const handleToggle = () => {
    //something
  }
  return <main>
    <div className='container'>
      <h3>Question and answer about login</h3>
      <section className='info'>
        {content.map(content => <SingleQuestion key={content.id} {...content} handleToggle={handleToggle} />)}
      </section>
    </div>
    <section>
      
    </section>
  </main>;
};

export default App;
