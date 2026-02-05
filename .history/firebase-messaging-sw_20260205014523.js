importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCRzE9DheGAxan7h2NLB14Va3hI4Pc5EKM",
  authDomain: "aryauxsongrequest.firebaseapp.com",
  projectId: "aryauxsongrequest",
  messagingSenderId: "376455919089", // keep this from your FCM console
  appId: "1:376455919089:web:4962df21f4145b61c30050"
});

const messaging = firebase.messaging();

// Show notification when a message is received in the background
messaging.onBackgroundMessage(payload => {
  console.log('[Service Worker] Received background message', payload);
  const { title, body } = payload.notification;
  self.registration.showNotification(title, {
    body: body,
    icon: '/photos/wg-1logo.png'
  });
});
