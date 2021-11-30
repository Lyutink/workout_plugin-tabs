const refs = {
  controls: document.querySelector('#tabs-1 [data-controls]'),
  panes: document.querySelector('#tabs-1 [data-panes]'),
};
refs.controls.addEventListener('click', onControlsClick);

function onControlsClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'A') {
    console.log('Кликнули не в ссылку');
    return;
  }

  const currentActiveControlItem = refs.controls.querySelector('.contrrols__item--active');
  
  if (currentActiveControlItem) {
    currentActiveControlItem.classList.remove('controls__item--active');

    const paneId = getPaneId(currentActiveControlItem);
    const pane = getPaneById(paneId);
    pane.classList.remove('pane--active');
    }
  
  const controlItem = event.target;
  console.log('controlItem', controlItem);
  controlItem.classList.add('controls__item--active');

  const paneId = getPaneId(controlItem);
  console.log("paneId", paneId);
  const pane = getPaneById(paneId);
  pane.classList.add('pane--active');
}


function getPaneId(control) {
  console.log("hi",control.getAttribute('href').slice(1));
  return control.getAttribute('href').slice(1);
}

function getPaneById(id) {
  return refs.panes.querySelector(`#${id}`);
}



