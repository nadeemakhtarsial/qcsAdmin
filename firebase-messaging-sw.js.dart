importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging.js');

const firebaseConfig = {
apiKey: "AIzaSyAJnPdi9t-0rfZSiBlK-7EwDMjf8bMa8gQ",
authDomain: "qcs-ghana.firebaseapp.com",
projectId: "qcs-ghana",
storageBucket: "qcs-ghana.appspot.com",
messagingSenderId: "33534535737",
appId: "1:33534535737:web:3e7f2a1e72c5ee5f9785e8",
measurementId: "G-82TZ26H7F8"
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
const notificationTitle = payload.notification.title;
const notificationOptions = {
body: payload.notification.body,
icon: payload.notification.icon,
};

self.registration.showNotification(notificationTitle, notificationOptions);
});
