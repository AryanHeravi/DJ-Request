importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCRzE9DheGAxan7h2NLB14Va3hI4Pc5EKM",
  authDomain: "aryauxsongrequest.firebaseapp.com",
  databaseURL: "https://aryauxsongrequest-default-rtdb.firebaseio.com",
  projectId: "aryauxsongrequest",
  messagingSenderId: "376455919089",
  appId: "1:376455919089:web:4962df21f4145b61c30050"
});

const messaging = firebase.messaging();

// Optional: handle background notifications
messaging.onBackgroundMessage(function(payload) {
  console.log('[Service Worker] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
