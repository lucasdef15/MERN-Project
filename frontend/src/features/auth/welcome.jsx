import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000); // update every second

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  const today = new Intl.DateTimeFormat(navigator.language, {
    dateStyle: 'full',
    timeStyle: 'long',
  }).format(date);

  return (
    <section className='welcome'>
      <p>{today}</p>

      <h1>Welcome!</h1>

      <p>
        <Link to='/dash/notes'>View techNotes</Link>
      </p>

      <p>
        <Link to='/dash/users'>View User Settings</Link>
      </p>
    </section>
  );
};

export default Welcome;
