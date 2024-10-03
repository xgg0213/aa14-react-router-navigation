import {Navigate, useNavigate} from 'react-router-dom';

function Stocks() {
  const loggedIn = true; // setting this to false will direct not logged-in user to not logged-in
  const navigate = useNavigate();

  if (!loggedIn) {
    return <Navigate to="/not-logged-in" replace />
  }

  const handleClick = () => {
    window.alert('Sending info to the DB!');
    navigate('/')
  };

  

  return (
    <div className='comp orange'>
      <h1>Stocks Component</h1>
      <button onClick={handleClick}>Home</button>
    </div>
  );
}

export default Stocks;
