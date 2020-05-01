<!DOCTYPE html>
<html lang='pt-br'>
<head>
	<title>olaMundoPWA</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="theme-color" content="#AAAAAA">
	<!-- Favicon -->
	<link rel='shortcut icon' href="images/bomb.png"/>
	
	<link rel='manifest' href='manifest.json'>
	
	<!-- CODELAB: Add iOS meta tags and icons -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-mobile-web-app-title" content="Weather PWA">
    <link rel="apple-touch-icon" href="images/bomb-192x192.png">
    <link rel="apple-touch-icon" href="images/bomb-512x512.png">
    
    <meta name="description" content="A sample test PWA app">
    
    <meta name="theme-color" content="#2F3BA2" />
    
	<script type="text/javascript">
        if ('serviceWorker' in navigator) {
          window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-work.js')
                .then((reg) => {
                  console.log('Service worker registered.', reg);
                });
          });
        }
	</script>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="md-col-12">
				<h1 title="olá mundo">Olá mundo, PWA!</h1>
			</div>
		</div>
	</div>
	<script type="text/javascript" src='js/jquery.js'></script>
	<script type="text/javascript" src='js/bootstrap.js'></script>
</body>
</html>