import React, {useState} from 'react';

const App = () => {

    const [activeId, setActiveId] = useState(1)
   
   return(
            <div>
                <Accordion>
                    <Accordion.Item id="1" title="One">
                        <div>
                            Content 1
                        </div>
                    </Accordion.Item>
                    <Accordion.Item id="2" title="Two">
                        <div>
                            Content 2
                        </div>
                    </Accordion.Item>
                    <Accordion.Item id="3" title="Three">
                        <div>
                            Content 3
                        </div>
                    </Accordion.Item>
                </Accordion>
            </div>
        )
}