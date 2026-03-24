importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBgV0PcWtjr2R1gAeIR0Obzo_Uufo34K3E",
  projectId: "ai-live-chat-d30d7",
  messagingSenderId: "330505566191",
  appId: "1:330505566191:web:1cb7244d16656d6a05a81a"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
  });
});
