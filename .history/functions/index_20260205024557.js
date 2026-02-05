const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

const messaging = admin.messaging();

// Replace this with your device token (your phone)
const ADMIN_DEVICE_TOKEN = "<YOUR_FCM_TOKEN>";

exports.notifyNewRequest = functions.database
  .ref("/requests/{requestId}")
  .onCreate((snapshot, context) => {
    const data = snapshot.val();
    
    // Prepare message
    let bodyText = '';
    if(data.lane === "priority") {
      bodyText = `New Priority Request: ${data.song} – ${data.artist}`;
    } else {
      bodyText = `New Free Request: ${data.song} – ${data.artist}`;
    }

    const message = {
      token: ADMIN_DEVICE_TOKEN,
      notification: {
        title: "🎵 New Song Request",
        body: bodyText,
      },
      android: {
        priority: "high",
        notification: {
          sound: "default"
        }
      },
      webpush: {
        headers: {
          Urgency: "high"
        },
        notification: {
          icon: "/photos/wg-1logo.png"
        }
      }
    };

    return messaging.send(message)
      .then(() => console.log("Notification sent!"))
      .catch(err => console.error("Error sending notification:", err));
  });
