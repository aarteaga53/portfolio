import React, { useEffect, useRef, useState } from 'react'
import '../styles/Terminal.css'

const Terminal = () => {
  let inputRef = useRef()
  let [path, setPath] = useState('user@andrewarteaga.com:~$ ')
  let [command, setCommand] = useState('')
  let [history, setHistory] = useState([])
  let [index, setIndex] = useState(-1)
  let [display, setDisplay] = useState([
    { msg: "Welcome to Andrew's Terminal.", class: 'welcome' },
    { msg: "View some of my early projects by navigating through a linux-style terminal.", class: 'welcome'},
    { msg: "Enter 'help' for a list of commands.", class: 'welcome'}
  ])
  const help = [
    { msg: '\tcat\t\t-\tconcatenate file and print', class: 'welcome' },
    { msg: '\tcd\t\t-\tchange working directory', class: 'welcome' },
    { msg: '\tclear\t-\tclear terminal screen', class: 'welcome' },
    { msg: '\thelp\t-\tview list of commands', class: 'welcome' },
    { msg: '\tls\t\t-\tlist directory contents', class: 'welcome' }
  ]

  useEffect(() => {
    // Select the node that will be observed for mutations
    const targetNode = document.getElementById('terminal-body');
    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: true, subtree: true };

    // Callback function to execute when mutations are observed
    const callback = (mutationList, observer) => {
      for (const mutation of mutationList) {
        if (mutation.type === 'childList') {
          // console.log('A child node has been added or removed.');
          targetNode.scrollTop = targetNode.scrollHeight
        } 
        // else if (mutation.type === 'attributes') {
        //   console.log(`The ${mutation.attributeName} attribute was modified.`);
        // }
      }
    };
  
    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);
    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);
    // Later, you can stop observing
    // observer.disconnect();
  }, [])

  /**
   * execute the inputted command
   * @param {*} e 
   */
  let enterCommand = async (e) => {   
    if(e.key === 'Enter') {
      setDisplay(display => [...display, { msg: `${path} ${command}`, class: 'command'}])
      setHistory(history => [...history, command])
      setIndex(history.length)

      const split = command.split(' ')
      
      switch(split[0]) {
        case 'cat':
          cat(split)
          break
        case 'cd':
          change(split)
          break
        case 'clear':
          setDisplay([])
          break
        case 'help':
          setDisplay(display => [...display, ...help])
          break
        case 'ls':
          list()
          break
        default:
          break
      }

      setCommand('')
    } else if(e.key === 'ArrowUp') {
      if(index >= 0) {
        setCommand(history[index])
        setIndex(index - 1)
      }
    } else if(e.key === 'ArrowDown') {
      if(index === history.length - 1) {
        setCommand('')
      } else if(index < history.length - 1) {
        setCommand(history[index+1])
        setIndex(index + 1)
      }
    }
  }

  /**
   * change the current directory to the specified path
   * @param {*} split 
   * @returns 
   */
  let change = async (split) => {
    if(split.length > 1 && split[1].length > 0) {
      let pathName = path.substring(path.indexOf('~') + 1, path.indexOf('$'))

      if(pathName !== '' && split[1] === '..') {
        setPath(`${path.substring(0, path.lastIndexOf('/'))}$ `)
        return
      } else if((pathName === '' && split[1] === '..') || split[1] === '.') {
        return
      }

      let host = process.env.REACT_APP_HOST || 'http://127.0.0.1:8000'
      let response = await fetch(`${host}/directory`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ path: `${pathName}/${split[1]}` })
      })
      let data = await response.json()

      if(data.msg === 'success') {
        setPath(`${path.substring(0, path.length - 2)}/${split[1]}$ `)
      }
    } else {
      setPath('user@andrewarteaga.com:~$ ')
    }
  }

  /**
   * concatenate the specified file and print it out
   * @param {*} split 
   * @returns 
   */
  let cat = async (split) => {
    if(split.length > 1 && split[1].length > 0) {
      if(split[1].includes('..')) {
        return
      }

      let pathName = `${path.substring(path.indexOf('~') + 1, path.indexOf('$'))}/${split[1]}`
      let host = process.env.REACT_APP_HOST || 'http://127.0.0.1:8000'
      let response = await fetch(`${host}/cat`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ path: pathName })
      })
      let data = await response.json()

      if(data.msg !== 'error') {
        setDisplay(display => [...display, { msg: data.msg, class: 'plain'}])
      }
    }
  }

  /**
   * list the files in the current directory
   */
  let list = async () => {
    let host = process.env.REACT_APP_HOST || 'http://127.0.0.1:8000'
    let response = await fetch(`${host}/list`, {
      method: 'POST',
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify({ path: `${path.substring(path.indexOf('~') + 1, path.indexOf('$'))}` })
    })

    let data = await response.json()

    if(!('msg' in data)) {
      let files = ''

      data.forEach((file) => {
        files += `${file}    `
      })

      setDisplay(display => [...display, { msg: files, class: 'file'}])
    }
  }

  let handleChange = (e) => {
      setCommand(e.target.value)
  }

  return (
    <div className='terminal-glass-tile'>
      <div className='terminal-glass'></div>
      <div className='terminal' onClick={() => {inputRef.current.focus({preventScroll: true})}}>
        <div className='terminal-panel'><div className='terminal-title'>Andrew's Terminal</div></div>
        <div className='terminal-body' id='terminal-body'>
          {display.map((line, index) => (
            <pre className={line.class} key={index}>{line.msg}</pre>
            ))}
          <span className='path'>{path.substring(0, path.indexOf(':'))}</span>
          <span>{path.charAt(path.indexOf(':'))}</span>
          <span className='pwd'>{path.substring(path.indexOf(':') + 1, path.indexOf('$'))}</span>
          <span>{path.substring(path.length - 2)}</span>
          <input ref={inputRef} type='text' id='command' spellCheck={false} autoComplete='off' value={command} onChange={handleChange} onKeyDown={enterCommand} />
        </div>
      </div>
    </div>
  )
}

export default Terminal