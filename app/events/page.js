import fs from 'fs/promises';
import path from 'path';

const EventHome = async () => {
  const filePath = path.join(process.cwd(), 'data', 'data.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(jsonData);

  const events = data.allEvents;

  const ukEvents = events.filter(event => event.country === 'uk');
  const usEvents = events.filter(event => event.country === 'us');

  return (
    <div>
      <h1>🌍 Events Page</h1>

      <div>
        <h2>🇬🇧 UK Events</h2>
        {ukEvents.map((ev) => (
          <div className='event-uk' key={ev.id}>
            <a className='events' href={`/events/${ev.country}/${ev.city}/${ev.id}`}>
              🧊 {ev.title}
            </a>
          </div>
        ))}
      </div>

      <div>
        <h2>🇺🇸 US Events</h2>
        {usEvents.map((ev) => (
          <div className='event-us' key={ev.id}>
            <a className='events' href={`/events/${ev.country}/${ev.city}/${ev.id}`}>
              🧊 {ev.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventHome;