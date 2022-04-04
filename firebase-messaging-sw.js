importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');

   /*Update with yours config*/
  const firebaseConfig = {
    apiKey: "AIzaSyBZI3ibL57HsQt6GODSYi1b_zcBF07q2Ds",
        authDomain: "coins11-9e980.firebaseapp.com",
        projectId: "coins11-9e980",
        storageBucket: "coins11-9e980.appspot.com",
        messagingSenderId: "540186727911",
        appId: "1:540186727911:web:d2260b1000fb57486b1942",
        measurementId: "G-5J3MZYC1ME"
 };
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

  /*messaging.onMessage((payload) => {
  console.log('Message received. ', payload);*/
  messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });