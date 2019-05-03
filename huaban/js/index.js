
    /**
     * 初始化画布
     */
    var canvas = new fabric.Canvas('dashborad');
    
   	/**
   	 * 清空画布
   	 */
   	clearCanvas = () => {
   		console.log(canvas)
   		canvas.clear();
   	}
   	
   	 selectImage = (file) => {
        if (!file.files || !file.files[0]) {
            return;
        }
        var reader = new FileReader();
        reader.onload = function (evt) {
        	var srcs = evt.target.result;
        	fabric.Image.fromURL(srcs, function(oImg) {
			  	oImg.scale(0.5).set('flipX', true);
			  	canvas.add(oImg);
			});
        }
        reader.readAsDataURL(file.files[0]);
    }
   	
   	/**
   	 * 导出画板
   	 */
   	exportDashborad = () => {
   		let opts = {
			canvas: canvas,                    
			useCORS: true,
			background: '#ff0'                     
		}
		html2canvas(document.querySelector('#dashborad')).then((canvas) => {
			canvas.style.background = '#ff0';
			let base64ImgSrc = canvas.toDataURL("image/png");
			
			/* 如果只是显示,可用以下代码 */
			let img = document.createElement("img");
			img.src = base64ImgSrc ;
			document.body.appendChild(img);
			
			var myWindow = window.open('base64ImgSrc');
			myWindow.location.href = base64ImgSrc
			myWindow.document.write("<img src='"+base64ImgSrc +"'/>");
			myWindow.focus();
		});
   	}
   	
   	/**
   	 * 导入图片
   	 */
   	drawImage = () => {
   		$('.getImages').trigger('click');
   	}
    
    /**
     * 设置是图形为描边
     */
    setStack = () => {
    	var lineWidth = document.querySelector('#lineWidth').value;
    	var stackColor = document.querySelector('#stackcolors').value;
    	var objList = canvas.getObjects();
    	var obj = null;
    	for (var i = 0; i< objList.length; i++) {
    		if (objList[i].active) {
    			obj = objList[i];
    			break;
    		}
    	}
    	if(!obj){return};
    	obj.set('fill', 'transparent');
		obj.set({ strokeWidth: Number(lineWidth), stroke: stackColor });
		canvas.renderAll()
    }
    
    /**
     * 设置是图形为填充
     */
    setFill = () => {
    	var lineWidth = document.querySelector('#lineWidth').value;
    	var fillColor = document.querySelector('#fillcolors').value;
    	var objList = canvas.getObjects();
    	var obj = null;
    	for (var i = 0; i< objList.length; i++) {
    		if (objList[i].active) {
    			obj = objList[i];
    			break;
    		}
    	}
    	console.log(obj)
    	if(!obj){return};
    	obj.set('fill', fillColor);
		obj.set({ strokeWidth: Number(lineWidth), stroke: fillColor });
		canvas.renderAll()
    }
    
    /**
     * 画线
     */
    drawLine = () => {
    	var line =  new fabric.Line([10, 10, 100, 100], {
            strokeWidth: 2, //线宽
            stroke: 'rgba(255,0,0,0.8)', //线的颜色
        });
        canvas.add(line);
    }
    
    
    /**
     * 画圆
     */
    drawCircle = () => {
    	var circle = new fabric.Circle({
		    radius: 50,
		    left: 200,
		    top:100,
		//  fill:'green',
		    stack: 'green',
		    height: 200
		});
		canvas.add(circle);
    }
    
    /**
     * 画矩形
     */
    drawRect = () => {
    	var rect = new fabric.Rect({
		    left: 100,
		    top: 100,
		    fill: 'red',
		    width: 100,
		    height: 100
		});
		canvas.add(rect);
    }
    
    /**
     * 画三角
     */
    drawTriangle = () => {
    	var triangle = new fabric.Triangle({
		    width: 80,
		    height: 100,
		    fill: 'blue',
		    left: 300,
		    top: 300
		})
    	canvas.add(triangle);
    }
    
    /**
     * 输入文本
     */
    drawText = () => {
    	var text = new fabric.Text('hello world', { left: 100, top: 100 });
		canvas.add(text);
    }
    
    /**
     * 绘制不规则图形
     */
    drawPath = () => {
    	var path = new fabric.Path('M 0 0 L 200 100 L 170 200 z');
		path.set({ left: 120, top: 120,fill:'red' });
		canvas.add(path);
    }
    
    /**
     * 画横线
     */
    drawHLine = () => {
    	var hLine =  new fabric.Line([210, 100, 410, 100], {
            strokeWidth: 20, //线宽
            stroke: 'rgba(255,0,0,0.8)', //线的颜色
        });
        canvas.add(hLine);
    }
    
    /**
     * 画竖线
     */
    drawVLine = () => {
    	var vLine =  new fabric.Line([210, 100, 210, 300], {
            strokeWidth: 20, //线宽
            stroke: 'rgba(255,0,0,0.8)', //线的颜色
        });
        canvas.add(vLine);
    }
    