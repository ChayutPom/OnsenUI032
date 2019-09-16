document.addEventListener('init', function (event) {
    var page = event.target;
    console.log(page.id);

    if (page.id === "tabbar") {
        //Code for tabbar
        $("#menubtn").click(function () {
            var menu = document.getElementById('menu');
            menu.open();
        });
    }

    if (page.id === "sidemenu") {
        //Code for sidemenu
        $("#homebtn").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('tabbar.html')
                .then(menu.close.bind(menu));
        });
        $("#loginbtn").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('login.html')
                .then(menu.close.bind(menu));
        });
        $("#regisbtn").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('register.html')
                .then(menu.close.bind(menu));
        });
    }
    if (page.id === "food") {
        //Code for sidemenu
        $("#cart").click(function () {
            content.load('order.html')
        });
        
    }

    if (page.id === 'tab1') {
        //Code for Tab 1
        $("#btn1").click(function () {
            ons.notification.alert("Hello");
        });
    }

  

        $("#bbb").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('tabbar.html')
                .then(menu.close.bind(menu));
        });

        $("#bbb2").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('tabbar.html')
                
        });
        $("#bbb3").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('food.html')
                
        });
    
    if (page.id === 'tab2') {
        //Code for Tab 1
        $("#menu1").click(function () {
            content.load('food.html')
        });
        $("#menu2").click(function () {
            content.load('food.html')
        });
        $("#menu3").click(function () {
            content.load('food.html')
        });
        $("#menu4").click(function () {
            content.load('food.html')
        });
        $("#menu5").click(function () {
            content.load('food.html')
        });
        $("#menu6").click(function () {
            content.load('food.html')
        });
    }

    document.querySelector('ons-back-button').onClick = function(event) {
        // Reset the whole stack instead of popping 1 page
        document.querySelector('ons-navigator').resetToPage('index.html');
      };


});
const login = () => {
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
  
    if (username === 'user' && password === 'pass') {
      // call the navigator to move to the new page
      const navigator = document.querySelector('#navigator');
      navigator.resetToPage('home.html');
    } else {
      ons.notification.alert('Wrong username/password combination');
    }
  }