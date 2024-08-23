import React from 'react';
import Swal from 'sweetalert2';

function UserData({ name, capitalCity, img, city }) {
  const handleClick = () => {
    Swal.fire({
      title: 'City Information',
      text: `City: ${capitalCity}`,
      icon: 'info',
      confirmButtonText: 'OK',
      customClass: {
        container: 'custom-alert',
        title: 'custom-alert-title',
        content: 'custom-alert-content',
        text: 'custom-alert-text',
        confirmButton: 'custom-alert-confirm-button',
        
      }
    });
  };

  return (
    <div>
      <div>
        <h1 className="font-mono text-3xl text-yellow-200">{name}</h1>
        <h3 className="text-zinc-100">{capitalCity}</h3>
      </div>
      <img
        className=""
        style={{ objectFit: 'contain', width: '100%', height: '200px', cursor: 'pointer' }}
        onClick={handleClick}
        src={img}
        alt={name}
      />
    </div>
  );
}

export default UserData;
