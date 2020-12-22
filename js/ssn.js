window.onload = function() {
	let inputBtn = document.getElementById('inputBtn'); //확인 버튼
	let alertBox = document.getElementById('alertBox'); //알림창
	let alertDesc = document.getElementById('alertDesc'); //알림내용
	let alertBtn = document.getElementById('alertbBtn'); //알림창 확인버튼
	this.addEventListener('click',function(e) {
		switch (e.target.id) {
			case 'inputBtn' :
				let sfrontInput = document.getElementById('sfrontInput').value; //주민번호 앞자리
				let sbackInput = document.getElementById('sbackInput').value; //주민번호 뒷자리
				if (/^(\d){6}$/.test(sfrontInput)==false || /^(\d){7}$/.test(sbackInput)==false){ //오류검색
					alertBox.style.display="block";
					alertDesc.innerHTML = "입력한 값을 확인해주세요.";
				}		
				else { //주민번호 유효성 검사
					let i=0, j=0, k=0, inputArray=[], nSumValue=0;
					let checkArray = [2,3,4,5,6,7,8,9,2,3,4,5]; //검증번호
					while(i<sfrontInput.length) { //주민번호 앞자리 입력받은 값 배열에 담기
						inputArray.push(Number(sfrontInput[i])); 
						i++;
					}
					while(k<sbackInput.length) { //주민번호 뒷자리 입력받은 값 배열에 담기
						inputArray.push(Number(sbackInput[k])); 
						k++;
					}
					console.log(inputArray);
					while(j<checkArray.length) { //검증번호와 입력받은 값 각각 곱하여 더하기
						nSumValue += inputArray[j]*checkArray[j];
						j++;
					}
					let nModulNum = Math.floor(nSumValue%11);
					let nVerifiNum = 11-nModulNum;
					let resultBox = document.getElementById('resultBox');
					if (nVerifiNum==10) {nVerifiNum=0;}
					if (nVerifiNum==11) {nVerifiNum=1;}
					if (nVerifiNum == inputArray[12]) {  
						alertBox.style.display="block";
						alertDesc.innerHTML = "유효한 주민등록번호 입니다.";
					}
					else {
						alertBox.style.display="block";
						alertDesc.innerHTML = "유효한 주민등록번호가 아닙니다.";
					}
				} 
			break;
			case 'alertBtn': alertBox.style.display="none"; break;
		}
	});
}
