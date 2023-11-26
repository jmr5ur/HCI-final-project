let randBox;
let boxSize = (2 * window.innerHeight) / 40;

function randInt(val) {
    return Math.floor(Math.random() * val)
}

function renderBoxes() {
    randBox = randInt(boxSize)
    for (let i = 0; i <= boxSize; i++)
    {
        const box = document.getElementById('dot');

        box.style.left = `${window.innerWidth / 2}px`;
        box.style.top = `${i * 40}px`;
        if (i == randBox)
        {
            box.style.display = 'boxSelect';
        }
        else
        {
            box.style.display = 'box';
        }
            
    }
    startTime = new Date();
  }

  function handleClick() {
    endTime = new Date();
    const backButton = document.getElementById('backButton');
    const timeDiff = endTime - startTime; // in milliseconds
  
    // console.log(`Click ${clickCount + 1}: ${timeDiff}ms (${accuracy})`);
  
    clickCount++;
  
    if (clickCount < 2) {
      renderBoxes()
      // trial = timeDiff + "\n";
      // data += trial;
      trial.push(timeDiff);
    } else {
      // trial = timeDiff + "\n";
      // data += trial;
      trial.push(timeDiff);
      data = trial.join("\n");
      console.log('Test completed!');
      console.log(data);
      backButton.style.display = 'inline-flex';
      clickCount = 0;
      saveAndDownload();
    }
  }
  function saveAndDownload() {
    const name = localStorage.getItem('userName');
    var blob = new Blob([data], { type: "text/plain" });
    var link = document.createElement("a");
    link.download = name + "_"+ "click.txt";
    link.href = URL.createObjectURL(blob);
  
    // Append the link to the body
    document.body.appendChild(link);
  
    // Trigger a click on the link to start the download
    link.click();
  
    // Remove the link from the DOM
    document.body.removeChild(link);
  }

  document.getElementById('boxSelect').addEventListener('click', handleClick);

  renderBoxes()