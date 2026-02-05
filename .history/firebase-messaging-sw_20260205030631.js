// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCRzE9DheGAxan7h2NLB14Va3hI4Pc5EKM",
  authDomain: "aryauxsongrequest.firebaseapp.com",
  projectId: "aryauxsongrequest",
  messagingSenderId: "376455919089",
  databaseURL: "https://aryauxsongrequest-default-rtdb.firebaseio.com"
});

const messaging = firebase.messaging();

// Handle background notifications
messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/photos/wg-1logo.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
