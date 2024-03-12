// 检查并在需要时添加新文本的函数
function addTextAfterImage5Removal() {
    var image5 = document.getElementById('image5');

    // 每隔一段时间检查image5是否还在页面上
    var checkInterval = setInterval(function() {
        if (!document.body.contains(image5)) { // 如果image5不再存在
            clearInterval(checkInterval); // 停止检查

            // 创建并添加新文本
            var newText = document.createElement('p');
            newText.textContent = '这里是一段新添加的文本。';
            newText.style.color = '#F1F1F1';
            newText.style.textAlign = 'center';
            document.body.appendChild(newText);
        }
    }, 1000); // 每秒检查一次
}

// 调用函数以启动检查过程
addTextAfterImage5Removal();
