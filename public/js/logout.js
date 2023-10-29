const techLogout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/'); 
    } else {
      alert('Sorry! Unable to log out.'); 
    }
  };
  
  const techLogoutButton = document.querySelector('#tech-logout');
  if (techLogoutButton) {
    techLogoutButton.addEventListener('click', techLogout);
  }