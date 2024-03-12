document.addEventListener('DOMContentLoaded', function() {
    var arrowButton = document.getElementById('arrowButton');
    var image1 = document.getElementById('image1');
    var image2 = document.getElementById('image2');
    var image3 = document.getElementById('image3');
    var image4 = document.getElementById('image4');
    var image5 = document.getElementById('image5');
    var image6 = document.getElementById('image6');
    var image7 = document.getElementById('image7');
    var p1w = document.getElementById('p1w');

    var isFirstClick = 0;
    var tap = 0;
    var ana, score, score1, score11 , aaa, aaaa ,A,B,C,dot1,dot2,dot3,text1111,play,circlee,HAS1,HAS1_1,HAS_2,HAS2,HAS3,qgbh,qgbhw1,qgbhw2;
    var wheeltimes=0;
    var num,gonext,health,health1,health2,health3,health4,health5,health6,health7,gener,over5;
    var currentIndex=0;
    arrowButton.addEventListener('click', function() {
        if (isFirstClick==0) {
            isFirstClick++;
        image1.style.transition = 'opacity 0.5s ease';
        image1.style.opacity = '0';
        arrowButton.style.transition = 'opacity 0.5s ease';
        arrowButton.style.opacity = '0';
        p1w.style.transition = 'opacity 0.5s ease';
        p1w.style.opacity = '0';

        setTimeout(function() {
            image1.style.display = 'none';
            arrowButton.style.display = 'none';
            p1w.style.display = 'none';
        }, 1500);
        image2.style.transition = 'transform 1.5s ease , opacity 1.5s ease';
        image2.style.transform = 'scale(1.8) rotate(-10deg) translateX(130%) translateY(90%)';
        image5.style.transition = 'transform 1.5s ease , opacity 1.5s ease';
        image5.style.transform = 'scale(2.5) rotate(-30deg) translateX(-150%) translateY(90%)';
        image4.style.transition = 'transform 1.5s ease, opacity 1.5s ease';
        image4.style.transform = 'scale(3.0) rotate(-30deg) translateX(350%) translateY(410%)';
        image6.style.transition = 'transform 2.0s ease, opacity 1.5s ease';
        image6.style.transform = 'scale(3.0) rotate(-30deg) translateX(600%) translateY(-510%)';
        image7.style.transition = 'transform 1.5s ease, opacity 1.5s ease';
        image7.style.transform = 'scale(1.5) rotate(-30deg) translateX(100%) translateY(-300%)';
        image2.style.opacity = '0.5'; 
        image4.style.opacity = '0.5'; 
        image5.style.opacity = '0.5';
        image6.style.opacity = '0.5'; 
        image7.style.opacity = '0.5';

        var text = document.createElement('h1');
        text.style = 'opacity: 0; color: #F1F1F1; font-size: 36px; font-family: Archivo; font-weight: 900; line-height: 64.24px; letter-spacing: 2px; word-wrap: break-word; text-align: center; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); transition: opacity 2s ease, transform 2s ease;';
        text.innerHTML = 'According to our research, every 10 people, <br>' +
                        '3 of them have a higher tendency of loveless.';
        document.body.appendChild(text);

        setTimeout(() => {
            text.style.opacity = '1';
        }, 100);

        setTimeout(() => {
            text.style.opacity = '0';
            text.style.transform = 'translate(-50%, -80%)';
        }, 2500);
        setTimeout(() => {
            var text1 = document.createElement('h1');
            text1.className = 'ljtext';
            text1.style = 'color: #F1F1F1; font-size: 36px; font-family: Archivo; font-weight: 900; line-height: 64.24px; letter-spacing: 2px; word-wrap: break-word; text-align: center; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -200%); opacity: 0; transition: opacity 2s ease;';
            text1.innerHTML = 'Now, let’s first understand the<br>' + 'tendencies of our own love impotence.';
            document.body.appendChild(text1);

            image2.style.transform += 'translateX(-30%) translateY(-10%)';
            image4.style.transform += 'scale(2.0) translateX(-30%) translateY(-30%)';
            image5.style.transform += 'scale(2.0)  translateY(-50%)';

            A = document.createElement('B');
            A.className = 'image-text';
            A.style = 'background-color:transparent;border-style:none;position: absolute; left: 55%; top: 50%; transform: translate(-50%, -50%); color: #F1F1F1; font-size: 28px;opacity:0';
            A.innerHTML = 'FEEL';
            document.body.appendChild(A);

            B = document.createElement('B');
            B.className = 'image-text';
            B.style = 'position: absolute; left: 55%; top: 50%; transform: translate(-50%, -50%); color: #F1F1F1; font-size: 24px;opacity:0';
            B.innerHTML = 'Understanding';
            document.body.appendChild(B);

            C = document.createElement('B');
            C.className = 'image-text';
            C.style = 'position: absolute; left: 55%; top: 50%; transform: translate(-50%, -50%); color: #F1F1F1; font-size: 24px;opacity:0';
            C.innerHTML = 'Dialogue';
            document.body.appendChild(C);

            setTimeout(() => {
                text1.style.opacity = '1';
                A.style.transition = 'opacity 3.0s ease';
                A.style.opacity = '1';
                A.style.transform = 'translate(-180%, 600%)'; 
                B.style.transition = 'opacity 3.0s ease';
                B.style.opacity = '1';
                B.style.transform = 'translate(-420%, 230%)'; 
                C.style.transition = 'opacity 3.0s ease';
                C.style.opacity = '1';
                C.style.transform = 'translate(485%, 1100%)'; 
            }, 200); 
            image5.addEventListener('click',function(){
                image5.addEventListener('click', function() {
                    image5.style.pointerEvents = 'none';
                    image2.style.transition = 'transform 1.5s ease ,opacity 1.0s ease';
                    image2.style.opacity = '0';
                    image4.style.transition = 'transform 1.5s ease ,opacity 1.0s ease';
                    image4.style.opacity = '0';
                    image2.style.transform += 'translateY(400%)';
                    image4.style.transform += 'translateY(400%)';
                    A.style.transition = 'opacity 1.0s ease';
                    B.style.transition = 'opacity 1.0s ease';
                    C.style.transition = 'opacity 1.0s ease';
                    A.style.opacity = '0';
                    B.style.opacity = '0';
                    C.style.opacity = '0';
                    text1.style.opacity = '0';
                    text1.style.transition = 'opacity 1.0s ease';
                    image5.style.transition = 'transform 2.5s ease';
                    image5.style.transform = 'scale(33.0) translateX(30%) translateY(10%)';
                    image6.style.opacity = '0.5';
                    image7.style.opacity = '0.5';
                
                    var currentMessageIndex = 0; // 全局消息索引
                    var Q1 = document.createElement('h1');
                    Q1.className = 'text';
                    Q1.style = 'position: absolute; text-align: center;color: #F1F1F1;left: 50%; top: 50%; transform: translate(-50%, -100%); opacity: 0; transition: opacity 1s ease;';
                    document.body.appendChild(Q1);
                    var Q= document.createElement('h1');
                    Q.className = 'text';
                    Q.style = 'position: absolute; text-align: center;color: #F1F1F1;left: 50%; top: 50%; transform: translate(-50%, -100%); opacity:0; transition: opacity 1s ease;';
                    document.body.appendChild(Q);
                    Q.innerText='When you feel that someone has developed feelings of love for you, you cant help but want to reject or avoid it.';
                    
                    setTimeout(function() {
                        Q.style.opacity = '1'; // 重新显示
                    }, 1500); // 等待淡出完成
                
                    dot1 = document.getElementById('dot1');
                    dot2 = document.getElementById('dot2');
                    dot3 = document.getElementById('dot3');
                    dot4 = document.getElementById('dot4');
                    dot1.classList.remove('active');
                    dot2.classList.add('active');
                
                    var buttonContainer = document.getElementById('button-container');
                    while (buttonContainer.firstChild) {
                        buttonContainer.removeChild(buttonContainer.firstChild);
                    }               
                    var messages = [
                        'When you feel that someone has developed feelings of love for you, you cant help but want to reject or avoid it.',
                        'You enjoy the early parts of an intimate relationship, and at the first sign of conflict or argument, you want to break it up to avoid it.',
                        'You feel anxious about making commitments because it limits your options and possibilities. You feel like you have more important things to do.',
                        'You instinctively resist or respond to messages or calls from people who have a good impression of you.',
                        'When it comes to a stranger, you might be more willing to open up and honestly share your inner thoughts.',
                        'In front of friends, family, and acquaintances, you have a strict distinction of how you should present yourself. In every situation, you seem like a different person.',
                        'When you are too busy to make commitments to others (e.g. meeting up, going on a date), you feel happy.',
                        'You are worried that once people understand the real you, they may no longer have a favorable opinion of you.',
                        '',
                        '',
                        '',
                        '',
                        '',
                        '',
                        '',
                    ];
                
                    var buttonsInfo = [
                        { id: 'btn-this-is-me', text: 'This Is Me.' },
                        { id: 'btn-not-sure', text: 'Not Sure.' },
                        { id: 'btn-not-me', text: 'Not Me.' }
                    ];

                    buttonsInfo.forEach(function(buttonInfo, index) {
                        var button = document.createElement('button');
                        button.id = buttonInfo.id;
                        button.textContent = buttonInfo.text;
                        button.onclick = function() {
                            if (currentMessageIndex == 0) Q.style.opacity = '0'; // 首次点击时淡出Q
                            Q1.style.opacity = '0'; // 开始淡出Q1
                            setTimeout(function() {
                                currentMessageIndex++; // 更新消息索引
                                if (currentMessageIndex >7) {
                                    Q1.style.opacity = '0'; // 隐藏Q1
                                    // 移除所有按钮
                                    while (buttonContainer.firstChild) {
                                        buttonContainer.removeChild(buttonContainer.firstChild);
                                    }
                                    // 這段代碼會在你的 setTimeout 函數之後執行

                                    ana = document.createElement('h1');
                                    ana.className = 'text';
                                    ana.style = 'position: absolute; text-align: center;color: #F1F1F1;left: 50%; top: 15%; transform: translate(-50%, -50%); opacity: 1; transition: opacity 1s ease;';
                                    ana.innerText = 'Your initial analysis';
                                    document.body.appendChild(ana);
                                    
                                    score =document.createElement('img');
                                    score.src = 'ph/score.png';
                                    score.style='position: absolute;width:60%;height:10% text-align: center;left: 50%; top: 30%; transform: translate(-50%, -50%);';
                                    document.body.appendChild(score);

                                    score1 =document.createElement('img');
                                    score1.src = 'ph/111.png';
                                    score1.style='position: absolute;width:15%;height:15% text-align: center;left: 35%; top: 70%; transform: translate(-50%, -50%);';
                                    document.body.appendChild(score1);

                                    score11 =document.createElement('img');
                                    score11.src = 'ph/1111.png';
                                    score11.style='position: absolute;width:30%;height:15% text-align: center;left: 65%; top: 70%; transform: translate(-50%, -50%); padding:10px;';
                                    document.body.appendChild(score11);

                                    arrowButton.style.display = 'block';  // 使箭头按钮可见
                                    arrowButton.style.opacity = '1';
                                    A.style.transform += 'translateX(80%) translateY(-50%)';
                                    B.style.transform += 'translateX(50%)';
                                    C.style.transform += 'translateX(20%) ';
                                } else {
                                    setTimeout(function(){
                                        Q1.innerHTML = messages[currentMessageIndex]; // 更新Q1内容
                                        Q1.style.opacity = '1'; // 重新显示Q1
                                    },1000)
                                }
                            }); // 等待淡出完成
                        };
                        setTimeout(function() {
                            buttonContainer.appendChild(button);
                        }, 1500);
                    });
                });    
            });
        }, 3000);
        }else if(isFirstClick==1){
            if (ana && score && score1 && score11) {
                // 设置透明度变化
                function removeAfterTransition(element) {
                    function handleTransitionEnd() {
                        element.remove();
                        element.removeEventListener('transitionend', handleTransitionEnd);
                    }
                    element.addEventListener('transitionend', handleTransitionEnd);
                }
                
                ana.style.transition = 'opacity 1.0s ease';
                ana.style.opacity = '0';
                removeAfterTransition(ana);
                
                score.style.transition = 'opacity 1.0s ease';
                score.style.opacity = '0';
                removeAfterTransition(score);
                
                score1.style.transition = 'opacity 1.0s ease';
                score1.style.opacity = '0';
                removeAfterTransition(score1);
                
                score11.style.transition = 'opacity 1.0s ease';
                score11.style.opacity = '0';
                removeAfterTransition(score11);
                
        
                // 增加延迟时间以确保透明度变化显示
                setTimeout(function() {
                    aaa =document.createElement('img');
                    aaa.src = 'ph/222.png';
                    aaa.style='position: absolute;width:15%;height:15% text-align: center;left: 50%; top: 20%; transform: translate(-50%, -50%); padding:10px; opacity:0;';
                    document.body.appendChild(aaa);
                    aaaa =document.createElement('img');
                    aaaa.src = 'ph/2222.png';
                    aaaa.style='position: absolute;width:35%;height:20% text-align: center;left: 50%; top: 40%; transform: translate(-50%, -50%); padding:10px; opacity:0;';
                    document.body.appendChild(aaaa);
                    aaa.style.transition = 'opacity 1.0s ease';
                    aaa.style.opacity="1";
                    aaaa.style.transition = 'opacity 1.0s ease';
                    aaaa.style.opacity="1";
                    isFirstClick++;
                },1500);
            }
        }else if(isFirstClick==2){
            if (aaa && aaaa) {
                aaa.remove();
                aaaa.remove();
            }
            dot2.classList.remove('active');
            dot3.classList.add('active');
            // 移除 aaa 和 aaaa 元素
            image5.style.transition = 'transform 1.5s ease, opacity 1.5s ease';
            image5.style.transform = 'scale(5.5) translateX(-40%) translateY(40%)';
            image5.style.opacity = '1'; // 您可能需要根据您的需求调整透明度


            image2.style.transition = 'transform 1.5s ease, opacity 1.5s ease';
            image2.style.transform = 'scale(2.3) translateX(100%) translateY(45%)';
            image2.style.opacity = '0.8';

            image4.style.transition = 'transform 1.5s ease, opacity 1.5s ease';
            image4.style.transform = 'scale(5.5) translateX(240%) translateY(90%)';
            image4.style.opacity = '1'; 
            arrowButton.style.opacity = '0';

            setTimeout(function(){
                A.style.opacity = '1';
                B.style.opacity = '1'; 
                C.style.opacity = '1';
            },1500);
            var text111 = document.createElement('h1');
            text111.style = 'opacity: 0; color: #F1F1F1; font-size: 36px; font-family: Archivo; font-weight: 900; line-height: 64.24px; letter-spacing: 2px; word-wrap: break-word; text-align: center; position: absolute; left: 50%; top: 30%; transform: translate(-50%, -50%); transition: opacity 2s ease, transform 2s ease;';
            text111.innerHTML = 'Using sound and visuals to help you feel the six<br>' +
                            'major behaviors of loveless.';
            document.body.appendChild(text111);


    
            setTimeout(() => {
                text111.style.opacity = '1';
            }, 100);

            A.addEventListener('click',function(){
                image2.style.pointerEvents = 'none';
                text111.style.opacity = '0';
                image2.style.transform += 'scale(3.5) translateY(10%)';
                image2.style.zIndex='0';
                image2.style.opacity = '0.3';
                image4.style.transform += 'translateY(300%)';
                image5.style.transform += 'translateY(300%)';
                A.style.opacity = '0';
                B.style.opacity = '0'; 
                C.style.opacity = '0';
                A.style.transition = 'opacity 1.0s ease';
                B.style.transition = 'opacity 1.0s ease';
                C.style.transition = 'opacity 1.0s ease';
                arrowButton.style.opacity = '1';
                setTimeout(() => {
                    text1111 = document.createElement('h1');
                    text1111.style = 'opacity: 0; color: #F1F1F1; font-size: 36px; font-family: Archivo; font-weight: 900; line-height: 64.24px; letter-spacing: 2px; word-wrap: break-word; text-align: center; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); transition: opacity 1s ease, transform 2s ease;';
                    text1111.innerHTML = 'By selecting #hashtag, it will be transformed into<br>' +
                                    'a prompt to present a personalized AI image for you.';
                    document.body.appendChild(text1111);
                    isFirstClick++;
                    setTimeout(() => {
                        text1111.style.opacity = '1';
                    }, 100)
                }, 1500);
            })
        }else if(isFirstClick==3)
        {
            isFirstClick++;
            text1111.style.opacity = '0';
            arrowButton.style.opacity = '0';
        
            qgbh =document.createElement('img');
            qgbh.src = 'ph/qgbh.gif';
            qgbh.style='opacity 1s ease;transform 1s ease;opacity: 0;position: absolute;width:30%;height:50% text-align: center;left: 50%; top: 55%; transform: translate(-50%, -50%);transition: opacity ease,';
            document.body.appendChild(qgbh);
            qgbhw1 =document.createElement('img');
            qgbhw1.src = 'ph/qgbhw1.png';
            qgbhw1.style='opacity 1s ease;transform 1s ease;opacity: 0;position: absolute;width:15%;height:10% text-align: center;left: 20%; top: 25%; transform: translate(-50%, -50%);transition: opacity ease,';
            document.body.appendChild(qgbhw1);
            qgbhw2 =document.createElement('img');
            qgbhw2.src = 'ph/qgbhw2.png';
            qgbhw2.style='opacity 1s ease;transform 1s ease;opacity: 0;position: absolute;width:15%;height:65% text-align: center;left: 20%; top: 60%; transform: translate(-50%, -50%);transition: opacity ease,';
            document.body.appendChild(qgbhw2);
            turn =document.createElement('img');
            turn.src = 'ph/turn.png';
            turn.style='opacity 1s ease;transform 1s ease;opacity: 0;position: absolute;width:20%;height:110%;text-align: center;left: 95%; top: 50%; transform: translate(-50%, -50%);transition: opacity ease,';
            document.body.appendChild(turn);
            num =document.createElement('img');
            num.src = 'ph/num1.png';
            num.style='opacity 1s ease;transform 1s ease;opacity: 0;position: absolute;width:5%;height:5%;text-align: center;left: 92%; top: 50%; transform: translate(-50%, -50%);transition: opacity ease,';
            document.body.appendChild(num);
            gonext =document.createElement('img');
            gonext.src = 'ph/gonext.png';
            gonext.style='opacity 1s ease;transform 1s ease;opacity: 0;position: absolute;width:1.5%;height:3%;text-align: center;left: 95%; top: 50.2%; transform: translate(-50%, -50%);transition: opacity ease,';
            document.body.appendChild(gonext);
            setTimeout(() => {
                qgbh.style.opacity = '1';
                qgbhw1.style.opacity = '1';
                qgbhw2.style.opacity = '1';
                turn.style.opacity = '1';
                num.style.opacity = '1';
                gonext.style.opacity = '1';
                image3.style.opacity='0';

                qgbh.addEventListener('click',function(){
                    if(tap==0)
                    {
                        qgbh.style.transform = 'translate(-50%, -50%) translateX(-60%)';
                        qgbhw1.style.opacity = '0';
                        qgbhw2.style.opacity = '0';
                        turn.style.opacity = '0';
                        num.style.opacity = '0';
                        gonext.style.opacity = '0';
    
                        play =document.createElement('img');
                        play.src = 'ph/play.png';
                        play.style='opacity 1s ease;transform 1s ease;opacity: 1;position: absolute;width:15%;height:15% text-align: center;left: 65%; top: 50%; transform: translate(-50%, -50%);transition: opacity ease,';
                        document.body.appendChild(play);
    
                        circlee =document.createElement('img');
                        circlee.src = 'ph/circlee.png';
                        circlee.style='opacity 1s ease;transform 1s ease;opacity: 1;position: absolute;width:10%;height:10% text-align: center;left: 100%; top: 50%; transform: translate(-50%, -50%);transition: opacity ease,';
                        document.body.appendChild(circlee);
    
                        HAS1 =document.createElement('img');
                        HAS1.src = 'ph/HAS1.png';
                        HAS1.style='opacity 1s ease;transform 1s ease;opacity: 1;position: absolute;width:8%;height:8% text-align: center;left: 97%; top: 30%; transform: translate(-50%, -50%);transition: opacity ease,';
                        document.body.appendChild(HAS1);
    
                        HAS1.addEventListener('click', function() {
                            if (HAS1.src.includes('ph/HAS1.png')) {
                                HAS1.src = 'ph/HAS1_1.png';
                            }
                            else if (HAS1.src.includes('ph/HAS1_1.png')) {
                                HAS1.src = 'ph/HAS1.png';
                            }
                        });
    
                        HAS2=document.createElement('img');
                        HAS2.src = 'ph/HAS2.png';
                        HAS2.style='opacity 1s ease;transform 1s ease;opacity: 1;position: absolute;width:8%;height:8% text-align: center;left: 92%; top: 50%; transform: translate(-50%, -50%);transition: opacity ease,';
                        document.body.appendChild(HAS2);
                        
                        HAS2.addEventListener('click', function() {
                            if (HAS2.src.includes('ph/HAS2.png')) {
                                HAS2.src = 'ph/HAS_2.png';
                            }
                            else if (HAS2.src.includes('ph/HAS_2.png')) {
                                HAS2.src = 'ph/HAS2.png';
                            }
                        });
    
                        HAS3 =document.createElement('img');
                        HAS3.src = 'ph/HAS3.png';
                        HAS3.style='opacity 1s ease;transform 1s ease;opacity: 1;position: absolute;width:8%;height:8% text-align: center;left: 97%; top: 70%; transform: translate(-50%, -50%);transition: opacity ease,';
                        document.body.appendChild(HAS3);
                        tap++;

                        HAS3.addEventListener('click', function() {
                            if (HAS3.src.includes('ph/HAS3.png')) {
                                HAS3.src = 'ph/HAS_3.png';
                            }
                            else if (HAS3.src.includes('ph/HAS_3.png')) {
                                HAS3.src = 'ph/HAS3.png';
                            }
                        });
                    }else if(tap==1){
                        qgbh.style.transform = 'translate(-50%, -50%) translateX(15%)';
                            
                        circlee.style.opacity = '0';
                        HAS1.style.opacity = '0';
                        HAS2.style.opacity = '0';
                        HAS3.style.opacity = '0';
                        play.style.opacity = '0';
                        num.style.opacity = '1';
                        gonext.style.opacity = '1';

                        num.style.zIndex='1';
                        gonext.style.zIndex='1';
                        qgbhw1.style.opacity = '1';
                        qgbhw2.style.opacity = '1';
                        turn.style.opacity = '1';
                        tap--;
                    }
                });
            }, 1000);
        }else if(isFirstClick==4){
            if (health.parentNode) health.remove();
            if (health1.parentNode) health1.remove();
            if (health2.parentNode) health2.remove();
            if (health3.parentNode) health3.remove();
            if (health4.parentNode) health4.remove();
            if (health5.parentNode) health5.remove();
            if (health6.parentNode) health6.remove();
            if (health7.parentNode) health7.remove();
            arrowButton.style.opacity='0';

            isFirstClick++;

            let gener = document.createElement('img');
            gener.src = 'ph/4_1.png';
            gener.style = 'opacity: 1; transition: opacity 0.5s ease; position: absolute; width:40%; height:80%; text-align: center; left: 50%; top: 50%; transform: translate(-50%, -50%);';
            document.body.appendChild(gener);

            let currentIndex = 1; // 目前圖片的索引，從1開始計算
            const totalImages = 8; // 總共有8張圖片

            const updateImageSrc = () => {
                if (currentIndex < totalImages) {
                    currentIndex++; // 每次呼叫这个函数时，索引增加
                    gener.src = `ph/4_${currentIndex}.png`; // 更新图片路径
                    gener.style.opacity = '1'; // 淡入
                } else {
                    clearInterval(intervalId); // 达到最后一张图片，停止更换
                }
            };

            const changeImage = () => {
                gener.style.opacity = '0'; // 淡出
                setTimeout(updateImageSrc, 500); // 等待淡出完成后更换图片
            };

            const intervalId = setInterval(changeImage, 2000); // 设置定时更换图片
            setTimeout(()=>{
                image2.style.opacity='0';
                let ans = document.createElement('img');
                ans.src = 'ph/4_9.png';
                ans.style = 'opacity: 1; transition: opacity 0.5s ease; position: absolute; width:60%; height:90%; text-align: center; left: 55%; top: 50%; transform: translate(-50%, -50%);';
                document.body.appendChild(ans);

                let arrow1 = document.createElement('img');
                arrow1.src = 'ph/arrow11.png';
                arrow1.style = 'opacity: 1; transition: opacity 0.5s ease; position: absolute; width:6%; height:4%; text-align: center; left: 90%; top: 90%; transform: translate(-50%, -50%);';
                document.body.appendChild(arrow1);

                arrow1.addEventListener('click',function(){
                    dot3.classList.remove('active');
                    dot4.classList.add('active');
                    arrow1.style.opacity='0';
                    ans.style.opacity='0';
                    let ph1 = document.createElement('img');
                    ph1.src = 'ph/ph1.png';
                    ph1.style = 'opacity: 1; transition: opacity 0.5s ease; position: absolute; width:15%; height:25%; text-align: center; left: 20%; top: 40%; transform: translate(-50%, -50%);';
                    document.body.appendChild(ph1);

                    let ph2 = document.createElement('img');
                    ph2.src = 'ph/ph2.png';
                    ph2.style = 'opacity: 1; transition: opacity 0.5s ease; position: absolute; width:15%; height:25%; text-align: center; left: 60%; top: 40%; transform: translate(-50%, -50%);';
                    document.body.appendChild(ph2);

                    let ph3 = document.createElement('img');
                    ph3.src = 'ph/ph3.png';
                    ph3.style = 'opacity: 1; transition: opacity 0.5s ease; position: absolute; width:25%; height:30%; text-align: center; left: 85%; top: 20%; transform: translate(-50%, -50%);';
                    document.body.appendChild(ph3);

                    let ph4 = document.createElement('img');
                    ph4.src = 'ph/ph4.png';
                    ph4.style = 'opacity: 1; transition: opacity 0.5s ease; position: absolute; width:25%; height:35%; text-align: center; left: 25%; top: 80%; transform: translate(-50%, -50%);';
                    document.body.appendChild(ph4);

                    let ph5 = document.createElement('img');
                    ph5.src = 'ph/ph5.png';
                    ph5.style = 'opacity: 1; transition: opacity 0.5s ease; position: absolute; width:20%; height:30%; text-align: center; left: 80%; top: 70%; transform: translate(-50%, -50%);';
                    document.body.appendChild(ph5);

                    let ph6 = document.createElement('img');
                    ph6.src = 'ph/ph6.png';
                    ph6.style = 'opacity: 1; transition: opacity 0.5s ease; position: absolute; width:15%; height:25%; text-align: center; left: 40%; top: 65%; transform: translate(-50%, -50%);';
                    document.body.appendChild(ph6);

                    ph1.addEventListener('click', function() {
                        // 第一次点击ph6时执行的操作
                        ph1.style.opacity = '0';
                        ph2.style.opacity = '0';
                        ph3.style.opacity = '0';
                        ph4.style.opacity = '0';
                        ph5.style.opacity = '0';
                        ph6.style.opacity = '0';
                    
                        // 创建并显示ph6_1
                        let ph1_1 = document.createElement('img');
                        ph1_1.src = 'ph/ph1_1.png';
                        ph1_1.style = 'opacity: 1; transition: opacity 0.5s ease; position: absolute; width:80%; height:100%; text-align: center; left: 50%; top: 50%; transform: translate(-50%, -50%);';
                        document.body.appendChild(ph1_1);
                    
                        // 为ph6_1添加点击事件监听器
                        ph1_1.addEventListener('click', function() {
                            // 恢复原来的图片
                            ph1.style.opacity = '1';
                            ph2.style.opacity = '1';
                            ph3.style.opacity = '1';
                            ph4.style.opacity = '1';
                            ph5.style.opacity = '1';
                            ph6.style.opacity = '1';
                    
                            // 移除ph6_1
                            ph1_1.remove();
                        });
                    });         

                    ph2.addEventListener('click', function() {
                        // 第一次点击ph6时执行的操作
                        ph1.style.opacity = '0';
                        ph2.style.opacity = '0';
                        ph3.style.opacity = '0';
                        ph4.style.opacity = '0';
                        ph5.style.opacity = '0';
                        ph6.style.opacity = '0';
                    
                        // 创建并显示ph6_1
                        let ph2_1 = document.createElement('img');
                        ph2_1.src = 'ph/ph2_1.png';
                        ph2_1.style = 'opacity: 1; transition: opacity 0.5s ease; position: absolute; width:80%; height:100%; text-align: center; left: 50%; top: 50%; transform: translate(-50%, -50%);';
                        document.body.appendChild(ph2_1);
                    
                        // 为ph6_1添加点击事件监听器
                        ph2_1.addEventListener('click', function() {
                            // 恢复原来的图片
                            ph1.style.opacity = '1';
                            ph2.style.opacity = '1';
                            ph3.style.opacity = '1';
                            ph4.style.opacity = '1';
                            ph5.style.opacity = '1';
                            ph6.style.opacity = '1';
                    
                            // 移除ph6_1
                            ph2_1.remove();
                        });
                    });

                    ph3.addEventListener('click', function() {
                        // 第一次点击ph6时执行的操作
                        ph1.style.opacity = '0';
                        ph2.style.opacity = '0';
                        ph3.style.opacity = '0';
                        ph4.style.opacity = '0';
                        ph5.style.opacity = '0';
                        ph6.style.opacity = '0';
                    
                        // 创建并显示ph6_1
                        let ph3_1 = document.createElement('img');
                        ph3_1.src = 'ph/ph3_1.png';
                        ph3_1.style = 'opacity: 1; transition: opacity 0.5s ease; position: absolute; width:80%; height:100%; text-align: center; left: 50%; top: 50%; transform: translate(-50%, -50%);';
                        document.body.appendChild(ph3_1);
                    
                        // 为ph6_1添加点击事件监听器
                        ph3_1.addEventListener('click', function() {
                            // 恢复原来的图片
                            ph1.style.opacity = '1';
                            ph2.style.opacity = '1';
                            ph3.style.opacity = '1';
                            ph4.style.opacity = '1';
                            ph5.style.opacity = '1';
                            ph6.style.opacity = '1';
                    
                            // 移除ph6_1
                            ph3_1.remove();
                        });
                    });

                    ph4.addEventListener('click', function() {
                        // 第一次点击ph6时执行的操作
                        ph1.style.opacity = '0';
                        ph2.style.opacity = '0';
                        ph3.style.opacity = '0';
                        ph4.style.opacity = '0';
                        ph5.style.opacity = '0';
                        ph6.style.opacity = '0';
                    
                        // 创建并显示ph6_1
                        let ph4_1 = document.createElement('img');
                        ph4_1.src = 'ph/ph4_1.png';
                        ph4_1.style = 'opacity: 1; transition: opacity 0.5s ease; position: absolute; width:80%; height:100%; text-align: center; left: 50%; top: 50%; transform: translate(-50%, -50%);';
                        document.body.appendChild(ph4_1);
                    
                        // 为ph6_1添加点击事件监听器
                        ph4_1.addEventListener('click', function() {
                            // 恢复原来的图片
                            ph1.style.opacity = '1';
                            ph2.style.opacity = '1';
                            ph3.style.opacity = '1';
                            ph4.style.opacity = '1';
                            ph5.style.opacity = '1';
                            ph6.style.opacity = '1';
                    
                            // 移除ph6_1
                            ph4_1.remove();
                        });
                    });

                    ph5.addEventListener('click', function() {
                        // 第一次点击ph6时执行的操作
                        ph1.style.opacity = '0';
                        ph2.style.opacity = '0';
                        ph3.style.opacity = '0';
                        ph4.style.opacity = '0';
                        ph5.style.opacity = '0';
                        ph6.style.opacity = '0';
                    
                        // 创建并显示ph6_1
                        let ph5_1 = document.createElement('img');
                        ph5_1.src = 'ph/ph5_1.png';
                        ph5_1.style = 'opacity: 1; transition: opacity 0.5s ease; position: absolute; width:80%; height:100%; text-align: center; left: 50%; top: 50%; transform: translate(-50%, -50%);';
                        document.body.appendChild(ph5_1);
                    
                        // 为ph6_1添加点击事件监听器
                        ph5_1.addEventListener('click', function() {
                            // 恢复原来的图片
                            ph1.style.opacity = '1';
                            ph2.style.opacity = '1';
                            ph3.style.opacity = '1';
                            ph4.style.opacity = '1';
                            ph5.style.opacity = '1';
                            ph6.style.opacity = '1';
                    
                            // 移除ph6_1
                            ph5_1.remove();
                        });
                    });

                    ph6.addEventListener('click', function() {
                        // 第一次点击ph6时执行的操作
                        ph1.style.opacity = '0';
                        ph2.style.opacity = '0';
                        ph3.style.opacity = '0';
                        ph4.style.opacity = '0';
                        ph5.style.opacity = '0';
                        ph6.style.opacity = '0';
                    
                        // 创建并显示ph6_1
                        let ph6_1 = document.createElement('img');
                        ph6_1.src = 'ph/ph6_1.png';
                        ph6_1.style = 'opacity: 1; transition: opacity 0.5s ease; position: absolute; width:80%; height:100%; text-align: center; left: 50%; top: 50%; transform: translate(-50%, -50%);';
                        document.body.appendChild(ph6_1);
                    
                        // 为ph6_1添加点击事件监听器
                        ph6_1.addEventListener('click', function() {
                            // 恢复原来的图片
                            ph1.style.opacity = '1';
                            ph2.style.opacity = '1';
                            ph3.style.opacity = '1';
                            ph4.style.opacity = '1';
                            ph5.style.opacity = '1';
                            ph6.style.opacity = '1';
                    
                            // 移除ph6_1
                            ph6_1.remove();
                        });
                    });                    
                })
            },16500)
            
        }
        let lastScrollTime = 0; // 确保这行代码在 DOMContentLoaded 回调的开始声明

    document.addEventListener('wheel', function(event) {
        const now = Date.now();
        if (now - lastScrollTime > 1000) { // 使用节流机制，这里的间隔是 1000 毫秒
            lastScrollTime = now;
            
            if (event.deltaY > 0) { // 向下滚动
                if (wheeltimes < 20) { // 确保 wheeltimes 不小于0
                    wheeltimes++;
                }
            } else if (event.deltaY < 0) { // 向上滚动
                if (wheeltimes > 0) { // 确保 wheeltimes 不小于0
                    wheeltimes--;
                }
            }

            // 根据 wheeltimes 的当前值更新图片
            switch (wheeltimes) {
                case 0:
                    qgbh.src = 'ph/1.gif';
                    qgbhw1.src = 'ph/qgbhw1.png';
                    qgbhw2.src = 'ph/qgbhw2.png';
                    num.src='ph/num1.png';
                    break;
                case 4:
                    qgbh.src = 'ph/2.gif';
                    qgbhw1.src = 'ph/word1.png';
                    qgbhw2.src = 'ph/word1_1.png';
                    num.src='ph/num2.png';
                    break;
                case 8:
                    qgbh.src = 'ph/3.gif';
                    qgbhw1.src = 'ph/word2.png';
                    qgbhw2.src = 'ph/word2_1.png';
                    num.src='ph/num3.png';
                    break;
                case 12:
                    qgbh.src = 'ph/4.gif';
                    qgbhw1.src = 'ph/word3.png';
                    qgbhw2.src = 'ph/word3_1.png';
                    num.src='ph/num4.png';
                    break;
                case 16:
                    qgbh.src = 'ph/5.gif';
                    qgbhw1.src = 'ph/word4.png';
                    qgbhw2.src = 'ph/word4_1.png';
                    num.src='ph/num5.png';
                    break;
                case 20:
                    qgbh.src = 'ph/6.gif';
                    qgbhw1.src = 'ph/word5.png';
                    qgbhw2.src = 'ph/word5_1.png';
                    num.src='ph/num6.png';
                    break;
                default:
                    console.log('Unexpected wheeltimes value:', wheeltimes);
            }
        }
        });
        gonext.addEventListener('click',function(){

            if (qgbhw1.parentNode) qgbhw1.remove();
            if (qgbhw2.parentNode) qgbhw2.remove();
            if (turn.parentNode) turn.remove();
            if (num.parentNode) num.remove();
            if (gonext.parentNode) gonext.remove();
            if (qgbh.parentNode) qgbh.remove();

            health =document.createElement('img');
            health.src = 'ph/health.png';
            health.style='opacity 1s ease;transform 1s ease;position: absolute;width:50%;height:10%;text-align: center;left: 50%; top: 20%; transform: translate(-50%, -50%);transition: opacity ease,';
            document.body.appendChild(health);

            health2 =document.createElement('img');
            health2.src = 'ph/health2.png';
            health2.style='opacity 1s ease;transform 1s ease;position: absolute;width:8%;height:16%;text-align: center;left: 20%; top: 40%; transform: translate(-50%, -50%);transition: opacity ease,';
            document.body.appendChild(health2);

            health1 =document.createElement('img');
            health1.src = 'ph/health1.png';
            health1.style='opacity 1s ease;transform 1s ease;position: absolute;width:8%;height:16%;text-align: center;left: 50%; top: 50%; transform: translate(-50%, -50%);transition: opacity ease,';
            document.body.appendChild(health1);
            
            health3 =document.createElement('img');
            health3.src = 'ph/health3.png';
            health3.style='opacity 1s ease;transform 1s ease;position: absolute;width:8%;height:16%;text-align: center;left: 70%; top: 40%; transform: translate(-50%, -50%);transition: opacity ease,';
            document.body.appendChild(health3);

            health4 =document.createElement('img');
            health4.src = 'ph/health4.png';
            health4.style='opacity 1s ease;transform 1s ease;position: absolute;width:8%;height:16%;text-align: center;left: 15%; top: 70%; transform: translate(-50%, -50%);transition: opacity ease,';
            document.body.appendChild(health4);

            health5 =document.createElement('img');
            health5.src = 'ph/health5.png';
            health5.style='opacity 1s ease;transform 1s ease;position: absolute;width:8%;height:16%;text-align: center;left: 40%; top: 80%; transform: translate(-50%, -50%);transition: opacity ease,';
            document.body.appendChild(health5);

            health6 =document.createElement('img');
            health6.src = 'ph/health6.png';
            health6.style='opacity 1s ease;transform 1s ease;position: absolute;width:8%;height:16%;text-align: center;left: 60%; top: 85%; transform: translate(-50%, -50%);transition: opacity ease,';
            document.body.appendChild(health6);

            health7 =document.createElement('img');
            health7.src = 'ph/health7.png';
            health7.style='opacity 1s ease;transform 1s ease;position: absolute;width:8%;height:16%;text-align: center;left: 80%; top: 75%; transform: translate(-50%, -50%);transition: opacity ease,';
            document.body.appendChild(health7);

            arrowButton.style.opacity='1';
        })
    });
});
