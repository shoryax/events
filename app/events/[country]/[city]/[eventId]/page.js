import fs from 'fs/promises';
import path from 'path';

export default async function EventDetailsPage({ params }) {
  const { country, city, eventId } = params;

  const filePath = path.join(process.cwd(), 'data', 'data.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(jsonData);

  const event = data.allEvents.find(
    (ev) =>
      ev.country.toLowerCase() === country.toLowerCase() &&
      ev.city.toLowerCase() === city.toLowerCase() &&
      ev.id === eventId
  );

  if (!event) {
    return <div style={{ padding: '2rem' }}>❌ Event not found</div>;
  }

  return (
    <div className='box' style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <h2>{event.title}</h2>

      <div
        style={{
          marginBottom: '2rem',
          padding: '1rem',
          border: '1px solid #ccc',
          borderRadius: '10px'
        }}
      >
        <img
          src={event.image}
          alt={event.title}
          style={{
            width: '100%',
            maxHeight: '300px',
            objectFit: 'cover',
            borderRadius: '6px',
            marginBottom: '1rem'
          }}
        />
        <h2>{event.title}</h2>
        <p>📍 {event.city}, {event.country.toUpperCase()}</p>
        <p>{event.description}</p>
          <input type='email' placeholder='Your email address' style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '1rem', color: 'pink' }} />
        <p>
          <strong>Event Date:</strong> {new Date(event.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
        <button
          style={{
            marginTop: '1rem',
            padding: '10px 20px',
            backgroundColor: '#f0c040',
            color: 'brown',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}