import React, { useEffect } from 'react';

const CLIENT_ID = '8075178098-ea6ecvfevubpe8mmibermf6oo45h6oh3.apps.googleusercontent.com';



const App = () => {
  useEffect(() => {
    const initGoogleSignIn = () => {
      gapi.load('auth2', () => {
        gapi.auth2.init({
          client_id: CLIENT_ID,
          scope: 'email profile',
        });
      });
    };

    initGoogleSignIn();
  }, []);

  const handleGoogleSignIn = () => {
    gapi.auth2.getAuthInstance().signIn().then(
      (user) => {
        const profile = user.getBasicProfile();
        const email = profile.getEmail(); // Get user's email
        console.log('User signed in:', profile.getName());
        console.log('User email:', email);
      },
      (error) => {
        console.log('Sign-in error:', error);
      }
    );
  };

  const handleGoogleSignOut = () => {
    gapi.auth2.getAuthInstance().signOut().then(() => {
      console.log('User signed out');
    });
  };

  return (
    <div>
      <h1>Google Sign-In Example</h1>
      <button onClick={handleGoogleSignIn}>Sign In with Google</button>
      <button onClick={handleGoogleSignOut}>Sign Out</button>
    </div>
  );
};

export default App;
