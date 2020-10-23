var app = pc.Application.getApplication();
        
        app.on("start", function () {});
        
        function setColor(newColor) 
        {
			app.fire("color:set", newColor);
        };

        function setEnv(newEnv) 
        {
			app.fire("env:set", newEnv);
        };
        
        function setCamera(newCameraIndex) 
        {
			app.fire("camera:set", newCameraIndex);
		};
		
		function setIntExt(intOrExt) 
        {
			app.fire("intext:set", intOrExt);
		};