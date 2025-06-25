import fs from 'fs/promises';
import path from 'path';
import Image from 'next/image';
import './globals.css';

export default async function HomePage() {
  const filePath = path.join(process.cwd(), 'data', 'data.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(jsonData);

  const events = data.allEvents;
  const ukEvents = events.filter(event => event.country === 'uk');
  const usEvents = events.filter(event => event.country === 'us');

  return (
    <div>
      <h1 className='home'>Welcome to Events!</h1>

      <h2>Events in the United Kingdom</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {ukEvents.map((event) => (
          <li key={event.id} style={{ marginBottom: '2rem' }}>
            <div className='main'>
              <a
                href={`/events/${event.country}/${event.city}/${event.id}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Image
                  className='image'
                  src={event.image}
                  alt={event.title}
                  width={300}
                  height={180}
                  style={{ borderRadius: '5px', objectFit: 'cover' }}
                />
                <h2 className='title'>{event.title}</h2>
                <p className='tsitp'>{event.description}</p>
              </a>
            </div>
          </li>
        ))}
      </ul>

      <h2>Events in the United States</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {usEvents.map((event) => (
          <li key={event.id} style={{ marginBottom: '2rem' }}>
            <div className='main'>
              <a
                href={`/events/${event.country}/${event.city}/${event.id}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Image
                  className='image'
                  src={event.image}
                  alt={event.title}
                  width={300}
                  height={180}
                  style={{ borderRadius: '5px', objectFit: 'cover' }}
                />
                <h2 className='title'>{event.title}</h2>
                <p className='tsitp'>{event.description}</p>
              </a>
            </div>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <footer style={{
        marginTop: '4rem',
        padding: '1rem',
        textAlign: 'center',
        borderTop: '1px solid #ccc',
        color: '#555',
        fontSize: '0.9rem'
      }}>
        © {new Date().getFullYear()} Events App. All rights reserved.
      </footer>
    </div>
  );
}