const createFormHandler = async (event) => {
    event.preventDefault();
  
    const eventName = document.querySelector('#event_name')
    const artistName = document.querySelector('#artist_name')
    const eventTime = document.querySelector('#event_time')
    const stageTime = document.querySelector('#stage_time')
    const description = document.querySelector('#description')
  
    if (eventName && artistName && eventTime && stageTime && description) {
      const response = await fetch('/api/events', {
        method: 'POST',
        body: JSON.stringify({
            event_name: eventName.value,
            artist_name: artistName.value,
            event_time: eventTime.value,
            stage_time: stageTime.value,
            description: description.value,
          }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  document
  .querySelector('#eventform')
  .addEventListener('submit', createFormHandler);