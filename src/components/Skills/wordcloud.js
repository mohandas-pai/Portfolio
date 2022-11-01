import React, { useEffect, useState } from 'react'
import TagCloud from 'TagCloud'

const WordCloud = () => {
    const [isLoading, setLoad] = useState(true);
    const container = '.content'
    const techs=["HTML5",
    "Java",
    "Python",
    "Git",
    "MongoDB",
    "React",
    "Node",
    "ExpressJs",
    "Javascript",
    "git",
    "C/C++",
    "CSS3",
    "REST",
    "JSON",
    "Bootstrap",
    "jQuery",
    "npm",
    "Maven",
    "FireBase"];

    const options = {
        radius: 300,
        maxSpeed: 'normal',
        initSpeed: 'fast',
        direction: 135,
        keep: true,
    }

    useEffect(() => {
        function loadEffect(){
            if (isLoading) {
            TagCloud(container, techs, options)
            setLoad(false)
            }
        }
        loadEffect();
    },[]) // eslint-disable-line react-hooks/exhaustive-deps

    return(
        <div className='main'>
            <span className='content'></span>
        </div>
    );
};

export default WordCloud;